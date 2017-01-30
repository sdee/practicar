import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Controls extends Component {
	render() {
		return (
			<div>
				<Button bsStyle="success">Next Question</Button>
				<Button bsStyle="primary">See Answer</Button>
			</div>
		);
	}
}

export default Controls;