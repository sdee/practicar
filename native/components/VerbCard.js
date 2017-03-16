import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function VerbCard({ infinitive, pronoun, tense, mood, definition }) {
	return (
		<View>
			<Text style={styles.cardText}>{pronoun}, {infinitive}</Text>
			<Text style={styles.cardText}>{definition}</Text>
			<Text style={styles.cardText}>({tense} {mood})</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	cardText: {
		textAlign: 'center'
	},
});

VerbCard.propTypes = {
	infinitive: PropTypes.string.isRequired,
	pronoun: PropTypes.string.isRequired,
	tense: PropTypes.string.isRequired,
	mood: PropTypes.string.isRequired,
	definition: PropTypes.string
};

VerbCard.defaultProps = {
	definition: ''
};

export default VerbCard;
