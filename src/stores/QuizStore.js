var alt = require('../alt');
var QuizActions = require('../actions/QuizActions');
var QuizSource = require('../sources/QuizSource');

class QuizStore {

	constructor() {
		this.verbs = [];
		this.idx = 0;
		this.test = "test";
		this.is_loaded = false;
		this.is_flipped = false;
		this.currentQuestion = {"text": "Get started by clicking 'next question'!"}; //display instructions
		this.bindListeners({
			handleNextQuestion: QuizActions.NEXT_QUESTION,
			handleFlipQuestion: QuizActions.FLIP_QUESTION,
			handleUpdateVerbs: QuizActions.UPDATE_VERBS
		});

		this.exportAsync(QuizSource);
	}

	handleNextQuestion() {
		console.log("handleNextQuestion");
		this.idx +=1;
		this.is_flipped = false; //resets card to side with question
	}

	//sets verbs passed from source
	handleUpdateVerbs(verbs){
		console.log("handleUpdateVerbs");
		console.log(verbs);
		this.verbs = verbs;
		this.is_loaded = true;
	}

	handleFlipQuestion() {
		console.log("handleFlipQuestion");
		this.is_flipped = !this.is_flipped;
	}
}

module.exports = alt.createStore(QuizStore, 'QuizStore');
