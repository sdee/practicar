import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { submitAnswer } from '../actions';

class UserAnswer extends Component {
	render() {
		const { dispatch } = this.props;
		let ignoreAccents = false;
		return (
			<View style={styles.userAnswer}>
				<TextInput
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Your Answer"
					style={styles.userInput}
					onChangeText={(text) => this.input = text}
				/>
				<Button
					onPress={(e) => {
						e.preventDefault();
						if (!this.input || !this.input.trim()) {
							return;
						}
						dispatch(submitAnswer(this.input, ignoreAccents));
					}
					}
					title="Post"
					color="#000"
				/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	userAnswer: {
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 20,
		borderColor: '#000',
		borderWidth: 1
	},
	userInput: {
		fontSize: 18,
		flex: 1,
		height: 30,
		textAlign: 'center',
		textAlignVertical: 'center'
	},
});

const mapStateToProps = state => ({
	quiz: state.quiz
});

UserAnswer.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(UserAnswer);
