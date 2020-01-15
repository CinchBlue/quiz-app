import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Jumbotron, Form } from 'react-bootstrap';

export default class EmailPage extends Component {
    render() {
        return (
            <Jumbotron>
                <h2 class="header">Please enter your email to begin:</h2>
                <hr />
                <Form.Control as="text" placeholder="Your email" onChange={(event) => { console.log(event.target.value) }} />
                <Button onClick={this.props.handleEmailPageSubmit}>
                    Submit
                </Button>
            </Jumbotron>
        );
    }
}