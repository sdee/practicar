import React, { PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';

function KeyboardListener({ cn, onRightKeyClick, onLeftKeyClick, onUpKeyClick, onSpaceBarClick }) {
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
			{cn}
		</HotKeys>
	);
}

KeyboardListener.propTypes = {
	onRightKeyClick: PropTypes.func.isRequired,
	onLeftKeyClick: PropTypes.func.isRequired,
	onUpKeyClick: PropTypes.func.isRequired,
	onSpaceBarClick: PropTypes.func.isRequired,
	cn: PropTypes.node.isRequired
};

export default KeyboardListener;
