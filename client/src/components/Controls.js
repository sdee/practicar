import React, { PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function Controls({ onNextClick, onPrevClick, onShowClick, showAnswer }) {
	const showButtonText = showAnswer ? 'See Question' : 'See Answer';
	return (
		<div>
		<div>
		<Button bsStyle="success" onClick={onPrevClick}>Previous Question</Button>
			<Button bsStyle="success" onClick={onNextClick}>Next Question</Button>
		</div>
		<br/>
		<div>
		<Button bsStyle="primary" onClick={onShowClick}>{showButtonText}</Button>
		</div>
		</div>
	);
}

Controls.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
	showAnswer: PropTypes.bool.isRequired
};

export default Controls;
