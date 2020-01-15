import React, { Component } from 'react';
import Button from 'react-bootstrap';

export default class Counter extends Component {
    state = { value: 1 };

    render() {
        return (<div>
            <div>{this.state.value}</div>
            <button onClick={() => {
                this.setState({ value: this.state.value + 1});
            }}>Increment</button>
        </div>);
    }
}