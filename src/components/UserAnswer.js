import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

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
					<Button type="submit" bsStyle="success" bsSize="small">post</Button>
					<br />
					<input type="checkbox"/> Ignore Accents
				</form>
			</div>
		);
	}
}

export default UserAnswer;