import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilterCheckbox from './FilterCheckbox';

function ChoosePronouns() {
	return (
		<View style={styles.selection}>
			<View>
				<FilterCheckbox filter="ALLOW_PRONOUN_YO" label="yo" inline />
				<FilterCheckbox filter="ALLOW_PRONOUN_TU" label="tú" inline />
				<FilterCheckbox filter="ALLOW_PRONOUN_EL" label="él/ella/Ud." inline />
				<FilterCheckbox filter="ALLOW_PRONOUN_NOSOTROS" label="nosotros" inline />
				<FilterCheckbox filter="ALLOW_PRONOUN_VOSOTROS" label="vosotros" inline />
				<FilterCheckbox filter="ALLOW_PRONOUN_ELLOS" label="ellos/ellas/Uds." inline />
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
});

ChoosePronouns.navigationOptions = {
	title: 'Choose Pronouns',
};

export default ChoosePronouns;
