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

function App() {
	return (
		<KeyboardControls>
			<div className="App">
			<Card style={{ width: '100%' }}>
				<Card.Title>"Yo practico, tú practicas, nosotros practicamos"</Card.Title>
				<Container>
                        <Row className="show-grid">
                            <Col md={7}>
                                <Row className="show-grid">
                                    <ControlledCard />
                                </Row>
                                <Row className="flashcard ctrl">
                                    <br />
                                    <LinkControls />
                                </Row>
                                <Row className="flashcard ctrl">
                                    <br />
                                    <UserAnswer />
                                    <ShortcutInfo />
                                </Row>
                            </Col>
                            {/* <Col md={5}>
                                <CustomOptions />
                            </Col> */}
                        </Row>
                    </Container>
				</Card>
				{/* <Readme /> */}
			</div>
		</KeyboardControls>
	);
}

export default App;
