const numbersUtil = require('./numbers-util.js')

function chooseRandomNumberInRange(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion(min=1, max=999999) {
	const randomNumber = chooseRandomNumberInRange(min, max);
	const answer = numbersUtil.numberToSpanish(randomNumber);
    return {
        question: {number: randomNumber},
        answer: answer,
    }
}

function generateQuiz(numQuestions=100) {
	const quiz = {
		questions: []
	};
	while (quiz.questions.length < numQuestions) {
		const question = generateQuestion();
		if (question) {
			quiz.questions.push(question);
		}
	}
	return quiz;
}

module.exports.generateQuiz = generateQuiz;
