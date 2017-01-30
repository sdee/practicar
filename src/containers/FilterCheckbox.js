import { connect } from 'react-redux'
import { setFilter } from '../actions'
import { Checkbox } from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => ({
  // active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

const FilterCheckbox = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox);

export default FilterCheckbox;
