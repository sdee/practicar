import React from 'react';
import PropTypes from 'prop-types';

function AnswerCard({ answer, irregularity, before, after }) {
	return (
		<div>
			<section className="card back">
				<div>
					{before}<span className="irregularity">{irregularity}</span>{after}
				</div>
			</section>
		</div>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.string.isRequired,
	irregularity: PropTypes.string.isRequired,
	before: PropTypes.string.isRequired,
	after: PropTypes.string.isRequired
};

export default AnswerCard;
