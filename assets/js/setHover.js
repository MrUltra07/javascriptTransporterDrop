var  hoverCells = [];
function SetHoverCell() {
    var freeOptions = document.getElementsByClassName("drag-drop-cell-free");
  for (var i = 0; i < freeOptions.length; i++) {
    //allOptions[i].onclick = ()=>{addSelecter(this);}
    if (freeOptions[i].classList.contains("drag-drop-cell-active") == false) {
        var freeOptions = document.getElementsByClassName("drag-drop-cell-free");
        
        freeOptions[i].onmouseenter = (event) => {
            if (isFull) {
              if (pressCTRL == true) {
                var srcElementParent = event.srcElement.parentNode;
                var hoverIndex = Array.prototype.indexOf.call(
                  srcElementParent.children,
                  event.srcElement
                );
                for (
                  var i = hoverIndex;
                  i < hoverIndex + selectedArray.length &&
                  i < srcElementParent.children.length;
                  i++
                ) {
                  srcElementParent.children[i].classList.add("drag-drop-cell-hover");
                  srcElementParent.children[i].classList.remove(
                    "drag-drop-cell-free"
                  );
                  hoverCells.push(srcElementParent.children[i]);
                }
              } else {
                event.srcElement.classList.add("drag-drop-cell-hover");
                event.srcElement.classList.remove("drag-drop-cell-free");
                hoverCells.push(event.srcElement);
              }
            }
            PutToCell();
          };
          freeOptions[i].onmouseleave = (event) => {
            /*if(event.srcElement.classList.contains("drag-drop-cell-hover")==true){
                      event.srcElement.classList.add("drag-drop-cell-free");
                      event.srcElement.classList.remove("drag-drop-cell-hover");
                  }*/
            for (var i = hoverCells.length - 1; i >= 0; i--) {
            
              if(hoverCells[i].classList.contains("drag-drop-cell-active")==false){
              hoverCells[i].classList.add("drag-drop-cell-free");
              hoverCells[i].classList.remove("drag-drop-cell-hover");
              hoverCells.pop(hoverCells[i]);}
            }
            if (pressCTRL == true) {
              var srcElementParent = event.srcElement.parentNode;
              var hoverIndex = Array.prototype.indexOf.call(
                srcElementParent.children,
                event.srcElement
              );
              for (
                var i = hoverIndex;
                i < selectedArray.length && i < srcElementParent.children.length;
                i++
              ) {
                srcElementParent.children[i].classList.remove("drag-drop-cell-hover");
                srcElementParent.children[i].classList.add("drag-drop-cell-free");
                hoverCells.pop(srcElementParent.children[i]);
              }
            } else {
              event.srcElement.classList.remove("drag-drop-cell-hover");
              event.srcElement.classList.add("drag-drop-cell-free");
              hoverCells.pop(event.srcElement);
            }
            PutToCell();
          };
    }    
  }
}
