import React from 'react';
import { connect } from 'react-redux';
import {setSessionLength } from '../actions';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

const SessionLengthChoices = ({sessionLength, onSelect}) => {

    return (
        <div>
            Session Length <br />
            <Form.Check inline onChange={onSelect} label="None" value="-1" type="radio" checked={sessionLength == 0} />
            <Form.Check inline onChange={onSelect} label="2" value="2" type="radio" checked={sessionLength == 2}/>
            <Form.Check inline onChange={onSelect} label="10" value="10" type="radio" checked={sessionLength == 10}/>
            <Form.Check inline onChange={onSelect} label="15" value="15" type="radio" checked={sessionLength == 15}/>
            <Form.Check inline onChange={onSelect} label="20" value="20" type="radio" checked={sessionLength ==20 }/>
            <Form.Check inline onChange={onSelect} label="25" value="25" type="radio" checked={sessionLength == 25}/>
        </div>
    );
}

SessionLengthChoices.propTypes = {

};

const mapStateToProps = (state, ownProps) => ({
    sessionLength: state.currentSession.sessionLength
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSelect: (e) => {
        dispatch(setSessionLength(e.target.value));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionLengthChoices);

