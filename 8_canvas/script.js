// select canvas element
const canvas = document.querySelector("canvas");

// canvas is 2d
const ctx = canvas.getContext("2d");

// canvas height and width its already declared in the inner html
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// stroke of the "pencil"
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 15;

//
ctx.moveTo(250, 100);
ctx.lineTo(250, 500);
ctx.moveTo(250, 300);
ctx.lineTo(400, 300);
ctx.moveTo(400, 500);
ctx.lineTo(400, 100);

ctx.moveTo(500, 500);
ctx.lineTo(500, 200);

ctx.moveTo(500, 100);
ctx.lineTo(500, 100);

ctx.stroke();

// //
// function seeCoordinate(e) {
//   console.log("coordinates: " + e.offsetX + " " + e.offsetY);
// }

// window.addEventListener("mouseup", seeCoordinate);

let isDrawing = false;

// for the line to be drawn it needs a starting point and a ending one
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) {
    return;
  }

  ctx.beginPath();

  // .moveTo() its where it starts
  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.moveTo(lastX, lastY);

  //lineTo() its where it ends
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
