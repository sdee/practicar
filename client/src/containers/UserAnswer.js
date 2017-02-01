import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button, Checkbox, Row } from 'react-bootstrap';
import { submitAnswer } from '../actions';

const UserAnswer = ({ dispatch }) => {
	let input;
	let ignoreAccents;

	return (
		<form
			className="userInput form-inline ctrl"
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(submitAnswer(input.value, ignoreAccents.checked));
				input.value = '';
			}
			}
		>
			<FormGroup
				controlId="formUserAnswer"
			>
				<FormControl
					type="text"
					placeholder="Your Answer"
					inputRef={(ref) => {
						input = ref;
					}}
				/>
				<Button
					type="submit"
					bsStyle="success"
					bsSize="small"
				>
					post
				</Button>
			</FormGroup>
			<Row>
				<Checkbox inputRef={(ref) => { ignoreAccents = ref; }}> Ignore Accents</Checkbox>
			</Row>
		</form>
	);
};

UserAnswer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const UserAnswerRedux = connect()(UserAnswer);

export default UserAnswerRedux;
