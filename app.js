const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
let paint = false;
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = "rgba(0, 0, 0, 0.842)";
ctx.lineWidth = 2.5;

function endPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const X = event.offsetX;
  const Y = event.offsetY;
  if (!painting) {
    /*!painting 은 !false (true)*/
    ctx.beginPath(); /*경로 생성*/
    ctx.moveTo(X, Y); /*선 시작 좌표*/
  } else {
    ctx.lineTo(X, Y); /*선 끝 좌표*/
    ctx.stroke(); /*선 끝 좌표*/
  }
}

if (canvas) {
  /*그냥 canvas가 존재한다고 확인하는거(없어도 됨)*/
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", endPainting);
  canvas.addEventListener("mouseleave", endPainting);
}
