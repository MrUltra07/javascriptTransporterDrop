function PutToCell(){
    var readyForPut = document.getElementsByClassName("drag-drop-cell-hover");
    for(var i = 0; i < readyForPut.length && i <selectedArray.length; i++){
        console.log("dönüş", i)
        readyForPut[i].onclick= (event) =>{

            isParent = false;
            var parentElement = event.srcElement.parentNode;
            while (!isParent) {
                if (parentElement.classList.contains("drag-drop-cell") == true) {
                    isParent = true;
                    break;
                }
            var parentElement = parentElement.parentNode;
            }
            if(pressCTRL==true){
                for(var j = 0; j < readyForPut.length && j <selectedArray.length; j++){
                    //
                }

            }
            parentElement.classList.add("drag-drop-cell-active");
            parentElement.classList.remove("drag-drop-cell-hover");
            parentElement.querySelector('.drag-drop-cell-active-text').innerHTML=selectedArray[selectedArray.length-1].querySelector('.drag-drop-cell-active-text').innerText;
            selectedArray.pop(selectedArray.lastIndexOf);
            transporter.removeChild(transporter.firstChild);
            if(transporter.children.length==0){
                Transporter(false);
            }
        }
    }
}