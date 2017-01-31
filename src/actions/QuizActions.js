	var alt = require('../alt');

	class QuizActions {
	 nextQuestion() {
		console.log("next question");
	 }
	 
	 flipQuestion(){
	 	console.log("flip question");
	 }
	}

	module.exports = alt.createActions(QuizActions);
