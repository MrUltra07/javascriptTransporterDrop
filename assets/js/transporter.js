var transporter = document.getElementById("transporter-div");
var dragDropArea = document.getElementById("drag-drop-area");
var isFull = false;
var selectedArray = [];
function Transporter(parIsFull) {
  isFull = parIsFull;
  transporter = document.getElementById("transporter-div");
}

dragDropArea.onmousemove = (event) => {
    let transporterWidth = transporter.offsetWidth;
    let transporterHeight = transporter.offsetHeight;
    transporter.style.top = event.clientY + 10 + "px";
    transporter.style.left = event.clientX + 10 + "px";
};
