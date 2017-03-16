import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Controls({ onNextClick, onPrevClick, onShowClick, showAnswer }) {
	const showButtonText = showAnswer ? 'See Question' : 'See Answer';
	return (
		<View>
			<View style={{flexDirection: 'row'}}>
				<Button
					onPress={onPrevClick}
					title="Back"
					color="#000"
				/>
				<Button
					onPress={onNextClick}
					title="Next"
					color="#000"
				/>
			</View>
			<Button
				onPress={onShowClick}
				title={showButtonText}
				color="#000"
			/>
		</View>
	);
}

Controls.propTypes = {
	onNextClick: PropTypes.func.isRequired,
	onPrevClick: PropTypes.func.isRequired,
	onShowClick: PropTypes.func.isRequired,
	showAnswer: PropTypes.bool.isRequired
};

export default Controls;
