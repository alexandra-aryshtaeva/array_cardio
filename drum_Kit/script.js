// document.body.addEventListener("keydown", (ev) => {

//   // document.querySelector("p").innerHTML += "you clicked " + ev.key + "<br>";
// });

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
