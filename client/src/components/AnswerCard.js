import React, { PropTypes } from 'react';

function getBeforeAfter(answer, irregularity) {
	const beforeAfter = {};
	const iStartIndex = answer.indexOf(irregularity);
	const iEndIndex = iStartIndex + irregularity.length;
	beforeAfter.before = answer.slice(0, iStartIndex).trim();
	beforeAfter.after = answer.slice(iEndIndex, answer.length).trim();
	return beforeAfter;
}

function AnswerCard({ answer, irregularity }) {
	let before = '';
	let after = '';
	if (irregularity.length > 0) {
		const beforeAfter = getBeforeAfter(answer, irregularity);
		before = beforeAfter.before;
		after = beforeAfter.after;
	} else {
		before = answer;
	}
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
	irregularity: PropTypes.string.isRequired
};

export default AnswerCard;
