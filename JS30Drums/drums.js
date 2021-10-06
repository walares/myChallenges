window.addEventListener("keydown", function (e) {
  // "e" es lo mismo que "event"
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return; // Stop the function when using a key that isn't programmed
  audio.play();
  audio.currentTime = 0; //Property to play sound everytime I press the key, without waiting for the sound to end.
  key.classList.add("playing"); // Property to add a class to a div.
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing"); // Remove the transition
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
