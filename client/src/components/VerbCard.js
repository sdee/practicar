import React, { PropTypes } from 'react';

function VerbCard({ infinitive, pronoun, tense, mood, questionNo }) {
	return (
		<div>
			<section className="card front">
				<div>
					<span className="questionNo">{questionNo}</span><br />
					<br />
					{pronoun}, <b>{infinitive}</b><br />
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
	questionNo: PropTypes.number.isRequired
};

export default VerbCard;
