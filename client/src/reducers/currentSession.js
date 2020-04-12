import {
    START_SESSION, SET_SESSION_LENGTH
} from '../actions';

const initialState = {
    date: '',
    currentCardCount: 0,
    sessionInProgress: false,
    sessionLength: 0
};

const currentSession = (state=initialState, action) => {
    switch (action.type) {
        case START_SESSION: {
            const {sessionLength} = action;
            return { ...state, date: Date.now.parse(),
            sessionInProgress: true
            };
        };
        case SET_SESSION_LENGTH: {
            const {sessionLength} = action;
            return { ...state, sessionLength: sessionLength}
        }
        default: {
            return state;
        }
    }
}

export default currentSession;