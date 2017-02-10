import React from 'react';
import { Panel, FormGroup } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';

function CustomOptions() {
	return (
		<Panel header="">
			<Panel header="Customize your lesson">
				<FormGroup>
					<FilterCheckbox filter="ALLOW_IRREGULAR" label="allow irregular" inline />
					<FilterCheckbox filter="ALLOW_VOSOTROS" label="use vosotros" inline />
					<FilterCheckbox filter="ALLOW_REPEATS" label="allow repeats" inline />
					<FilterCheckbox filter="ALLOW_REFLEXIVE" label="allow reflexive" inline />
				</FormGroup>
			</Panel>
			<Panel header="Choose tenses">
				<Panel header="Indicative">
					<FormGroup>
						<FilterCheckbox filter="ALLOW_PRESENT_IND" defaultChecked label="present" />
						<FilterCheckbox filter="ALLOW_PRETERITE_IND" label="preterite" />
						<FilterCheckbox filter="ALLOW_IMPERFECT_IND" label="imperfect" />
						<FilterCheckbox filter="ALLOW_CONDITIONAL_IND" label="conditional" />
						<FilterCheckbox filter="ALLOW_FUTURE_IND" label="future" />
					</FormGroup>
				</Panel>
				<Panel header="Subjunctive">
					<FormGroup>
						<FilterCheckbox filter="ALLOW_PRESENT_SUBJ" label="present" />
						<FilterCheckbox filter="ALLOW_IMPERFECT_SUBJ" label="imperfect" />
						<FilterCheckbox filter="ALLOW_FUTURE_SUBJ" label="future" />
					</FormGroup>
				</Panel>
			</Panel>
		</Panel>
	);
}

export default CustomOptions;
