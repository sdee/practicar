import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';
import { loadQuizLocal } from '../actions';

class ControlledCard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadQuizLocal());
	}

	render() {
		const { dispatch } = this.props;
		const { questionNum } = this.props.user;
		return (
			<View style={styles.outer}>
				<View style={styles.card}>
					<Text style={styles.questionNum}>{questionNum}</Text>
					<QuizCard
						{...this.props.quiz}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	outer: {
		flex: 1,
		padding: 20,
		flexDirection: 'row',
	},
	card: {
		flex: 1,
		padding: 5,
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	questionNum: {
		textAlign: 'center',
		fontSize: 25,
		paddingBottom: 10
	}
});

ControlledCard.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	quiz: state.quiz,
	user: state.user
});

export default connect(mapStateToProps)(ControlledCard);
