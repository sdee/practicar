
function chooseRandomNumberInRange(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
	const randomNumber = chooseRandomNumberInRange(1, 16);
	const numbers = new Map([
		[1, "uno"],
		[2, "dos"],
		[3, "tres"],
		[4, "cuatro"],
		[5, "cinco"],
		[6, "seis"],
		[7, "siete"],
		[8, "ocho"],
		[9, "nueve"],
		[10, "diez"],
		[11, "once"],
		[12, "doce"],
		[13, "trece"],
		[14, "catorce"],
		[15, "quince"],
		[16, "dieciséis"],
	  ]);

	
    return {
        question:{number: randomNumber},
        answer: numbers.get(randomNumber)
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
