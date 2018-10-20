const bodyParser = require('body-parser');
const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://ssr-vs-csr.herokuapp.com';

const app = next({
    dev
});
const handle = app.getRequestHandler();

const data = [{
        "name": "Rick Sanchez"
    },
    {
        "name": "Morty Smith"
    },
    {
        "name": "Summer Smith"
    },
    {
        "name": "Jerry Smith"
    },
    {
        "name": "Beth Smith"
    },
    {
        "name": "Jessica"
    },
    {
        "name": "Mr. Goldenfold"
    },
    {
        "name": "Coach Feratu"
    }
]

app.prepare().then(() => {
    var server = express();
    server.options('*', cors())
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));
    server.use(function (req, res, next) {
        if (req.headers.key !== "tcc-inatel-2018" && req.url.startsWith("/api/")) {
            return res.sendStatus(401);
        }
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        next();
    });

    server.get('/api/data', async (req, res) => {
        try {
            return res.json(data);
        } catch (err) {
            res.json({
                error: err.message || err.toString()
            });
        }
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on ${ROOT_URL}`);
    });
});