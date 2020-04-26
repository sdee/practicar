import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePath } from 'hookrouter';
import { Card, Container, Row, Col } from 'react-bootstrap';

import Readme from './Readme';
import ShortcutInfo from './ShortcutInfo';
import CustomNumberOptions from './CustomNumberOptions';
import CustomVerbOptions from './CustomVerbOptions';
import ControlledCard from './ControlledCard';
import KeyboardListener from './KeyboardListener';
import LinkControls from '../containers/LinkControls';
import UserAnswer from '../containers/UserAnswer';
import { loadQuizWithParameters, switchQuiz } from '../actions';

import './QuizPage.css';

/*
*   Organizes Layout for Quiz UI
*/
const QuizPage = (props) => {
	const { type, headerText, filters, dispatch, quiz, user, currentSession } = props;
	const path = usePath();
	const quizType = path.slice(1) || 'verbs';
	useEffect(() => {
		if (quizType !== type) {
			dispatch(switchQuiz(quizType));
		} else {
			dispatch(loadQuizWithParameters(quizType, filters));
		}
	}, [quizType, type, filters, dispatch]);

	const customOptions = (quizType === 'numbers') ? <CustomNumberOptions /> : <CustomVerbOptions />
	return (
		<KeyboardListener filters={filters} dispatch={dispatch}>
			<div className="App">
				<Card style={{ width: '100%' }}>
					<Card.Header>{headerText}</Card.Header>
					<Card.Body>
						<Container>
							<Row className="show-grid">
								<Col md={7}>
									<Row className="show-grid">
										<ControlledCard type={quizType} filters={filters} quiz={quiz} user={user} dispatch={dispatch} sessionOver={currentSession.sessionOver} />
									</Row>
									<Row className="ctrl">
										<LinkControls filters={filters} isLastQuestion={currentSession.isLastQuestion} />
									</Row>
									<Row className="ctrl">
										<UserAnswer />
									</Row>
									<Row className="ctrl">
										<ShortcutInfo />
									</Row>
								</Col>
								<Col md={5}>
									{customOptions}
								</Col>
							</Row>
						</Container>
					</Card.Body>
				</Card>
				<Readme />
			</div>
		</KeyboardListener>
	);
}

QuizPage.propTypes = {
	type: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
	quiz: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	filters: PropTypes.object.isRequired,
	headerText: PropTypes.string.isRequired,
	currentSession: PropTypes.object.isRequired,
};

export default QuizPage;
