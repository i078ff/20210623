import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

//追加分
const blackButton = document.querySelector("#black-button");
blackButton.addEventListener("click", () => {
  context.strokeStyle = "#000000";
});

const redButton = document.querySelector("#red-button");
redButton.addEventListener("click", () => {
  context.strokeStyle = "#FF0000";
});

const eraserButton = document.querySelector("#eraser-button");
eraserButton.addEventListener("click", () => {
  context.strokeStyle = "skyblue";
});

let inputBold = document.getElementById("bold-range");
inputBold.addEventListener("change", () => {
  context.lineWidth = inputBold.value;
});

//追加終了

let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }

  context.lineTo(x, y);
  context.stroke();
}
