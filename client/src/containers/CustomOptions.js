import React from 'react';
import { Panel, FormGroup } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';
import MoodTrigger from './MoodTrigger';

function CustomOptions() {
	return (
		<Panel header="">
			<Panel header="Customize your lesson">
				<FormGroup>
					<FilterCheckbox filter="ALLOW_IRREGULAR" label="allow irregular" inline />
					<FilterCheckbox filter="ALLOW_REPEATS" label="allow repeats" inline />
					<FilterCheckbox filter="ALLOW_REFLEXIVE" label="allow reflexive" inline />
				</FormGroup>
			</Panel>
			<Panel header="Choose pronouns">
				<FormGroup>
					<FilterCheckbox filter="ALLOW_PRONOUN_YO" label="yo" inline />
					<FilterCheckbox filter="ALLOW_PRONOUN_TU" label="tú" inline />
					<FilterCheckbox filter="ALLOW_PRONOUN_EL" label="él/ella/Ud." inline />
					<FilterCheckbox filter="ALLOW_PRONOUN_NOSOTROS" label="nosotros" inline />
					<FilterCheckbox filter="ALLOW_PRONOUN_VOSOTROS" label="vosotros" inline />
					<FilterCheckbox filter="ALLOW_PRONOUN_ELLOS" label="ellos/ellas/Uds." inline />
				</FormGroup>
			</Panel>
			<Panel header="Choose tenses">
				<Panel header="Indicative">
					<MoodTrigger mood="INDICATIVE" label="all on" trigger="on" />
					<MoodTrigger mood="INDICATIVE" label="all off" trigger="off" />
					<FormGroup>
						<FilterCheckbox filter="ALLOW_PRESENT_IND" label="present" />
						<FilterCheckbox filter="ALLOW_PRETERITE_IND" label="preterite" />
						<FilterCheckbox filter="ALLOW_IMPERFECT_IND" label="imperfect" />
						<FilterCheckbox filter="ALLOW_CONDITIONAL_IND" label="conditional" />
						<FilterCheckbox filter="ALLOW_FUTURE_IND" label="future" />
					</FormGroup>
				</Panel>
				<Panel header="Subjunctive">
					<MoodTrigger mood="SUBJUNCTIVE" label="all on" trigger="on" />
					<MoodTrigger mood="SUBJUNCTIVE" label="all off" trigger="off" />
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
