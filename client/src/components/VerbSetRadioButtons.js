import React, { PropTypes } from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

function VerbSetSelector({ currVerbSet, onSelect }) {
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

VerbSetSelector.propTypes = {
	currVerbSet: PropTypes.string,
	onSelect: PropTypes.func.isRequired
};

VerbSetSelector.defaultProps = {
	currVerbSet: 'topHundred'
};

export default VerbSetSelector;
