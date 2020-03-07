import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';

import { nextQuestion, prevQuestion, flipCard, toggleFocus } from '../actions';

function KeyboardListener(props) {
	function onRightKeyClick(e) {
		e.preventDefault();
		props.dispatch(nextQuestion(props.filters));
	}

	function onLeftKeyClick(e) {
		e.preventDefault();
		props.dispatch(prevQuestion(props.filters));
	}

	function onUpKeyClick(e) {
		e.preventDefault();
		props.dispatch(flipCard());
	}

	function onSpaceBarClick(e) {
		e.preventDefault();
		props.dispatch(toggleFocus());
	}

	const keyMap = {
		left: 'left',
		right: 'right',
		up: 'up',
		space: 'space'
	};
	const handlers = {
		right: event => onRightKeyClick(event),
		left: event => onLeftKeyClick(event),
		up: event => onUpKeyClick(event),
		space: event => onSpaceBarClick(event)
	};
	return (
		<HotKeys keyMap={keyMap} handlers={handlers}>
			{props.children}
		</HotKeys>
	);
}

KeyboardListener.propTypes = {
	dispatch: PropTypes.func.isRequired,
	filters: PropTypes.object.isRequired,
};

export default KeyboardListener;
