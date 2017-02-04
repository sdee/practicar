import React, { PropTypes } from 'react';

function createMarkup(answer, irregularity) {
	var msg = [];
	if (irregularity.length > 0) {
		const i = answer.indexOf(irregularity);
		const j = i+irregularity.length;
		const before = answer.slice(0, i).trim();
		const after = answer.slice(j,answer.length).trim();
		msg = [before, '<span style="color:red">', irregularity, '</span>', after];
	}
	else {
		msg = [answer];
	}
	return {__html: msg.join("")};
}

function AnswerCard({ answer, irregularity }) {
	return (
		<div>
			<section className="card back">
				<div>
					<div dangerouslySetInnerHTML={createMarkup(answer, irregularity)} />
				</div>
			</section>
		</div>
	);
}

AnswerCard.propTypes = {
	answer: PropTypes.string.isRequired
};

export default AnswerCard;
