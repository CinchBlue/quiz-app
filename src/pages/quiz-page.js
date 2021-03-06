import React, { Component, useState } from 'react';

import './quiz-page.css'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Jumbotron, Form } from 'react-bootstrap';

function QuestionHeader(props) {
    return <h2 className="display-3">What would you answer to this question ({props.id})?</h2>
}

class TextForm extends Component {
    state = { value: '' }

    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
        this.props.handleUpdate(this.state);
    }

    render() {
        return (<>
            <Form.Control as="textarea" rows="10" placeholder="Your answer" onChange={this.onChange} />
        </>);
    }
}

export default class QuizPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current_question: 1,
            num_questions: 5,
            time_remaining: props.time_limit, // 3 minutes
            answer_text: '',
        }

        // method/this binds
        this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
        this.restartTimer = this.restartTimer.bind(this);
        this.tickTimer = this.tickTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.triggerNextQuestion = this.triggerNextQuestion.bind(this);
        this.triggerQuizCompletion = this.triggerQuizCompletion.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
    };

    componentDidMount() {
        this.restartTimer();
    }

    formatTimeRemaining(timeSec) {
        let hours = Math.floor(timeSec / 3600);
        let minutes = (Math.floor(timeSec / 60) % 60);
        let seconds = Math.floor(timeSec) % 60;

        if (hours < 10) { hours = `0${hours}`; }
        if (minutes < 10) { minutes = `0${minutes}`; }
        if (seconds < 10) { seconds = `0${seconds}`; }

        return hours + ':' + minutes + ':' + seconds;
     }


    restartTimer() {
        clearInterval(this.timer);
        this.setState({ time_remaining: this.props.time_limit });
        this.timer = setInterval(this.tickTimer, 1000);
    }

    tickTimer() {
        // Remove one second, set state so we render
        let seconds = this.state.time_remaining - 1;
        this.setState({
            time_remaining: seconds,
        });

        // Clear the timer if it is at 0.
        if (seconds == 0) {
            clearInterval(this.timer);
            this.triggerNextQuestion();
        }
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    triggerNextQuestion() {
        console.log(this.state.answer_text);
        this.setState({ current_question: this.state.current_question + 1 });
        this.restartTimer();
    }

    triggerQuizCompletion() {
        this.stopTimer();
        this.props.handleQuizCompletion();
    }

    onClickSubmitButton(event) {
        event.preventDefault();
        if (this.state.current_question < this.state.num_questions) {
            this.triggerNextQuestion();
        } else {
            this.triggerQuizCompletion();
        }
    }

    handleAnswerChange(childState) {
        this.setState({ answerText: childState.value });
    }

    render() {
        return (
            <Jumbotron className="centered">
                <span className="centered">This is question {this.state.current_question} out of {this.state.num_questions}</span>
                <br />
                <strong className="centered">{this.formatTimeRemaining(this.state.time_remaining)}</strong>
                <QuestionHeader id={this.state.current_question} />
                <hr />
                <TextForm handleUpdate={this.handleAnswerChange} />;
                <Button variant="primary" size="lg" dataDisableWith="Next" onClick={this.onClickSubmitButton}>
                    {this.state.current_question == this.state.num_questions ? "Finish" : "Submit"}
                </Button>
            </Jumbotron>
        );
    }
}
