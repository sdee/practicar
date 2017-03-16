import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AnswerCard({ answer, irregularity, before, after }) {
	return (
		<View>
			<Text style={styles.cardText}>
				{before}
				<Text style={styles.irregularity}>{irregularity}</Text>
				{after}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	cardText: {
		textAlign: 'center'
	},
	irregularity: {
		color: 'red'
	}
});

AnswerCard.propTypes = {
	answer: PropTypes.string.isRequired,
	irregularity: PropTypes.string.isRequired,
	before: PropTypes.string.isRequired,
	after: PropTypes.string.isRequired
};

export default AnswerCard;
