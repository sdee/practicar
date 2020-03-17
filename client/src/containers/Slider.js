import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nouislider from 'nouislider-react';
import wNumb from 'wnumb';

import { setFilters } from '../actions';

import 'nouislider/distribute/nouislider.css';

class Slider extends React.Component {
    onSet = (render, handle, value, un, percent) => {
        this.props.setFilters({
            MIN_NUMBER:  Math.round(value[0]),
            MAX_NUMBER: Math.round(value[1]),
        });
    };

    render() {
        const { min, max } = this.props;
        return (
            <div>
                <Nouislider
                    connect
                    start={[0, 100]}
                    behaviour="tap"
                    range={{
                        min: [0],
                        "20%": [50, 5],
                        "40%": [100, 100],
                        "60%": [10000, 1000],
                        "80%": [100000, 100000],
                        max: [1000000]
                    }}
                    onSet={this.onSet}
                    pips={{ mode: "positions", values: [0, 20, 40, 60, 80, 100], density: 5, format: wNumb({
                        decimals: 0,
                        thousand: ','
                    })}}
                    clickablePips
                />
                <br />
                <div className='sliderValue'>
                    <br/>
                    Practice numbers between <b>{min.toLocaleString('en-US')}</b> and <b>{max.toLocaleString('en-US')}</b>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    min: state.filters.MIN_NUMBER,
    max: state.filters.MAX_NUMBER,
});

const mapDispatchToProps = (dispatch) => ({
    setFilters: (filters) => dispatch(setFilters(filters)),
});

Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    setFilters: PropTypes.func.isRequired,
};

Slider.defaultProps = {
    min: 0,
    max:100,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);