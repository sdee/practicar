import React, { PropTypes } from 'react';

function VerbCard({ infinitive, pronoun, tense, mood, questionNum }) {
	return (
		<div>
			<section className="card front">
				<div>
					<span className="questionNum">{questionNum}</span><br />
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
	questionNum: PropTypes.number.isRequired
};

export default VerbCard;
