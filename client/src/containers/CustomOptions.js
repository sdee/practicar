import React from 'react';
import { Panel, FormGroup, Tabs, Tab } from 'react-bootstrap';
import FilterCheckbox from './FilterCheckbox';
import MoodTrigger from './MoodTrigger';
import VerbSetSelector from './VerbSetSelector';

function CustomOptions() {
	return (
		<div>
			<Panel header="Customize your lesson">
				<FormGroup>
					<FilterCheckbox
						filter="ALLOW_REPEATS"
						label="allow repeats (coming soon)"
						disable
						inline
					/>
				</FormGroup>
			</Panel>
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
				<Tab eventKey={1} title="Choose Tenses">
					<Panel>
						<Panel header="Indicative">
							<MoodTrigger mood="INDICATIVE" label="all on" trigger="on" />
							<MoodTrigger mood="INDICATIVE" label="all off" trigger="off" />
							<FormGroup>
								<FilterCheckbox
									filter="ALLOW_PRESENT_IND"
									label="present"
									explanation="I walk."
								/>
								<FilterCheckbox
									filter="ALLOW_PRETERITE_IND"
									label="preterite"
									explanation="I walked home last night."
								/>
								<FilterCheckbox
									filter="ALLOW_IMPERFECT_IND"
									label="imperfect"
									explanation="When I was a kid, I used to walk home from school everyday."
								/>
								<FilterCheckbox
									filter="ALLOW_CONDITIONAL_IND"
									label="conditional"
									explanation="I would walk if it weren't for the rain."
								/>
								<FilterCheckbox
									filter="ALLOW_FUTURE_IND"
									label="future"
									explanation="I will walk tomorrow."
								/>
							</FormGroup>
						</Panel>
						<Panel header="Subjunctive">
							<MoodTrigger mood="SUBJUNCTIVE" label="all on" trigger="on" />
							<MoodTrigger mood="SUBJUNCTIVE" label="all off" trigger="off" />
							<FormGroup>
								<FilterCheckbox
									filter="ALLOW_PRESENT_SUBJ"
									label="present"
									explanation="I doubt that he walks in this weather."
								/>
								<FilterCheckbox
									filter="ALLOW_IMPERFECT_SUBJ"
									label="imperfect"
									explanation="I hoped that you had walked yesterday. It was so nice outside."
								/>
								<FilterCheckbox
									filter="ALLOW_FUTURE_SUBJ"
									label="future"
									explanation="I don't think they will have walked all day without water."
								/>
							</FormGroup>
						</Panel>`
					</Panel>
				</Tab>
				<Tab eventKey={2} title="Choose Verbs">
					<Panel>
						<Panel header="Select Verb Sets">
							<VerbSetSelector />
						</Panel>
						<Panel header="Verb Filters">
							<FilterCheckbox filter="ALLOW_IRREGULAR" label="allow irregular" inline />
							<FilterCheckbox filter="ALLOW_REFLEXIVE" label="allow reflexive" inline />
						</Panel>
					</Panel>
				</Tab>
				<Tab eventKey={3} title="Choose Pronouns">
					<Panel>
						<Panel header="Pronoun Filters">
							<FormGroup>
								<FilterCheckbox filter="ALLOW_PRONOUN_YO" label="yo" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_TU" label="tú" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_EL" label="él/ella/Ud." inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_NOSOTROS" label="nosotros" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_VOSOTROS" label="vosotros" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_ELLOS" label="ellos/ellas/Uds." inline />
							</FormGroup>
						</Panel>
					</Panel>
				</Tab>
			</Tabs>
		</div>
	);
}

export default CustomOptions;
