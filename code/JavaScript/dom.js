let dataColor = ['red', 'blue', 'yellow', 'purple', 'pink']
var divColor = document.getElementById("color-set");

function setcolor() {
    const textData = document.getElementById("text-data").value
    document.getElementById(textData).style = (`background-color:${textData}; color: white;`)
    
}

function addColor() {
    const textData = document.getElementById("text-data").value
    dataColor[dataColor.length] = textData
    divColor.insertAdjacentHTML('beforeend',`<div id="${textData}" class="color-content" ><h1>${textData}</h1></div>`)
}

for (let index = 0; index < dataColor.length; index++) {
    const element = dataColor[index];
    divColor.insertAdjacentHTML('beforeend',`<div id="${element}" class="color-content" ><h1>${element}</h1></div>`)
}
