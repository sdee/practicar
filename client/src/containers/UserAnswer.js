import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button, Form, Row } from 'react-bootstrap';
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
						bsSize="small"
					>
						Post
					</Button>
				</FormGroup>
				<Row>
					<Form.Check type={'radio'} inputRef={(ref) => { ignoreAccents = ref; }}> Ignore Accents</Form.Check>
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
