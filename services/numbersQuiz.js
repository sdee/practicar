function generateQuestion() {
    return {
        question: '1',
        answer: 'Uno'
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
