import 'isomorphic-fetch';

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

async function sendRequest(path, options = {}) {
    const headers = {
        'Content-type': 'application/json; charset=UTF-8',
    };

    const response = await fetch(
        `${ROOT_URL}${path}`,
        Object.assign({ method: 'POST', credentials: 'include' }, { headers }, options),
    );

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

// path = api/images ---- method = GET
export const getList = (path, method) => sendRequest(path, { method: method, });