import React, { Component } from 'react';
import { Panel, Row, FormGroup, Checkbox } from 'react-bootstrap';

class CustomOptions extends Component {
	render() {
		return (
				<Panel header="Customize your lesson">
					<Row>
						<FormGroup>
							{' '}
							<Checkbox inline>
							allow irregular
							</Checkbox>
							{' '}
							<Checkbox inline>
							use vosotros
							</Checkbox>
							{' '}
							<Checkbox inline>
							allow repeats
							</Checkbox>
						</FormGroup>
					</Row>
					<Panel header="Choose tenses (advanced)">
						<FormGroup>
							<Checkbox>
							indicative (all)
							</Checkbox>
							{' '}
							<Checkbox>
							present
							</Checkbox>
							{' '}
							<Checkbox>
							preterite
							</Checkbox>
							<Checkbox>
							imperfect
							</Checkbox>
							<Checkbox>
							future
							</Checkbox>
						</FormGroup>
					</Panel>
				</Panel>
		);
	}
}

export default CustomOptions;
