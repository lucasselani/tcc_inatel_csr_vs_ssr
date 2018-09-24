import React, { Component } from 'react';
import Head from 'next/head';
import { getList } from '../api/public';

class SSR extends Component {

    static async getInitialProps() {
        const list = await getList("/api/images", "GET");
        return { list };
    }

    render() {
        const { list } = this.props;
        return (
            <div style={{ padding: '10px 45px' }}>
                <Head>
                    <title>SSR page</title>
                    <meta name="description" content="description for indexing bots" />
                </Head>
                <p>Content on SSR page</p>
                <br />
                <div>
                    {list.map((item, index) =>
                        <img key={index} src={item} />
                    )}
                </div>
            </div>
        );
    }
}

export default SSR;