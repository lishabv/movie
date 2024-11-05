const quotes = [
    "DRACARYS",
    "WINTER IS COMING",
    "RULER OF THE SEVEN KINGDOMS AND PROTECTOR OF THE REALM ",
    
];

document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
});

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

let quizQuestions = [
    { question: "Is Viserys Targaryan father of Rheanyra Targaryan", answer: true },
    { question: "Is Daemon father Aemond Targaryan", answer: false }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = quizQuestions[currentQuestionIndex].question;
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    displayQuestion();
}
