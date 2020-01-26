import React from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ question, questionNum }) {
    //TODO: add optional info back
    return (
        <section className="flashcard front">
            <div>
                <span className="question-num">{questionNum}</span>
                <br />
                <br />
                {question}
            </div>
        </section>
    );
}

QuestionCard.propTypes = {
    question: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    questionNum: PropTypes.number.isRequired,
};

QuestionCard.defaultProps = {
    question: (<div />)
};

export default QuestionCard;
