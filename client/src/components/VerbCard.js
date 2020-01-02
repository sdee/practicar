import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

function VerbCard({ infinitive, pronoun, tense, mood, questionNum, definition }) {
	let meaning = '';
	if (definition) {
		const tooltip = (
			<Tooltip id="tooltip" className="definition">{definition}</Tooltip>
		);
		meaning = (
			<OverlayTrigger
				placement="right"
				overlay={tooltip}
			>
			<FontAwesome name="info" className="question-circle" fixedWidth />;
			</OverlayTrigger>
		);
	}
	return (
		<div>
			<section className="card front">
				<div>
					<span className="question-num">{questionNum}</span>
					<br />
					<br />
					{pronoun}, <b>{infinitive}</b> {meaning}
					<br />
					({tense} {mood})
				</div>
			</section>
		</div>
	);
}

VerbCard.propTypes = {
	infinitive: PropTypes.string.isRequired,
	pronoun: PropTypes.string.isRequired,
	tense: PropTypes.string.isRequired,
	mood: PropTypes.string.isRequired,
	questionNum: PropTypes.number.isRequired,
	definition: PropTypes.string
};

VerbCard.defaultProps = {
	definition: ''
};

export default VerbCard;
