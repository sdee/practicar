import React, { Component, PropTypes } from 'react';
import { ButtonInput } from 'react-bootstrap';

class UserAnswer extends Component {
	static propTypes = {
		answer: PropTypes.string
	};

	render() {
		return (
			<div>
				<b><font></font></b>
				<form className="userInput form-inline ctrl">
					<input
						autoFocus
						type="text"
						placeholder="Your Answer"
					/>
					<ButtonInput type="submit" value="post" bsStyle="success" bsSize="small" />
					<br />
					<input type="checkbox"/> Ignore Accents
				</form>
			</div>
		);
	}
}

export default UserAnswer;