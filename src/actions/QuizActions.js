	var alt = require('../alt');

	class QuizActions {
	 nextQuestion() {
		console.log("Action-next question");
		this.dispatch();
	 }

	 flipQuestion(){
	 	console.log("flip question");
	 	this.dispatch();
	 }
	}

	module.exports = alt.createActions(QuizActions);
