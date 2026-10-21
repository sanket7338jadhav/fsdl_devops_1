// Questions
const quiz = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "OS"],
    answer: 1,
  },
  {
    question: "Which is used for styling?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: 2,
  },
  {
    question: "JavaScript is used for?",
    options: ["Styling", "Structure", "Interactivity", "Database"],
    answer: 2,
  },
];

let current = 0;
let score = 0;
let selected = null;

// Load question
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => selectOption(btn, index);

    optionsDiv.appendChild(btn);
  });

  selected = null;
}

// Select option
function selectOption(btn, index) {
  let buttons = document.querySelectorAll("#options button");
  buttons.forEach((b) => b.classList.remove("selected"));

  btn.classList.add("selected");
  selected = index;
}

// Next question
function nextQuestion() {
  if (selected === null) return;

  if (selected === quiz[current].answer) {
    score++;
  }

  current++;

  if (current < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show result
function showResult() {
  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");

  document.getElementById("score").innerText = score + " / " + quiz.length;
}

// Start
loadQuestion();
