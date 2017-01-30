import React, { Component, PropTypes } from 'react';

class VerbCard extends Component {
	static propTypes = {
		infinitive: PropTypes.string.isRequired,
		pronoun: PropTypes.string.isRequired,
		tense: PropTypes.string.isRequired
	};

	getInitialState() {
		return {};
	}

	render() {
		return (
			<div>
				<section className="front">
					{this.props.pronoun},
					<b>{this.props.infinitive}</b>
					({this.props.tense})
				</section>
			</div>
		);
	}
}

export default VerbCard;
