const question = [
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
    ],
  },
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
    ],
  },
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
    ],
  },
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
    ],
  },
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
    ],
  },
  {
    question: "teste1",
    answers: [
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "teste", correct: false },
      { text: "tetse", correct: false },
      { text: "teste ", correct: true },
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
  questionElement.innerHTML = ` De ${question} questoues acerto ${score}`;
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
