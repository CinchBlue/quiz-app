import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './counter';
import BootstrapEx from './bootstrap-ex';

import App from './components/App';

import QuizPage from './pages/quiz-page'

const element = <h1>Hello world</h1>;

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<BootstrapEx />, document.getElementById('root'));
ReactDOM.render(<QuizPage onQuizCompletion={() => { console.log('completed'); }}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

