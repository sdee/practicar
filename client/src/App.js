import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import Readme from './components/Readme';
import ShortcutInfo from './components/ShortcutInfo';
import LinkControls from './containers/LinkControls';
import CustomOptions from './containers/CustomOptions';
import ControlledCard from './containers/ControlledCard';
import UserAnswer from './containers/UserAnswer';
import KeyboardControls from './containers/KeyboardControls';

function App() {
	return (
		<KeyboardControls>
			<div className="App">
				<Panel header="Yo practico, tú practicas, nosotros practicamos">
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
									<UserAnswer />
									<ShortcutInfo />
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
		</KeyboardControls>
	);
}

export default App;
