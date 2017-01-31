var alt = require('../alt');
var QuizActions = require('../actions/QuizActions');

class QuizStore {
	
	constructor() {
		this.questions = [];
		this.idx = 0;
		this.test = "test";
		this.currentQuestion = {"text": "Get started by clicking 'next question'!"}; //display instructions
		this.bindListeners({
			handleNextQuestion: QuizActions.NEXT_QUESTION,
			handleFlipQuestion: QuizActions.FLIP_QUESTION
		});
	}

	handleNextQuestion() {
		console.log("handleNextQuestion");
		this.idx +=1;
	}

	handleFlipQuestion() {
		console.log("handleFlipQuestion");
	}
}

module.exports = alt.createStore(QuizStore, 'QuizStore');
