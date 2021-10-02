"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.quertySelector(".message").textContent = "Correct Number! 🍟";
*/

// 1. Seleccionamos el botón con querySelector y la clase correspondiente.
// 2. Usamos el addEventListener para linkear el event handler (click), seguido de la función deseada para extraer el valor.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//Math.random nos a un valor aleatorio entre 0 y 1
//Math.trunc nos da numeros sin decimales

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🙊 No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎈 Correct number!!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".result").textContent = "Winner!!!";

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "🎏 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loooose";
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "🎏 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loooose";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = " ";

  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".result").textContent = " ";

  document.querySelector(".number").style.width = "15rem";
});
