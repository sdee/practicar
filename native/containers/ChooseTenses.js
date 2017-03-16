import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterCheckbox from './FilterCheckbox';
import MoodTrigger from './MoodTrigger';

function ChooseTenses() {
	return (
		<View style={styles.selection}>
			<View>
				<Text style={styles.tenseLabel}>Indicative</Text>
				<View style={styles.triggers}>
					<MoodTrigger mood="INDICATIVE" label="all on" trigger="on" />
					<MoodTrigger mood="INDICATIVE" label="all off" trigger="off" />
				</View>
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
			</View>
			<View>
				<Text style={styles.tenseLabel}>Subjunctive</Text>
				<View style={styles.triggers}>
					<MoodTrigger mood="SUBJUNCTIVE" label="all on" trigger="on" />
					<MoodTrigger mood="SUBJUNCTIVE" label="all off" trigger="off" />
				</View>
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
			</View>
		</View>
	);
}

var styles = StyleSheet.create({
	selection: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	triggers: {
		flexDirection: 'row',
	},
	tenseLabel: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

ChooseTenses.navigationOptions = {
	title: 'Choose Tenses',
};

export default ChooseTenses;
