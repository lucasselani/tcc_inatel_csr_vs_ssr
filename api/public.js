import 'isomorphic-fetch';

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `http://localhost:${port}` : 'https://ssr-vs-csr.herokuapp.com';

async function sendRequest(path, method) {
    const headers = {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'tcc-inatel-2018',
    };

    const response = await fetch(
        `${ROOT_URL}${path}`,
<<<<<<< HEAD
        Object.assign({ method: method, headers: headers })
=======
        Object.assign({ method: method }, { headers })
>>>>>>> c45037dfcd1c940ff46e4b98c91c6073896fb766
    );

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export const getList = (path, method) => sendRequest(path, method);