const questions = [
    {
        question: "Vilken stad i Andalusien är känd för Alhambra-palatsen?",
        options: ["Córdoba", "Granada", "Sevilla"],
        correct: 1
    },
    {
        question: "Vad heter den berömda moskén som nu är en katedral i Córdoba?",
        options: ["Mezquita", "Giralda", "Alcázar"],
        correct: 0
    },
    {
        question: "Vilken typisk dans och musikstil har sitt ursprung i Andalusien?",
        options: ["Tango", "Flamenco", "Fado"],
        correct: 1
    },
    {
        question: "Vilken stad är Andalusiens huvudstad?",
        options: ["Málaga", "Sevilla", "Cádiz"],
        correct: 1
    },
    {
        question: "Vad heter bergskedjan som sträcker sig genom östra Andalusien?",
        options: ["Sierra Nevada", "Pyrenéerna", "Montes de Toledo"],
        correct: 0
    },
    {
        question: "Vilken andalusisk stad är känd för sin romerska amfiteater och sin gamla hamn?",
        options: ["Cádiz", "Jaén", "Huelva"],
        correct: 0
    },
    {
        question: "Vilken känd konstnär föddes i Málaga?",
        options: ["Salvador Dalí", "Pablo Picasso", "Joan Miró"],
        correct: 1
    },
    {
        question: "Vilken typ av vin är Jerez (Sherry) mest känt för?",
        options: ["Rödvin", "Mousserande vin", "Starkvin"],
        correct: 2
    },
    {
        question: "Vad heter den berömda vandringsleden i El Chorro nära Málaga?",
        options: ["Camino del Rey", "Ruta del Sol", "Sendero de la Sierra"],
        correct: 0
    },
    {
        question: "Vilken stad är känd för sin påskprocession och sin stora katedral med Giralda-tornet?",
        options: ["Sevilla", "Granada", "Almería"],
        correct: 0
    },
    {
        question: "Vilken kuststräcka i Andalusien är populär för sol och bad?",
        options: ["Costa Brava", "Costa del Sol", "Costa Verde"],
        correct: 1
    },
    {
        question: "Vilken andalusisk stad är känd för sin vitmålade byar och dramatiska klippor?",
        options: ["Ronda", "Marbella", "Linares"],
        correct: 0
    },
    {
        question: "Vilken historisk period har starkt påverkat Andalusiens arkitektur och kultur?",
        options: ["Romartiden", "Morisk tid (Al-Andalus)", "Renässansen"],
        correct: 1
    }
];

const form = document.getElementById("quizForm");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>` +
        q.options.map((opt, i) =>
            `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`
        ).join("");
    form.appendChild(div);
});

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    document.getElementById("result").innerText = `Du fick ${score} av ${questions.length} rätt!`;
}
