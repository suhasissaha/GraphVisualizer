function canvasInit() {
  var canvas = document.getElementById("mycanvas");
  canvas.width = window.innerWidth;
  canvas.style.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.height = window.innerHeight;
}

var num = 1;

function drawNode(x, y) {
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.font = "30px Arial";
  ctx.fillText(num.toString(),x - 10,y + 10);
  num++;  
}

// window.onclick = function () {
//   drawNode(MouseEvent.x, MouseEvent.y);
// }

function getMousePosition(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
  console.log("Coordinate x: " + x,  
              "Coordinate y: " + y); 
  drawNode(x,y);
} 

let canvasElem = document.getElementById("mycanvas");//document.querySelector("canvas");

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMousePosition(canvasElem, e); 
}); 

window.onresize = function () {
  canvasInit();
}

canvasInit();