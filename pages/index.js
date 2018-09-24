import React, { Component } from 'react';
import Head from 'next/head';

class Main extends Component {
    render() {
        return (
            <div style={{ padding: '10px 45px' }}>
                <Head>
                    <title>Index page</title>
                    <meta name="description" content="description for indexing bots" />
                </Head>
                <p>Content on Index page</p>
                <a href="/ssr">SSR</a>
                <br/>
                <a href="/csr">CSR</a>
            </div>
        );
    }
}

export default Main;