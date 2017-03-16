import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

function VerbSetButtons({ currVerbSet, onSelect }) {
	return (
		<View style={styles.selection}>
			<Text style={styles.tenseLabel}>Verb Sets</Text>
			<View>
				<View style={styles.selectRow}>
					<View style={styles.filterSwitch}>
						<Switch
							onValueChange={(value) => onSelect('topTwentyFive')}
							value={currVerbSet === 'topTwentyFive'}
						/>
					</View>
					<Text>25 Most Common Verbs</Text>
				</View>
				<View style={styles.selectRow}>
					<View style={styles.filterSwitch}>
						<Switch
							onValueChange={(value) => onSelect('topHundred')}
							value={currVerbSet === 'topHundred'}
						/>
					</View>
					<Text>100 Most Common Verbs</Text>
				</View>
				<View style={styles.selectRow}>
					<View style={styles.filterSwitch}>
						<Switch
							onValueChange={(value) => onSelect('thousandPlus')}
							value={currVerbSet === 'thousandPlus'}
						/>
					</View>
					<Text>1000+ Verbs</Text>
				</View>
			</View>
		</View>
	);
}

var styles = StyleSheet.create({
	selection: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	selectRow: {
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center'
	},
	filterSwitch: {
		paddingRight: 20
	},
	tenseLabel: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

VerbSetButtons.propTypes = {
	currVerbSet: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

VerbSetButtons.defaultProps = {
	currVerbSet: 'topHundred'
};

export default VerbSetButtons;
