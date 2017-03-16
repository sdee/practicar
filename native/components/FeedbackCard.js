import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FeedbackCard({ isCorrect, correctAnswer, submittedAnswer, irregularity, before, after }) {
	const userAnswerClass = isCorrect ? styles.correctAnswer : styles.incorrectAnswer;
	const displayAnswer = isCorrect ? correctAnswer : submittedAnswer;
	return (
		<View>
			<Text>
				<Text style={userAnswerClass}>{displayAnswer}</Text>
				{!isCorrect ? (
					<Text>
						-> {before}
						<Text style={styles.irregularity}>{irregularity}</Text>
						{after}
					</Text>) :
					<Text />
				}
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
	},
	correctAnswer: {
		textAlign: 'center',
		color: 'green'
	},
	incorrectAnswer: {
		textAlign: 'center',
		textDecorationLine: 'line-through'
	}
});

FeedbackCard.propTypes = {
	isCorrect: PropTypes.bool.isRequired,
	correctAnswer: PropTypes.string.isRequired,
	submittedAnswer: PropTypes.string.isRequired,
	irregularity: PropTypes.string.isRequired,
	before: PropTypes.string.isRequired,
	after: PropTypes.string.isRequired
};

export default FeedbackCard;
