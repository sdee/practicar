import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Readme from './components/Readme';
import PropTypes from 'prop-types';
import ShortcutInfo from './components/ShortcutInfo';
import LinkControls from './containers/LinkControls';
import ControlledCard from './components/ControlledCard';
import UserAnswer from './containers/UserAnswer';
import KeyboardControls from './containers/KeyboardControls';
import CustomOptions from './containers/numbers/CustomOptions'

/*
Organizes Layout for Numbers Quiz UI
*/
const Numbers = (props) => {
	const {filters} = props;
	return (
		<KeyboardControls filters ={filters}>
			<div className="App">
				<Card style={{ width: '100%' }}>
					<Card.Header>Cuenta conmigo. Uno, dos, tres ...</Card.Header>
					<Card.Body>
					<Container>
							<Row className="show-grid">
								<Col md={7}>
									<Row className="show-grid">
										<ControlledCard type="numbers" {...props} />
									</Row>
									<Row className="ctrl">
										<LinkControls filters={filters} />
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

Numbers.propTypes = {
	dispatch: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	quiz: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

export default Numbers;
