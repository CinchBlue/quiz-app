import React, { Component } from 'react';
import QuizPage from '../pages/quiz-page';
import { Container } from 'react-bootstrap';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    handleQuizCompletion() {
        console.log('finished quiz');
    }

    render() {
        return <Container>
            <QuizPage handleQuizCompletion={this.handleQuizCompletion} time_limit="180" />
        </Container>;
    }
}