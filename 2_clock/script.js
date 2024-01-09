const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// const
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const rawHours = now.getHours();
  const hours = rawHours > 12 ? rawHours - 12 : rawHours;

  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minDegrees = minutes * 6 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegrees = hours * 15 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // 24 -> 360
  // hours -> x

  console.log(hours);
}

setInterval(setDate, 1000);
