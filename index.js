var myQuestions = [{
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        //shu joy
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }

}
var timerInput = document.getElementById("time"); // Берём строку
var buttonRun = document.getElementById("button"); // Берём кнопку запуска
var timerShow = document.getElementById("timer"); // Берём блок для показа времени
var restart = document.getElementById('restart');
var body = document.getElementsByTagName('body');
buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60;
});
timer = setInterval(function() {
    seconds = timeMinut % 60; // Получаем секунды
    minutes = timeMinut / 60 % 60; // Получаем минуты
    hour = timeMinut / 60 / 60 % 60; // Получаем часы
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");


    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000);