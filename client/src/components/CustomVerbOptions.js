import React from 'react';
import { Card, Form, Tabs, Tab } from 'react-bootstrap';

import FilterCheckbox from '../containers/FilterCheckbox';
import MoodTrigger from '../containers/MoodTrigger';
import SessionLengthChoices from '../containers/SessionLengthChoices';
import VerbSetSelector from '../containers/VerbSetSelector';

function CustomVerbOptions() {
	return (
		<div>
			<Card id="customize-card">
				<Card.Header>Customize your lesson</Card.Header>
				<Card.Body>
					<FilterCheckbox
						filter="ALLOW_REPEATS"
						label="allow repeats (coming soon)"
						disabled
						inline
					/>
					<SessionLengthChoices/>
				</Card.Body>
			</Card>
			<Tabs defaultActiveKey={1} id="customized-tabs">
				<Tab eventKey={1} title="Choose Tenses">
					<Card className="tab-card">
						<Card.Header>Indicative</Card.Header>
						<Card.Body>
							<MoodTrigger mood="INDICATIVE" label="all on" trigger="on" />
							<MoodTrigger mood="INDICATIVE" label="all off" trigger="off" />
							<Form.Group>
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
							</Form.Group>
						</Card.Body>
					</Card>
					<Card className="tab-card">
						<Card.Header>Subjunctive</Card.Header>
						<Card.Body>
						<MoodTrigger mood="SUBJUNCTIVE" label="all on" trigger="on" />
						<MoodTrigger mood="SUBJUNCTIVE" label="all off" trigger="off" />
						<Form.Group>
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
						</Form.Group>
						</Card.Body>
					</Card>
				</Tab>
				<Tab eventKey={2} title="Choose Verbs">
					<Card className="tab-card">
						<Card.Header>Select Verb Sets</Card.Header>
						<Card.Body>
							<VerbSetSelector />
						</Card.Body>
					</Card>
					<Card className="tab-card">
						<Card.Header>Verb Filters</Card.Header>
						<Card.Body>
							<FilterCheckbox filter="ALLOW_IRREGULAR" label="allow irregular" inline />
							<FilterCheckbox filter="ALLOW_REFLEXIVE" label="allow reflexive" inline />
						</Card.Body>
					</Card>
				</Tab>
				<Tab eventKey={3} title="Choose Pronouns">
					<Card className="tab-card">
						<Card.Header>Pronoun Filters</Card.Header>
						<Card.Body>
							<Form.Group>
								<FilterCheckbox filter="ALLOW_PRONOUN_YO" label="yo" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_TU" label="tú" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_EL" label="él/ella/Ud." inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_NOSOTROS" label="nosotros" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_VOSOTROS" label="vosotros" inline />
								<FilterCheckbox filter="ALLOW_PRONOUN_ELLOS" label="ellos/ellas/Uds." inline />
							</Form.Group>
						</Card.Body>
					</Card>
				</Tab>
			</Tabs>
		</div>
	);
}

export default CustomVerbOptions;
