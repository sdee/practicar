import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Readme from './components/Readme';
import LinkControls from './containers/LinkControls';
import CustomOptions from './containers/CustomOptions';
import ControlledCard from './containers/ControlledCard';
import UserAnswer from './containers/UserAnswer';
import KeyboardMouseControls from './containers/KeyboardMouseControls'

function App() {
	return (
		<KeyboardMouseControls>
		<div className="App">
			<Panel header="practice your verbs, eat your vegetables">
				<Grid>
					<Row className="show-grid">
						<Col md={7}>
							<Row className="show-grid">
								<ControlledCard/>
							</Row>
							<Row className="card ctrl">
								<br />
								<LinkControls />
							</Row>
							<Row className="card ctrl">
								<br />
								<UserAnswer />
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
		</KeyboardMouseControls>
	);
}

export default App;
