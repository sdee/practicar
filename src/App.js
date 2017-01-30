import React, { Component } from 'react';
import './App.css';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { HotKeys } from 'react-hotkeys';
import Readme from './components/Readme';
import Controls from './components/Controls';
import CustomOptions from './components/CustomOptions';

class App extends Component {
	state = {
		currentQuestion: {
			answer: 'foo'
		}
	};

	render() {
		var card;
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
