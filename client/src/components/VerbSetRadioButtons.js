import React, { PropTypes } from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

function VerbSetSelector({currVerbSet="default", onSelect}) {
	return (
		<FormGroup>
	<Radio inline onChange={onSelect} value="default" checked={currVerbSet==="default"}>
		Default
	</Radio>
	{' '}
	<Radio inline onChange={onSelect} value="topTwenty" checked={currVerbSet==="topTwenty"}>
		20 Most Frequent Verbs
	</Radio>
</FormGroup>
	);
}

export default VerbSetSelector;
