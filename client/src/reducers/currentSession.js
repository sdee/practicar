import {
    START_SESSION, SET_SESSION_LENGTH, NEXT_QUESTION
} from '../actions';

const initialState = {
    date: '',
    sessionInProgress: false,
    sessionLength: 0,
    questionsRemaining: -1
};

const currentSession = (state=initialState, action) => {
    switch (action.type) {
        case START_SESSION: {
            const {sessionLength} = action;
            return { ...state, date: Date(Date.now()).toString(),
            sessionInProgress: true,
            questionsRemaining: parseInt(sessionLength)
            };
        };
        case SET_SESSION_LENGTH: {
            const {sessionLength} = action;
            return { ...state, sessionLength: parseInt(sessionLength)}
        }
        case NEXT_QUESTION: {
            return {...state, questionsRemaining: state.questionsRemaining-1}
        }
        default: {
            return state;
        }
    }
}

export default currentSession;