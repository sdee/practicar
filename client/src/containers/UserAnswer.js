import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { submitAnswer } from '../actions';

const UserAnswer = (props) => {
	const { dispatch } = props;
	const input = useRef()
	const ignoreAccents = useRef()

	return (
		<div id="user-answer">
			<Form
				className="userInput form-inline ctrl"
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.current.value.trim()) {
						return;
					}
					dispatch(submitAnswer(input.current.value, ignoreAccents.checked));
					input.current.value = '';
				}
				}
			>
				<Form.Group controlId="formUserAnswer">
					<Form.Control
						type="text"
						placeholder="Your Answer"
						ref={input}
					/>
					<Button type="submit" variant="success" size="sm">Post</Button>
				</Form.Group>
			</Form>
			<div>
				<Form.Check type="checkbox" ref={ignoreAccents} label="Ignore Accents" />
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return ({
		quiz: state.quiz
	})
};

UserAnswer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(UserAnswer);
