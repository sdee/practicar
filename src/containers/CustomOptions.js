import React, { Component } from 'react';
import { Panel, Row, FormGroup } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';

class CustomOptions extends Component {
	render() {
		return (
				<Panel header="Customize your lesson">
					<Row>
						<FormGroup>
							<FilterCheckbox filter="SET_IRREGULAR" inline>
							allow irregular
							</FilterCheckbox>
							{' '}
							<FilterCheckbox filter="SET_VOSOTROS" inline>
							use vosotros
							</FilterCheckbox>
							{' '}
							<FilterCheckbox filter="SET_REPEATS" inline>
							allow repeats
							</FilterCheckbox>
						</FormGroup>
					</Row>
					<Panel header="Choose tenses (advanced)">
						<FormGroup>
							<FilterCheckbox filter="SET_INDICATIVE">
							indicative (all)
							</FilterCheckbox>
							{' '}
							<FilterCheckbox filter="SET_PRESENT">
							present
							</FilterCheckbox>
							{' '}
							<FilterCheckbox filter="SET_PRETERITE">
							preterite
							</FilterCheckbox>
							<FilterCheckbox filter="SET_IMPERFECT">
							imperfect
							</FilterCheckbox>
							<FilterCheckbox filter="SET_CONDITIONAL">
							conditional
							</FilterCheckbox>
							<FilterCheckbox filter="SET_FUTURE">
							future
							</FilterCheckbox>
						</FormGroup>
					</Panel>
				</Panel>
		);
	}
}

export default CustomOptions;
