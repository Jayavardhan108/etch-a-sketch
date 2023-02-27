
function changeBackgroundColor(gridBlock) {
    gridBlock.addEventListener("mouseover", () => gridBlock.style.backgroundColor = "black");
}

function prepareGrid(rowCount, colCount) {
    console.log("Preparing Grid");
    const container = document.querySelector(".container");
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let row = rowCount;
    const containerWidth = 1000;
    const containerHeight = 500;
    const blockWidth = containerWidth / colCount;
    const blockHeight = containerHeight / row;
    const rowHeight = containerHeight / row;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
    

    while(row-- > 0) {
        let col = colCount;
        const rowEle = document.createElement("div");
        rowEle.className = "row";
        rowEle.style.height = `${rowHeight}px`;
        while(col-- > 0) {
            const divEle = createGridBlock();
            divEle.style.width = `${blockWidth}px`;
            divEle.style.height = `${blockHeight}px`;
            divEle.style.backgroundColor = "white";
            rowEle.appendChild(divEle);
        }
        container.appendChild(rowEle);
    }

    const gridBlockList = document.querySelectorAll(".grid-block");
    gridBlockList.forEach((gridBlock) => changeBackgroundColor(gridBlock));
}

function createGridBlock() {
    const div = document.createElement("div");
    div.classList.add("grid-block");
    return div;
}

function valueCheck(count, isRow) {
    while (count > 100) {
        alert("Value should not be greater than 100");
        if(isRow) {
            return prompt("Enter the number of blocks in Row");
        } else {
            return prompt("Enter the nmber of blocks in Column");
        }
    }

    return count;
}

prepareGrid(16, 16);

const button = document.querySelector(".change-grid");
button.addEventListener("click", () => {
    const rowCount = valueCheck(prompt("Enter the number of blocks in Row"), true);
    const colCount = valueCheck(prompt("Enter the number of blocks in Column"), false);
    // const rowCount = prompt("Enter the number of blocks in Row");
    // const colCount = prompt("Enter the number of blocks in Column");
    prepareGrid(parseInt(rowCount), parseInt(colCount));
});

