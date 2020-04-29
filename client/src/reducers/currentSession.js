import {
    START_SESSION, SET_SESSION_LENGTH, NEXT_QUESTION, END_SESSION, PREV_QUESTION
} from '../actions';
import { getIsSessionEnabled } from '../selectors/currentSession';

const initialState = {
    date: '',
    sessionLength: 10,
    isSessionEnabled: true,
    sessionQuestionNum: -1
};

const currentSession = (state=initialState, action) => {
    switch (action.type) {
        case START_SESSION: {
            return { ...state, 
                    date: Date(Date.now()).toString(),
                    sessionQuestionNum: 0,
            };
        };
        case SET_SESSION_LENGTH: {
            const {sessionLength} = action;
            const isSessionEnabled = true ? sessionLength!="-1" : false;
            return { ...state, sessionLength: parseInt(sessionLength), isSessionEnabled: isSessionEnabled}
        }
        case PREV_QUESTION: {
            const questionNum = state.sessionQuestionNum -1;
            return { ...state, sessionQuestionNum: questionNum }
        }
        case NEXT_QUESTION: {
            const questionNum = state.sessionQuestionNum +1;
            return { ...state, sessionQuestionNum: questionNum }
        }
        case END_SESSION: {
            return  { ... state, sessionQuestionNum: state.sessionLength+2 }
        }
        default: {
            return state;
        }
    }
}

export default currentSession;