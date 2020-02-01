import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setFilter,  } from '../../actions';

class Slider extends React.Component {
    onSet = (render, handle, value, un, percent) => {
        this.props.setFilter('MIN_NUMBER', Number.parseInt(value[0]))
        this.props.setFilter('MAX_NUMBER', Number.parseInt(value[1]))

    };
    render() {
        const { min, max } = this.props;
        console.log(this.props)
        //set slider
        return (
            <div>
                <Nouislider
                    connect
                    start={[0, 100]}
                    behaviour="tap"
                    range={{
                        min: [0],
                        "16%": [50, 5],
                        "33%": [100, 100],
                        "66%": [1000, 100],
                        "80%": [10000, 1000],
                        max: [1000000]
                    }}
                    onSet={this.onSet}
                />
                <br />
                <div class='sliderValue'>
                    Practice numbers between <b>{min.toLocaleString('en-US')}</b> and <b>{max.toLocaleString('en-US')}</b>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const min = state.filter['MIN_NUMBER'];
    const max = state.filter['MAX_NUMBER'];
    return { min, max };
};

Slider.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

Slider.defaultProps = {
    min: 0,
    max:100
};

export default connect(mapStateToProps,{setFilter})(Slider);