import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Radio } from 'react-bootstrap';

function VerbSetRadioButtons({ currVerbSet, onSelect }) {
	return (
		<FormGroup>
			<Radio inline onChange={onSelect} value="topTwentyFive" checked={currVerbSet === 'topTwentyFive'}>
				25 Most Common Verbs
			</Radio>
			{' '}
			<Radio inline onChange={onSelect} value="topHundred" checked={currVerbSet === 'topHundred'}>
				100 Most Common Verbs
			</Radio>
			<Radio inline onChange={onSelect} value="thousandPlus" checked={currVerbSet === 'thousandPlus'}>
				1000+ Verbs
			</Radio>
		</FormGroup>
	);
}

VerbSetRadioButtons.propTypes = {
	currVerbSet: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

VerbSetRadioButtons.defaultProps = {
	currVerbSet: 'topHundred'
};

export default VerbSetRadioButtons;
