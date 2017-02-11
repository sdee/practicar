import React, { PropTypes } from 'react';
import {HotKeys} from 'react-hotkeys';

function KeyboardMouseListener({onNextClick, onShowClick}) {
	const keyMap = {
	'left': 'left',
	'right': 'right'
};
const handlers = {
	'right': (event) => onNextClick(),
	'up': (event) => onShowClick() 
};
	return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
                           test
                            </HotKeys>
		);
}

KeyboardMouseListener.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired
};

export default KeyboardMouseListener;