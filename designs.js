// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let submitListner = document.getElementById("sizePicker")
submitListner.addEventListener("submit", makeGrid);
const myCanvasDiv = document.createElement('div');
myCanvasDiv.setAttribute("id", "myCanvasDiv");
const colorPicker = document.getElementById("colorPicker");
let color = colorPicker.value;


function makeGrid(event) {

  if (!!document.querySelectorAll("myCanvas") === true) {
    let toRemove = document.querySelectorAll("#myCanvas");
    toRemove.forEach(e => e.parentNode.removeChild(e));
    toRemove = document.querySelectorAll("#myCanvasDivHo");
    toRemove.forEach(e => e.parentNode.removeChild(e));

  }

  let inputHeight = document.querySelector("#inputHeight");
  let inputWidth = document.querySelector("#inputWidth");

  for (var i = 0; i < inputHeight.value; i++) {
    const myCanvasDivHo = document.createElement('div');
    myCanvasDivHo.setAttribute("id", "myCanvasDivHo");
    for (let j = 1; j <= inputWidth.value; j++) {
      myCanvasDiv.appendChild(myCanvasDivHo);
      const newCanvas = document.createElement('canvas');
      newCanvas.setAttribute("id", "myCanvas");
      newCanvas.setAttribute("width", "8");
      newCanvas.setAttribute("height", "8");
      myCanvasDivHo.appendChild(newCanvas);
      event.preventDefault();
    }

  }
}

function changeColor(event) {
  var c = event.target;
  var ctx = c.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 8, 8);

}

function respondToTheClick(evt) {
  console.log('A paragraph was clicked: ' + evt.target.textContent);
}

function colorPickerFu() {
  color = colorPicker.value;
}

colorPicker.addEventListener('change', colorPickerFu);

document.body.appendChild(myCanvasDiv);

myCanvasDiv.addEventListener('click', changeColor);
