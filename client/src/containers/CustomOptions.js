import React from 'react';
import { Panel, FormGroup } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';

function CustomOptions() {
	return (
		<Panel header="">
			<Panel header="Customize your lesson">
				<FormGroup>
					<FilterCheckbox filter="FILTER_IRREGULAR" label="allow irregular" inline />
					{' '}
					<FilterCheckbox filter="FILTER_VOSOTROS" label="use vosotros" inline />
					{' '}
					<FilterCheckbox filter="FILTER_REPEATS" label="allow repeats" inline />
				</FormGroup>
			</Panel>
			<Panel header="Choose tenses (advanced)">
				<FormGroup>
					<FilterCheckbox filter="FILTER_INDICATIVE" label="indicative (all)" />
					{' '}
					<FilterCheckbox filter="FILTER_PRESENT" label="present" />
					{' '}
					<FilterCheckbox filter="FILTER_PRETERITE" label="preterite" />
					<FilterCheckbox filter="FILTER_IMPERFECT" label="imperfect" />
					<FilterCheckbox filter="FILTER_CONDITIONAL" label="conditional" />
					<FilterCheckbox filter="FILTER_FUTURE" label="future" />
				</FormGroup>
			</Panel>
		</Panel>
	);
}

export default CustomOptions;
