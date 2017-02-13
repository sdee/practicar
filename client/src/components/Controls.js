import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

function Controls({ onNextClick, onShowClick, showAnswer }) {
  const showButtonText = showAnswer ? 'See Question' : 'See Answer';
	return (
		<div>
			<Button bsStyle="success" onClick={onNextClick}>Next Question</Button>
			<Button bsStyle="primary" onClick={onShowClick}>{showButtonText}</Button>
		</div>
	);
}

Controls.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
  showAnswer: PropTypes.bool.isRequired
};

export default Controls;
