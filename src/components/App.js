import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuizPage from '../pages/quiz-page';
import { Container } from 'react-bootstrap';
import EmailPage from '../pages/email-page';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.handleEmailPageSubmit = this.handleEmailPageSubmit.bind(this);
    }

    handleQuizCompletion() {
        console.log('finished quiz');
    }

    handleEmailPageSubmit() {
        ReactDOM.render(
            <QuizPage handleQuizCompletion={this.handleQuizCompletion} time_limit="180" />,
            document.getElementById('app-root'));
    }

    render() {
        // 
        return <Container id="app-root">
            <EmailPage handleEmailPageSubmit={this.handleEmailPageSubmit} />
        </Container>;
    }
}