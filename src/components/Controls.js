import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

function Controls({ onNextClick, onShowClick }) {
	return (
		<div>
			<Button bsStyle="success" onClick={onNextClick}>Next Question</Button>
			<Button bsStyle="primary" onClick={onShowClick}>See Answer</Button>
		</div>
	);
}

Controls.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired
};

export default Controls;
