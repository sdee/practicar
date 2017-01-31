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

	 	 updateVerbs(){
	 	console.log("Action-update verbs");
	 	this.dispatch();
	 }

	 	 verbsFailed(){
	 	console.log("Action-verbs failed");
	 	this.dispatch();
	 }

	 	 fetchVerbs(){
	 	console.log("Action-fetch verbs");
	 	this.dispatch();
	 }


	}

	module.exports = alt.createActions(QuizActions);
