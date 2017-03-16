import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MessageCard({ msg }) {
	return (
		<View>
			<Text style={styles.cardText}>{msg}</Text>
	 </View>
	);
}

const styles = StyleSheet.create({
	cardText: {
		textAlign: 'center'
	},
});

MessageCard.propTypes = {
	msg: PropTypes.string.isRequired
};

export default MessageCard;
