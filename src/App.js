import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Readme from './components/Readme';
import LinkControls from './containers/LinkControls';
import CustomOptions from './containers/CustomOptions';
import ControlledCard from './containers/ControlledCard';
import UserAnswer from './components/UserAnswer';

function submitAnswer(e) {
	e.preventDefault();
	// dispatch user input redux action
	// track user input in store and get back
	// whether correct or not

  // var tidyText = this.state.userAnswer.trim();
  // if (!tidyText) {
  //     return;
  // }
  // //check answer and change color
  // //check if correct
  // var correctAnswer = this.props.answer;
  // if (this.state.ignoreAccents) {
  //     tidyText = Utils.accentsTidy(tidyText);
  //     correctAnswer = Utils.accentsTidy(correctAnswer);
  // }
  // var correct = tidyText == correctAnswer;
  // this.setState({finalAnswer: tidyText});//submitted
  // this.setState({correct: correct});
  // this.setState({userAnswer: ''}); //user input as being typed
}

class App extends Component {
	render() {
		// let questions = this.state.quiz;
		// const curr = this.state.currentQuestion;
		return (
			<div className="App">
				<Panel header="practice your verbs, eat your vegetables">
					<Grid>
						<Row className="show-grid">
							<Col md={7}>
								<Row className="show-grid">
									<ControlledCard />
								</Row>
								<Row className="card ctrl">
									<br />
									<LinkControls />
								</Row>
								<Row className="card ctrl">
									<br />
									<UserAnswer onSubmitAnswer={submitAnswer} />
								</Row>
							</Col>
							<Col md={5}>
								<CustomOptions />
							</Col>
						</Row>
					</Grid>
				</Panel>
				<Readme />
			</div>
		);
	}
}

export default App;
