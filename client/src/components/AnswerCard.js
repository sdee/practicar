import React, { PropTypes } from 'react';

function AnswerCard({ answer }) {
	return (
		<div>
			<section className="card back">
        <div>
          {answer}
        </div>
			</section>
		</div>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.string.isRequired
};

export default AnswerCard;
