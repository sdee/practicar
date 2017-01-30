var alt = require('../alt');

class QuizActions {
 		nextQuestion() {
			console.log("next question");
 }
}

module.exports = alt.createActions(QuizActions);
