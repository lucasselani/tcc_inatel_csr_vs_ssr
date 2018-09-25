import React, { Component } from 'react';
import Head from 'next/head';
import { getList } from '../api/public';

function CSRUI({ list, loading }) {
    if (loading) {
        return (
            <div style={{ padding: '10px 45px' }}>
                <p>loading...(CSR page without data)</p>
            </div>
        )
    } else {
        return (
            <div style={{ padding: '10px 45px' }}>
                <Head>
                    <title>CSR page</title>
                    <meta name="description" content="description for indexing bots" />
                </Head>
                <p>Content on CSR page</p>
                <br />
                {list != null ? (
                    <div>
                        {list.map((item, index) =>
                            <img key={index} src={item} />
                        )}
                    </div>
                ) : null}
            </div>
        );

    }
}

class CSR extends Component {
    state = {
        list: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const list = await getList("/api/images", "GET");
            this.setState({
                list,
                loading: false,
            });
        } catch (err) {
            this.setState({ loading: false, error: err.message || err.toString() });
        }
    }

    render() {
        return <CSRUI {...this.props} {...this.state} />;
    }
}

export default CSR;