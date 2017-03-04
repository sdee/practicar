import React, { PropTypes } from 'react';
import { Checkbox, OverlayTrigger, Glyphicon, Tooltip } from 'react-bootstrap';

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
			<Glyphicon
			className="def_glyph"
			glyph="question-sign"
			/>
			</OverlayTrigger>
		);
	}
	return (
		<div>
		<section className="card front">
		<div>
		<span className="questionNum">{questionNum}</span><br />
		<br />
		{pronoun}, <b>{infinitive}</b>{meaning}<br/>
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

export default VerbCard;
