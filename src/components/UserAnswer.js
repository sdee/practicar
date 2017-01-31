import React, { PropTypes } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

function UserAnswer({ onSubmitAnswer }) {
	return (
		<form className="userInput form-inline ctrl">
			<FormGroup
				controlId="formUserAnswer"
			>
				<FormControl
					type="text"
					placeholder="Your Answer"
				/>
				<Button
					type="submit"
					bsStyle="success"
					bsSize="small"
					onClick={onSubmitAnswer}
				>
					post
				</Button>
			</FormGroup>
		</form>
	);
}

UserAnswer.propTypes = {
	onSubmitAnswer: PropTypes.func.isRequired
};

export default UserAnswer;
