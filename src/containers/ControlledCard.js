import { connect } from 'react-redux';
import QuizCard from '../components/QuizCard';

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const ControlledCard = connect(
	state => state.quiz,
	mapDispatchToProps
)(QuizCard);

export default ControlledCard;
