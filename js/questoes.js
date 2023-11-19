const question = [
  {
    question: "Qual a forma correta de Misturar uma bebiba",
    answers: [
      { text: "Com uma colher", correct: false },
      { text: "Com utensílios feitos para isso", correct: false },
      { text: "nem misturo sapoha", correct: false },
      { text: "sei la nunca fiz isso", correct: false },
      { text: "O dedo sempre vai ser a melhor opção ", correct: true },
    ],
  },
  {
    question: "pq caralhos tu anda com 40 energetico em uma sacola",
    answers: [
      { text: "Sei la nunca se sabe ", correct: true },
      { text: "Igual identidade importante", correct: true },
      { text: "Foi so aquele dia ", correct: false },
      { text: "Quem que nao anda com 40 energetico", correct: false },
      { text: "o Erik sabe muito que isso mlk genio", correct: false },
    ],
  },
  {
    question:
      "Pra continuar mandar fto 3x4 pro adm pedir de natal pro idoso do papi noel",
    answers: [
      { text: "vai se fuder mlk", correct: true },
      { text: "alaa quem bate fto 3x4", correct: true },
      { text: "Nao tenho fto 3x4", correct: true },
      { text: "Continua logo sapoha", correct: true },
      { text: "tu vai é levar uma surra eu sou discreta", correct: true },
    ],
  },
  {
    question: "Com quantos copo a jamile ja fica mal",
    answers: [
      { text: "sei la no primero ja to mal", correct: true },
      { text: "Nem fico mal", correct: false },
      { text: "So fico mal se for shot (kkkk mentirosa)", correct: false },
      { text: "que isso nao fico mal", correct: true },
      { text: "nem eu sei", correct: false },
    ],
  },
  {
    question: "OQ voce acha de quem passa mal na level",
    answers: [
      { text: "ai mlk tu vai apanhar", correct: true },
      { text: "Nem fiquei mal so tava fingindo", correct: false },
      { text: "kkkkkk quase fui pra gloria mais cedo", correct: false },
      { text: "foi so pq eu misturei com o dedo", correct: true },
      { text: "sei la ksksksksk", correct: true },
    ],
  },
  {
    question: "Esse foi so um teste proximo vai ter 40 questao to cansadao",
    answers: [
      { text: "o cara fica 4 horas acordado", correct: true },
      { text: "so isso pae", correct: false },
      { text: "bha vai ti fude ja acabou", correct: false },
      { text: "sei la ja nao consigo pensar em resposta", correct: true },
      { text: "boa noite vou dormir agr", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", SelectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function SelectAnswer(e) {
  const SelectBtn = e.target;
  const isCorrect = SelectBtn.dataset.correct === "true";
  if (isCorrect) {
    SelectBtn.classList.add("correct");
    score++;
  } else {
    SelectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `  <img src="/img/login.png" alt="brain icon " /> <img src="/img/final1.jpg" alt="brain icon " />`;
  nextButton.innerHTML = "Que tua nota no nenem seja mais alta que isso";
  nextButton.style.display = "block";
}

function hanldeNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    hanldeNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
