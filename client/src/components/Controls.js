import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

function Controls({ onNextClick, onPrevClick, onShowClick, showAnswer }) {
	const showButtonText = showAnswer ? 'See Question' : 'See Answer';
	return (
		<div>
			<div>
				<Button bsStyle="success" onClick={onPrevClick}>
					<FontAwesome name="back-button" className="fa-chevron-left" fixedWidth />
				</Button>
				{' '}
				<Button bsStyle="success" onClick={onNextClick}>Next
				<FontAwesome name="next-button" className="fa-chevron-right" fixedWidth />
				</Button>
			</div>
			<br />
			<div>
				<Button bsStyle="primary" onClick={onShowClick}>{showButtonText}</Button>
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
