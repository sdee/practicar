import { createSelector } from 'reselect';

export const getNumQuestionsRemaining = state => state.currentSession.sessionLength - state.currentSession.sessionQuestionNum; 
export const getIsSessionEnabled = state => state.currentSession.isSessionEnabled;
export const getSessionQuestionNum = state => state.currentSession.sessionQuestionNum;
export const getIsFirstQuestion = createSelector(getIsSessionEnabled, getSessionQuestionNum,  (isSessionEnabled, sessionQuestionNum) => isSessionEnabled && sessionQuestionNum === 1); 
export const getIsLastQuestion = createSelector(getIsSessionEnabled, getNumQuestionsRemaining, (isSessionEnabled, questionsRemaining) => isSessionEnabled && questionsRemaining === 0);
export const getIsSessionOver = createSelector(getIsSessionEnabled, getNumQuestionsRemaining, getSessionQuestionNum, (isSessionEnabled, questionsRemaining) => isSessionEnabled && questionsRemaining < 0);
