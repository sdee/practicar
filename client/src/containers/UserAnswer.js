import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button, Checkbox, Row } from 'react-bootstrap';
import { submitAnswer } from '../actions';

class UserAnswer extends Component {

	componentDidUpdate() {
		if (this.props.quiz.focus === 'userAnswer') {
			this.input.focus();
		}
	}

	render() {
		const { dispatch } = this.props;
		let ignoreAccents;
		return (
			<form
				className="userInput form-inline ctrl"
				onSubmit={(e) => {
					e.preventDefault();
					if (!this.input.value.trim()) {
						return;
					}
					dispatch(submitAnswer(this.input.value, ignoreAccents.checked));
					this.input.value = '';
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
							this.input = ref;
						}}
					/>
					{' '}
					<Button
						type="submit"
						bsStyle="success"
						bsSize="medium"
					>
						post
					</Button>
				</FormGroup>
				<Row>
					<Checkbox inputRef={(ref) => { ignoreAccents = ref; }}> Ignore Accents</Checkbox>
				</Row>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	quiz: state.quiz
});

UserAnswer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(UserAnswer);
