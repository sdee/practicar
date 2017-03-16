import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
	const filter = ownProps.filter;
	const checked = !!state.filter[filter];
	return { checked };
};

const FilterCheckbox = ({ checked, dispatch, label, filter, explanation, disable }) => {
	function handleChange() {
		dispatch(setFilter(filter, !checked));
	}
	return (
		<View style={styles.selectRow}>
			<View style={styles.filterSwitch}>
				<Switch
					onValueChange={handleChange}
					disabled={disable}
					value={checked}
				/>
			</View>
			<Text style={styles.filterLabel}>{label}</Text>
		</View>
	);
};

var styles = StyleSheet.create({
	selectRow: {
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center'
	},
	filterSwitch: {
		paddingRight: 20
	}
});

FilterCheckbox.propTypes = {
	dispatch: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	explanation: PropTypes.string,
	disable: PropTypes.bool
};

FilterCheckbox.defaultProps = {
	explanation: '',
	disable: false
};

export default connect(mapStateToProps)(FilterCheckbox);
