// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.querySelector('input[type="submit"]');
submit.addEventListener('click', function makeGrid(e) {
  // Your code goes here!
  e.preventDefault();
  if(document.querySelector("tr") != null){
    const myNode = document.getElementById("pixelCanvas");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
  let widthVal = parseInt(document.getElementById("inputWidth").value);
  let heightVal = parseInt(document.getElementById("inputHeight").value);
  console.log(widthVal, heightVal);

  const table = document.getElementById("pixelCanvas");
  for (let i = 0; i < heightVal; i++) {
    const row = document.createElement("tr");
    table.appendChild(row);
    for (let i = 0; i < widthVal; i++) {
      const col = document.createElement("td");
      row.appendChild(col);
    }
  }
  table.addEventListener('click', (event) => {
    if(event.target.nodeName === "TD"){
      let color = document.getElementById("colorPicker").value;
      event.target.style.backgroundColor = color;
    }
  })
});

