import React, { PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';

function KeyboardListener({ cn, onNextClick, onShowClick }) {
	const keyMap = {
		left: 'left',
		right: 'right'
	};
	const handlers = {
		right: event => onNextClick(event),
		up: event => onShowClick(event)
	};
	return (
		<HotKeys keyMap={keyMap} handlers={handlers}>
			{cn}
		</HotKeys>
	);
}

KeyboardListener.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
	cn: PropTypes.node.isRequired
};

export default KeyboardListener;
