import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function MoodLink({ label, onClick }) {
	return (
		<Button
			onPress={onClick}
			title={label}
			color="#000"
		/>
	);
}

MoodLink.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default MoodLink;
