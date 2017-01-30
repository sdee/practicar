import React, { Component } from 'react';
import './App.css';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { HotKeys } from 'react-hotkeys';
import Readme from './components/Readme';
import Controls from './components/Controls';
import CustomOptions from './components/CustomOptions';
import FeedbackCard from './components/FeedbackCard';
import VerbCard from './components/VerbCard';
import AnswerCard from './components/AnswerCard';
import MessageCard from './components/MessageCard';
import UserAnswer from './components/UserAnswer';

class App extends Component {
	state = {
		currentQuestion: {
			answer: 'foo',
			infinitive: '',
			tense: '',
			text: 'foo'
		},
		quiz: {},
		submittedAnswer: false,
		showAnswer: false,
		correct: false
	};

	render() {
		// let questions = this.state.quiz;
		let curr = this.state.currentQuestion;
		let card;
		const keyMap = {
			'left': 'left',
			'right': 'right'
		};
		const handlers = {
			// 'right': (event) => this.getFlux().actions.nextQuestion(this.state.enableIrregular,
			// this.state.useVosotros,
			// this.state.allowPresent,
			// this.state.allowPreterite,
			// this.state.allowImperfect,
			// this.state.allowConditional,
			// this.state.allowFuture),
			// 'up': (event) => this.getFlux().actions.showAnswer()
		};
		if (this.state.hasSubmittedAnswer && curr.infinitive) {
			card = <FeedbackCard
								correct={this.state.correct}
								correctAnswer={curr.answer}
								submittedAnswer={this.state.submittedAnswer}
						 />;
		}
		else if (curr.infinitive && this.state.showAnswer === false) {
			card = <VerbCard pronoun={curr.pronoun} infinitive={curr.infinitive} tense={curr.tense} />;
		}
		else if (curr.infinitive && this.state.showAnswer === true) {
			card = <AnswerCard answer={curr.answer}/>;
		}
		else {
			card = <MessageCard msg={curr.text}/>;
		}
		return (
			<div className="App">
				<Panel header="practice your verbs, eat your vegetables">
					<Grid>
						<Row className="show-grid">
							<Col md={7}>
								<Row className="show-grid">
									<HotKeys keyMap={keyMap} handlers={handlers}>
										{card}
									</HotKeys>
								</Row>
								<Row className="card ctrl">
									<br></br>
									<Controls question={this.state.currentQuestion}/>
								</Row>
								<Row className="card ctrl">
									<br></br>
									<HotKeys keyMap={keyMap} handlers={handlers}>
										<UserAnswer answer={this.state.currentQuestion.answer}/>
									</HotKeys>
								</Row>
							</Col>
							<Col md={5}>
								<CustomOptions/>
							</Col>
						</Row>
					</Grid>
				</Panel>
				<Readme/>
			</div>
		);
	}
}

export default App;
