const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "Vilken stad i Andalusien är känd för Alhambra-palatsen?",
        answers: {
            a: "Córdoba",
            b: "Granada",
            c: "Sevilla"
        },
        correctAnswer: "b"
    },
    {
        question: "Vad heter den berömda moskén som nu är en katedral i Córdoba?",
        answers: {
            a: "Mezquita",
            b: "Giralda",
            c: "Alcázar"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken typisk dans och musikstil har sitt ursprung i Andalusien?",
        answers: {
            a: "Tango",
            b: "Flamenco",
            c: "Fado"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilken stad är Andalusiens huvudstad?",
        answers: {
            a: "Málaga",
            b: "Sevilla",
            c: "Cádiz"
        },
        correctAnswer: "b"
    },
    {
        question: "Vad heter bergskedjan som sträcker sig genom östra Andalusien?",
        answers: {
            a: "Sierra Nevada",
            b: "Pyrenéerna",
            c: "Montes de Toledo"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken andalusisk stad är känd för sin romerska amfiteater och sin gamla hamn?",
        answers: {
            a: "Cádiz",
            b: "Jaén",
            c: "Huelva"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken känd konstnär föddes i Málaga?",
        answers: {
            a: "Salvador Dalí",
            b: "Pablo Picasso",
            c: "Joan Miró"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilken typ av vin är Jerez (Sherry) mest känt för?",
        answers: {
            a: "Rödvin",
            b: "Mousserande vin",
            c: "Starkvin"
        },
        correctAnswer: "c"
    },
    {
        question: "Vad heter den berömda vandringsleden i El Chorro nära Málaga?",
        answers: {
            a: "Camino del Rey",
            b: "Ruta del Sol",
            c: "Sendero de la Sierra"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken stad är känd för sin påskprocession och sin stora katedral med Giralda-tornet?",
        answers: {
            a: "Sevilla",
            b: "Granada",
            c: "Almería"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken kuststräcka i Andalusien är populär för sol och bad?",
        answers: {
            a: "Costa Brava",
            b: "Costa del Sol",
            c: "Costa Verde"
        },
        correctAnswer: "b"
    },
    {
        question: "Vilken andalusisk stad är känd för sin vitmålade byar och dramatiska klippor?",
        answers: {
            a: "Ronda",
            b: "Marbella",
            c: "Linares"
        },
        correctAnswer: "a"
    },
    {
        question: "Vilken historisk period har starkt påverkat Andalusiens arkitektur och kultur?",
        answers: {
            a: "Romartiden",
            b: "Morisk tid (Al-Andalus)",
            c: "Renässansen"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> <strong>${currentQuestion.question}</strong> </div>
            <div class="answers"> ${answers.join('')} </div><hr>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });

    resultsContainer.innerHTML = `Du fick ${numCorrect} av ${myQuestions.length} rätt.`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);