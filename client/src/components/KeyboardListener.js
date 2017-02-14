import React, { PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';

function KeyboardListener({ cn, onRightKeyClick, onLeftKeyClick, onUpKeyClick }) {
	const keyMap = {
		left: 'left',
		right: 'right'
	};
	const handlers = {
		right: event => onRightKeyClick(event),
		left: event => onLeftKeyClick(event),
		up: event => onUpKeyClick(event)
	};
	return (
		<HotKeys keyMap={keyMap} handlers={handlers}>
			{cn}
		</HotKeys>
	);
}

KeyboardListener.propTypes = {
	onRightKeyClick: PropTypes.func.isRequired,
	onLeftKeyClick: PropTypes.func.isRequired,
	onUpKeyClick: PropTypes.func.isRequired,
	cn: PropTypes.node.isRequired
};

export default KeyboardListener;
