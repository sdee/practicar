import React from 'react';
import { Panel } from 'react-bootstrap';

function ShortcutInfo(props) {
	return (
		<Panel>
			<h4><b>Keyboard Shortcuts</b></h4>
			<b>Left arrow</b>: Previous Question<br/>
			<b>Right arrow</b>: Next Question<br/>
			<b>Up arrow</b>: Flip Card<br/>
			<b>Space bar</b>: Toggles focus between Answer Field and Card<br/>
		</Panel>
	);
}

export default ShortcutInfo;
