const color1 = document.querySelector("#color-1");
const color2 = document.querySelector("#color-2");
const color3 = document.querySelector("#color-3");
const resetBtn = document.querySelector("#reset-btn");
const message = document.querySelector("#message");
const score = document.querySelector("#score");

let targetColor;
let currentScore = 0;

const colors = [];
for (let i = 0; i < 3; i++) {
  colors.push(generateRandomColor());
}

targetColor = colors[Math.floor(Math.random() * 3)];
message.textContent = targetColor;
score.textContent = currentScore;

color1.style.backgroundColor = colors[0];
color2.style.backgroundColor = colors[1];
color3.style.backgroundColor = colors[2];

color1.addEventListener("click", function() {
  checkAnswer(colors[0]);
});

color2.addEventListener("click", function() {
  checkAnswer(colors[1]);
});

color3.addEventListener("click", function() {
  checkAnswer(colors[2]);
});

resetBtn.addEventListener("click", function() {
  location.reload();
});

function checkAnswer(color) {
  if (color === targetColor) {
    message.textContent = "Correct!";
    color1.style.backgroundColor = targetColor;
    color2.style.backgroundColor = targetColor;
    color3.style.backgroundColor = targetColor;
    resetBtn.textContent = "Play Again?";
    currentScore++;
  } else {
  
    message.textContent = "Try Again";
  }
  score.textContent = currentScore;
}

function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", "+g+","+b+")";
}