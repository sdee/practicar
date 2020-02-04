import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from '../containers/Slider';

function CustomNumberOptions() {
	return (
		<div>
			<Card id="customize-card">
				<Card.Header>Customize your lesson</Card.Header>
				<Card.Body>
					<Slider />
					<br/>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CustomNumberOptions;
