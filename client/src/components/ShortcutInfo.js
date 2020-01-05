import React from 'react';
import { Card } from 'react-bootstrap';

function ShortcutInfo(props) {
	return (
		<Card className="shortcuts text-center">
			<Card.Body>
				<h4><b>Keyboard Shortcuts</b></h4>
				<div>
					<b>Left arrow</b>: Previous Question<br />
					<b>Right arrow</b>: Next Question<br />
					<b>Up arrow</b>: Flip Card<br />
					<b>Space bar</b>: Toggles focus between Answer Field and Card<br />
				</div>
			</Card.Body>
		</Card>
	);
}

export default ShortcutInfo;
