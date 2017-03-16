import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function CustomOptions({ navigation }) {
	return (
		<View style={styles.back}>
			<View style={styles.option}>
				<Button
					title="Choose Tenses"
					onPress={() => navigation.navigate('ChooseTenses')}
					color="#000"
				/>
			</View>
			<View style={styles.option}>
				<Button
					title="Choose Verbs"
					onPress={() => navigation.navigate('ChooseVerbs')}
					color="#000"
				/>
			</View>
			<View style={styles.option}>
				<Button
					title="Choose Pronouns"
					onPress={() => navigation.navigate('ChoosePronouns')}
					color="#000"
				/>
			</View>
		</View>
	);
}

var styles = StyleSheet.create({
	back: {
		backgroundColor: '#fff',
		flex: 1
	},
	option: {
		borderColor: '#000',
		borderWidth: 1
	}
});

CustomOptions.navigationOptions = {
	title: 'Custom Options',
};

export default CustomOptions;
