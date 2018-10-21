import React, { Component } from 'react';
import { getList } from '../api/public';
import { renderToString } from 'react-dom/server';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Html from '../components/Html';
import { ServerStyleSheet } from 'styled-components'; 
import Head from 'next/head';

// import StyleSheet from 'styled-components/lib/models/StyleSheet';
// StyleSheet.reset(true); 

class SSR extends Component {
    static async getInitialProps() {
        const list = await getList("/api/data", "GET");
        return { list };
    }

    render() {
        const { list } = this.props;
        return (
            <div style={{ textAlign: 'center', margin: '0' }}>
                <Head>
                    <title>SSR React App</title>
                    <meta name="description" content="description for indexing bots" />
                </Head>
                <div className="root">
                    {list.map((item, index) => {
                        return(
                            <a key={index}>
                                <h2> {item.name} </h2>
                            </a>   
                        )}         
                    )}
                </div>

                <style jsx>{`
                    .root {
                        padding-top: 30px;
                        height: calc(100vh - 30px);
                        text-align: center;
                        background: linear-gradient(20deg,rgb(131, 25, 126),#ff7d2b);
                    }

                    a {
                        max-width: 350px;
                        width: 100%;
                        display: inline-block;
                        border-radius: 3px;
                        color: #000;
                        margin: 0 10px 15px;
                        box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
                        background-color: bisque;
                    }

                    h2 {
                        text-align: center;
                        color: #000;
                        margin: 0;
                        font-family: monospace;
                        font-size: 24px;
                        line-height: 32px;
                    }
                `}</style>
            </div>
        );
    }
}

export default SSR;