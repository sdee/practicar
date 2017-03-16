import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setVerbSet, loadQuizLocal } from '../actions';
import FilterCheckbox from './FilterCheckbox';
import VerbSetButtons from '../components/VerbSetButtons';

const mapStateToProps = (state, ownProps) => ({
	currVerbSet: state.quiz.verbSet
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onSelect: (newValue) => {
		dispatch(setVerbSet(newValue));
		dispatch(loadQuiz(newValue));
	}
});

function ChooseVerbs({ onSelect }) {
	return (
		<View style={styles.selection}>
			<VerbSetButtons onSelect={onSelect} />
			<View style={styles.selection}>
				<Text style={styles.tenseLabel}>Verb Filters</Text>
				<FilterCheckbox filter="ALLOW_IRREGULAR" label="allow irregular" inline />
				<FilterCheckbox filter="ALLOW_REFLEXIVE" label="allow reflexive" inline />
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
	tenseLabel: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

ChooseVerbs.navigationOptions = {
	title: 'Choose Verbs',
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseVerbs);
