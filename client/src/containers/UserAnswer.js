import React, {Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import { FormGroup, FormControl, Button, Checkbox, Row } from 'react-bootstrap';
import { submitAnswer } from '../actions';
var ReactDOM = require('react-dom');

class UserAnswer extends Component {

	componentDidMount(){
		const { dispatch } = this.props;
	}

	componentDidUpdate(){
		if (this.props.quiz.focus==='userAnswer'){
			ReactDOM.findDOMNode(this.answerField).focus();
		}
	}

	render() {
		const { dispatch } = this.props;
		let userAnswer;
		let ignoreAccents;
		let input;
		return(
			<form
			className="userInput form-inline ctrl"
			ref={(form) => { this.userAnswer = form; }}
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
		ref={(FormControl) => {
			this.answerField= FormControl;
		}}
		inputRef={(ref) => {
						input = ref;
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
