import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button, Form, Row } from 'react-bootstrap';
import { submitAnswer } from '../actions';

const UserAnswer = (props) => {
	const { dispatch } = props;
	const input = useRef()
	const ignoreAccents = useRef()

	return (
		<form
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
			<FormGroup
				controlId="formUserAnswer"
			>
				<FormControl
					type="text"
					placeholder="Your Answer"
					ref={input}
				/>
				{' '}
				<Button
					type="submit"
					bsStyle="success"
					bsSize="small"
				>
					Post
					</Button>
			</FormGroup>
			<Row>
				<Form.Check type={'radio'} ref={ignoreAccents}> Ignore Accents</Form.Check>
			</Row>
		</form>
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
