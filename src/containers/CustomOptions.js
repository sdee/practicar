import React from 'react';
import { Panel, FormGroup } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';

function CustomOptions() {
	return (
		<Panel header="">
			<Panel header="Customize your lesson">
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
			</Panel>
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

export default CustomOptions;
