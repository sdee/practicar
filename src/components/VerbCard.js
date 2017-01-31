import React, { PropTypes } from 'react';

function VerbCard({ infinitive, pronoun, tense }) {
	return (
		<div>
			<section className="front">
				{pronoun},
				<b>{infinitive}</b>
				({tense})
			</section>
		</div>
	);
}

VerbCard.propTypes = {
	infinitive: PropTypes.string.isRequired,
	pronoun: PropTypes.string.isRequired,
	tense: PropTypes.string.isRequired
};

export default VerbCard;
