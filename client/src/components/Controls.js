import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Controls = ({ onNextClick, onPrevClick, onShowClick, showAnswer }) => {
	const showButtonText = showAnswer ? 'See Question' : 'See Answer';
	return (
		<div className="control-buttons">
			<div>
				<Button variant="success" onClick={onPrevClick}>
					<FontAwesomeIcon name="back-button" icon="chevron-left" fixedWidth /> Back
				</Button>
				<Button variant="success" onClick={onNextClick}>Next
					<FontAwesomeIcon name="next-button" icon="chevron-right" fixedWidth />
				</Button>
			</div>
			<div>
				<Button variant="primary" onClick={onShowClick}>{showButtonText}</Button>
			</div>
		</div>
	);
}

Controls.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onPrevClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
	showAnswer: PropTypes.bool.isRequired
};

export default Controls;
