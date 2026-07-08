const quizData = [
  {
    question: "Which country has the longest coastline in the world?",
    a: "Canada",
    b: "Russia",
    c: "Australia",
    d: "United States",
    correct: "a",
  },
  {
    question: "What is the capital of Malta?",
    a: "Valletta",
    b: "Mdina",
    c: "Sliema",
    d: "Birgu",
    correct: "a",
  },
  {
    question:
      "Which country is the newest in the world to be recognised by the UN?",
    a: "East Timor",
    b: "Kosovo",
    c: "Montenegro",
    d: "South Sudan",
    correct: "a",
  },
  {
    question: "In which UK city would you find the river Clyde?",
    a: "London",
    b: "Glasgow",
    c: "Liverpool",
    d: "Manchester",
    correct: "b",
  },
  {
    question: "What is the name of the largest river to flow through Paris?",
    a: "Thames",
    b: "Rhine",
    c: "Seine",
    d: "Loire",
    correct: "c",
  },
  {
    question: "In which city would you find La Sagrada Familia?",
    a: "Madrid",
    b: "Barcelona",
    c: "Valencia",
    d: "Seville",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("label_a");
const b_text = document.getElementById("label_b");
const c_text = document.getElementById("label_c");
const d_text = document.getElementById("label_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  document.querySelectorAll(".answer").forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const selectedAnswer = getSelected();

  console.log(selectedAnswer);

  if (!selectedAnswer) {
    alert("Please select an answer before continuing.");
    return; // stop the function here
  }
  if (selectedAnswer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered <span style="color: #d230bf;">${score} / ${quizData.length} </span> questions correctly! </h2> <button class="again" onclick="location.reload()">Play Again?</button>`;
  }
});
