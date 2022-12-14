/*setTimeout(() => {
    Transporter(true);
}, 2000);*/
var pressCTRL = false;

document.addEventListener("keydown", (event) => {
  if ((event.key = 17)) {
    pressCTRL = true;
  }
});

document.addEventListener("keyup", (event) => {
  if ((event.key = 17)) {
    pressCTRL = false;
  }
});
function DeleteAllSelected() {
  for (var i = selectedArray.length - 1; i >= 0; i--) {
    selectedArray[i].classList.remove("drag-drop-cell-option-selected");
    selectedArray[i].classList.add("drag-drop-cell-option");
    selectedArray.pop(selectedArray[i]);
    transporter.removeChild(transporter.lastChild);
  }
  isFull = false;
}
//seçimi ve toplu seçimi iptal etme eventi
document.body.onclick = (event) => {
  if (
    event.target.classList.contains("drag-drop-cell") == false &&
    event.target.classList.contains("drag-drop-cell-hover") == false &&
    event.target.classList.contains("drag-drop-cell-texts") == false &&
    event.target.classList.contains("drag-drop-cell-text") == false
  ) {
    DeleteAllSelected();

  }
};

function addSelecter(option) {
  SetPossibilityOption();
  
  if (
    option.classList.contains("drag-drop-cell-free") == false &&
    option.classList.contains("drop-area-title") == false &&
    option.classList.contains("drag-drop-cell-hover") == false &&
    option.classList.contains("drag-drop-cell-option-selected") == false
  ) {
    if (pressCTRL==false && isFull==true) {
        DeleteAllSelected();
      }
    selectedArray.push(option);
    optionClone = option.cloneNode(true);
    //dropAreaContainer.insertBefore(dropAreaTitles,dropAreaContainer.firstChild);
    transporter.insertBefore(optionClone, transporter.firstChild);
    Transporter(true);
    option.classList.add("drag-drop-cell-option-selected");
    option.classList.remove("drag-drop-cell-option");
  }
}

function SetPossibilityOption() {
  var allOptions = document.getElementsByClassName("drag-drop-cell");
  for (var i = 0; i < allOptions.length; i++) {
    //allOptions[i].onclick = ()=>{addSelecter(this);}
    allOptions[i].onclick = (event) => {
      let sourceElement = event.srcElement;
      if (sourceElement.classList.contains("drag-drop-cell") == true) {
        addSelecter(sourceElement);
      } else {
        isParent = false;
        var parentElement = sourceElement.parentNode;
        while (!isParent) {
          if (parentElement.classList.contains("drag-drop-cell") == true) {
            isParent = true;
            break;
          }
          var parentElement = parentElement.parentNode;
        }

        addSelecter(parentElement);
      }
    };
  }
}
