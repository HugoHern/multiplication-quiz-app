const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById("question");
questionElement.innerText = `What is ${number1} x ${number2} ?`;

const formElement = document.getElementById("form");

const inputElement = document.getElementById("input");

const scoreElement = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreElement.innerText = `Score: ${score}`;

const correctAnswer = number1 * number2;

formElement.addEventListener("submit", () => {
  const userAnswer = +inputElement.value;
  console.log(userAnswer, typeof userAnswer);
  if (userAnswer === correctAnswer) {
    score++;
    console.log(score);
    updateLocalStorage();
  } else {
    score--;
    console.log(score);
    updateLocalStorage();
  }
});

const updateLocalStorage = () => {
  localStorage.setItem("score", JSON.stringify(score));
};
