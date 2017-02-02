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
				<FormGroup>
					<Panel header="Indicative">
						<FilterCheckbox filter="ALLOW_PRESENT" defaultChecked label="present" />
						<FilterCheckbox filter="ALLOW_IMPERFECT" label="imperfect" />
						<FilterCheckbox filter="ALLOW_FUTURE" label="future" />
					</Panel>
					<FormGroup>
					</FormGroup>
					<Panel header="Subjunctive">
						<FilterCheckbox filter="ALLOW_PRESENT_SUBJ" label="present" />
						<FilterCheckbox filter="ALLOW_IMPERFECT_SUBJ" label="imperfect" />						
						<FilterCheckbox filter="ALLOW_FUTURE_SUBJ" label="future" />
					</Panel>
				</FormGroup>
			</Panel>
		</Panel>
	);
}

export default CustomOptions;
