import React, { Component, PropTypes } from 'react';

class AnswerCard extends Component {
	static propTypes = {
		answer: PropTypes.string.isRequired
	};

	render() {
		return (<div>
			<section className="back">
				{this.props.answer}
			</section>
		</div>
		);
	}
}

export default AnswerCard;