// document.body.addEventListener("keydown", (ev) => {

//   // document.querySelector("p").innerHTML += "you clicked " + ev.key + "<br>";
// });

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.currentTime = 0;
  key.classList.add("playing");
}

function removeTRansition(e) {
  console.log(e);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTRansition));

window.addEventListener("keydown", playSound);
