var firebase = require('firebase-admin');
var serviceAccount = require("./firebase.json");

const bodyParser = require('body-parser');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://tcc-ssr-vs-csr.herokuapp.com/';

const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    var server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    var request = require('request').defaults({ encoding: null });
    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: "https://tcc-ssr-vs-csr.firebaseio.com"
    });
    var db = firebase.database();

    server.get('/api/images', async (req, res) => {
        try {
            var ref = db.ref("images");
            const data = await ref.once("value");
            var results = [];
            data.forEach(element => {
                results.push(element.val().image);
            });
            return res.json(results);
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
    });

    server.post('/api/images', async (req, res) => {
        try {
            await request.get(req.body.image, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var ref = db.ref("images");
                    const image = "data:" + response.headers["content-type"] + ";base64," + new Buffer(body).toString('base64');
                    const data = ref.push({ image }, error => {
                        if (error) {
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(201);
                        }
                    });
                }
            });
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
    });

    server.delete('/api/images', async (req, res) => {
        try {
            var ref = db.ref("images");
            ref.remove();
            return res.json({ sucess: true });
        } catch (err) {
            res.json({ error: err.message || err.toString() });
        }
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on ${ROOT_URL}`);
    });
});