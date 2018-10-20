import React, { Component } from 'react';
import { getList } from '../api/public';
import App from '../components/App';

function CSRUI({ list, loading }) {
    if (loading) {
        return (
            <div style={{ padding: '10px 45px' }}>
                <p>loading...</p>
            </div>
        )
    } else {
        return <App data = { list } />;
    }
}

class CSR extends Component {
    state = {
        list: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const list = await getList("/api/data", "GET");
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