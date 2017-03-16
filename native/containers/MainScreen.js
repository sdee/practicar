import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LinkControls from './LinkControls';
import ControlledCard from './ControlledCard';
import UserAnswer from './UserAnswer';

function MainScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.cardOuter}>
				<ControlledCard />
			</View>
			<View style={styles.controls}>
				<LinkControls />
				<UserAnswer />
				<Button
					title="Options"
					onPress={() => navigation.navigate('Options')}
					color="#000"
				/>
			</View>
		</View>
	);
}

MainScreen.navigationOptions = {
	title: 'practicar.io',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	cardOuter: {
		flex: 1
	},
	controls: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10
	}
});

export default MainScreen;
