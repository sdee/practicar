import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Readme from './components/Readme';
import ShortcutInfo from './components/ShortcutInfo';
import LinkControls from './containers/LinkControls';
import CustomOptions from './containers/CustomOptions';
import ControlledCard from './containers/ControlledCard';
import UserAnswer from './containers/UserAnswer';
import KeyboardControls from './containers/KeyboardControls';
import {useRoutes} from 'hookrouter';

const Verbs = () => {
	return (
		<KeyboardControls>
			<div className="App">
				<Card style={{ width: '100%' }}>
					<Card.Header>Yo practico, tú practicas, nosotros practicamos</Card.Header>
					<Card.Body>
						<Container>
							<Row className="show-grid">
								<Col md={7}>
									<Row className="show-grid">
										<ControlledCard />
									</Row>
									<Row className="ctrl">
										<LinkControls />
									</Row>
									<Row className="ctrl">
										<UserAnswer />
									</Row>
									<Row className="ctrl">
										<ShortcutInfo />
									</Row>
								</Col>
								<Col md={5}>
									<CustomOptions />
								</Col>
							</Row>
						</Container>
					</Card.Body>
				</Card>
				<Readme />
			</div>
		</KeyboardControls>
	);
}

const Numbers = () => {
	return (
		<KeyboardControls>
			<div className="App">
				<Card style={{ width: '100%' }}>
					<Card.Header>Cuenta conmigo. Uno, dos, tres ...</Card.Header>
					<Card.Body>
					<Container>
							<Row className="show-grid">
								<Col md={7}>
									<Row className="show-grid">
										<ControlledCard />
									</Row>
									<Row className="ctrl">
										<LinkControls />
									</Row>
									<Row className="ctrl">
										<UserAnswer />
									</Row>
									<Row className="ctrl">
										<ShortcutInfo />
									</Row>
								</Col>
								<Col md={5}>
									<CustomOptions />
								</Col>
							</Row>
						</Container>
					</Card.Body>
				</Card>
				<Readme />
			</div>
		</KeyboardControls>
	);
}

const routes = {
	'/': () => <Verbs />,
	'/numbers': () => <Numbers />,
};

const App = () => {
	const routeResult = useRoutes(routes);
	return routeResult || 'nada'
}

export default App;
