import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Form } from 'react-bootstrap';

function VerbSetRadioButtons({ currVerbSet, onSelect }) {
	return (
		<FormGroup>
			<Form.Check type={'radio'} inline onChange={onSelect} value="topTwentyFive" checked={currVerbSet === 'topTwentyFive'}>
				25 Most Common Verbs
			</Form.Check>
			{' '}
			<Form.Check type={'radio'} inline onChange={onSelect} value="topHundred" checked={currVerbSet === 'topHundred'}>
				100 Most Common Verbs
			</Form.Check>
			<Form.Check type={'radio'} inline onChange={onSelect} value="thousandPlus" checked={currVerbSet === 'thousandPlus'}>
				1000+ Verbs
			</Form.Check>
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
