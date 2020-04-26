import {
    START_SESSION, SET_SESSION_LENGTH, NEXT_QUESTION, END_SESSION
} from '../actions';

const initialState = {
    date: '',
    sessionInProgress: false,
    sessionLength: 0,
    questionsRemaining: -1,
    isLastQuestion: false,
    sessionOver: false,
};

const currentSession = (state=initialState, action) => {
    switch (action.type) {
        case START_SESSION: {
            const {sessionLength} = action;
            return { ...state, date: Date(Date.now()).toString(),
            sessionInProgress: true,
            questionsRemaining: parseInt(sessionLength),
            lastQuestion: false
            };
        };
        case SET_SESSION_LENGTH: {
            const {sessionLength} = action;
            return { ...state, sessionLength: parseInt(sessionLength)}
        }
        case NEXT_QUESTION: {
            const questionsRemaining = state.questionsRemaining -1;
            const isLastQuestion = questionsRemaining === 0 ? true : false;
            return { ...state, questionsRemaining: questionsRemaining, isLastQuestion: isLastQuestion}
        }
        case END_SESSION: {
            return  { ... initialState, sessionOver: true}
        }
        default: {
            return state;
        }
    }
}

export default currentSession;