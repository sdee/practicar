import React, { PropTypes } from 'react';
import {HotKeys} from 'react-hotkeys';

function KeyboardMouseListener({cn, onNextClick, onShowClick}) {
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
                           {cn}
                            </HotKeys>
		);
}

KeyboardMouseListener.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
	cn: PropTypes.node.isRequired
};

export default KeyboardMouseListener;