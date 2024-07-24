
   let color = "red";
   let click = true;
   function populateContainer(size) {
    const container = document.querySelector(".grid-container");
    let cell = container.querySelectorAll('div')
    cell.forEach(div=> div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
     let amount = size * size;
    for (let i = 0; i < amount; i++) {
        const cell = document.createElement("div");

        cell.addEventListener("mouseover", colorSquare);
        cell.style.backgroundColor = "white";
        container.insertAdjacentElement('beforeend', cell);

   }
}
   populateContainer(16);

   function changeSize(input){
    if (input >= 2 && input <= 100){
        populateContainer(input);
    } else { 
        console.log("Error: Cannot change size out of range");
    }
 
   }
   function colorSquare() {
    if (click) {
        if (color === "random") {
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
          this.style.backgroundColor = color;
        }
      }
}

function changeColor(choice) {
    color = choice;
}

function resetGrid() {
    const cells = document.querySelectorAll(".grid-container div");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

   
   