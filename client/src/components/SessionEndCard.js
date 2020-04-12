import React from 'react';
import PropTypes from 'prop-types';

const SessionEndCard = (props) => {
    return (
        <section className="flashcard front">
            <div>
                <b>Congrats on finishing!</b>
            </div>
        </section>
    )
}

SessionEndCard.propTypes = {
    metrics: PropTypes.object
}

SessionEndCard.defaultProps = {
    metrics: {}
}

export default SessionEndCard;