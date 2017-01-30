import React, { Component, PropTypes } from 'react';

class FeedbackCard extends Component {
	static propTypes = {
		correct: PropTypes.bool.isRequired,
		correctAnswer: PropTypes.string.isRequired,
		submittedAnswer: PropTypes.string.isRequired
	};

	getInitialState() {
		return {};
	}

	render() {
		return (
			<div>
				<section className="back">
					<font color={this.props.correct ? "green" : "red"}>{this.props.submittedAnswer}</font>
					<font color="black">{this.props.correct == false ? "->" + this.props.correctAnswer : ''}</font>
				</section>
			</div>
		)
	}
});

export default FeedbackCard;