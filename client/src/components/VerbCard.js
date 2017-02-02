import React, { PropTypes } from 'react';

function VerbCard({ infinitive, pronoun, tense }) {
	return (
		<div>
			<section className="card front">
				<div>
					{pronoun}, <b>{infinitive}</b> ({tense})
				</div>
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
