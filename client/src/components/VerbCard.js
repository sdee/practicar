import React, { PropTypes } from 'react';

function VerbCard({ infinitive, pronoun, tense, mood }) {
	return (
		<div>
			<section className="card front">
				<div>
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
	mood: PropTypes.string.isRequired
};

export default VerbCard;
