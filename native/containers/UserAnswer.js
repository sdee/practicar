import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { submitAnswer } from '../actions';

class UserAnswer extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	render() {
		const { dispatch } = this.props;
		let ignoreAccents = false;
		return (
			<View style={styles.userAnswer}>
				<TextInput
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.userInput}
					placeholder="Your Answer"
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				<Button
					onPress={(e) => {
						e.preventDefault();
						if (!this.state.text || !this.state.text.trim()) {
							return;
						}
						dispatch(submitAnswer(this.state.text, ignoreAccents));
						this.state.text = '';
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
