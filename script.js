let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/fail.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.getElementById("end-screen").style = "";
  document.getElementById("question-body").style = "display:none";

  document.getElementById("amount-of-questions").innerHTML = questions.length;
  document.getElementById("amount-of-right-questions").innerHTML =
    rightQuestions;
  document.getElementById("header-image").src = "img/trophy.png";
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;

  console.log("Fortschritt", percent);
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("question-text").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfAnswerRight = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(question, selectedQuestionNumber)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfAnswerRight)
      .parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(question, selectedQuestionNumber) {
  return selectedQuestionNumber == question["right_answer"];
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src = "img/quiz-background.jpg";
  document.getElementById("question-body").style = "";
  document.getElementById("end-screen").style = "display:none";

  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
