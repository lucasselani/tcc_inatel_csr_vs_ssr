require('es6-promise').polyfill();
import 'isomorphic-fetch';

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://ssr-vs-csr.herokuapp.com';

async function sendRequest(path, method) {
    const headers = {
        'key': 'tcc-inatel-2018',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    };
    var options = Object.assign({ method: method, headers: headers });
    const response = await fetch(`${ROOT_URL}${path}`, options);
    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }
    return data;
}

export const getList = (path, method) => sendRequest(path, method);