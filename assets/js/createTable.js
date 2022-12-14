async function FetchData(){
  const requestURL = "./assets/data/tableData.json";
  const response = await fetch(requestURL).then(res=>res.json()).then(
    (out) => {
      const columnsTitle = out.columnsTitle;
      const tableData = out.tableData; 
      CreateDropAreaTitles(columnsTitle);
      CreateDropAreaTableCell(tableData);
    }
  );
}
var dropAreaContainer = document.getElementById("drop-area-container");

function CreateDropAreaTitles(columnTitles) {
  var dropAreaTitles = document.createElement("div");
  dropAreaTitles.classList.add("drop-area-titles");

  for (var i = 0; i < columnTitles.length; i++) {
    let dropAreaTitle = document.createElement("div");
    dropAreaTitle.classList.add("drop-area-title");
    dropAreaTitle.classList.add("drag-drop-cell");
    dropAreaTitle.innerHTML = columnTitles[i];
    dropAreaTitles.appendChild(dropAreaTitle);
  }

  dropAreaContainer.insertBefore(dropAreaTitles,dropAreaContainer.firstChild);
}

function CreateDropAreaTableCell(tableData) {
    var dropAreaColumns = document.createElement("section");
    dropAreaColumns.classList.add("drag-drop-area-columns");
    for (var i = 0; i < tableData.length ; i++){
        var dropAreaColumn = document.createElement("div");
        dropAreaColumn.classList.add("drop-area-column");
        for(var j = 0; j < tableData[i].length; j++){
            var dragDropCell = document.createElement("div");
            dragDropCell.classList.add("drag-drop-cell-free");
            dragDropCell.classList.add("drag-drop-cell");
            var dragDropCellTexts = document.createElement("div");
            dragDropCellTexts.classList.add("drag-drop-cell-texts");

            var dragDropCellFreeText = document.createElement("div");
            dragDropCellFreeText.classList.add("drag-drop-cell-text");
            dragDropCellFreeText.classList.add("drag-drop-cell-free-text");
            dragDropCellFreeText.innerHTML = tableData[i][j].dateTime;
            dragDropCellTexts.appendChild(dragDropCellFreeText);

            var dragDropCellActiveText = document.createElement("div");
            dragDropCellActiveText.classList.add("drag-drop-cell-text");
            dragDropCellActiveText.classList.add("drag-drop-cell-active-text");
            dragDropCellTexts.appendChild(dragDropCellActiveText);


            var dragDropCellHoverText = document.createElement("div");
            dragDropCellHoverText.classList.add("drag-drop-cell-text");
            dragDropCellHoverText.classList.add("drag-drop-cell-hover-text");
            dragDropCellHoverText.innerHTML = "Click for put" ;
            dragDropCellTexts.appendChild(dragDropCellHoverText);

            dragDropCell.appendChild(dragDropCellTexts);
            dropAreaColumn.appendChild(dragDropCell);
        }
        dropAreaColumns.appendChild(dropAreaColumn);
    }
    dropAreaColumns.appendChild(dropAreaColumn);
    dropAreaContainer.appendChild(dropAreaColumns);
}