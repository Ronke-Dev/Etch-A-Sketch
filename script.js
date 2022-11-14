// create a dom manipulation

// Created a variable that held the grid container.
const container = document.querySelector('#grid_container');


// Create a function that generates random numbers
function generateNumber(number){
  return  Math.floor(Math.random() * number + 1)
}

// Alternative to this
// function generateNumber(){
//     return  Math.floor(Math.random() * 256)
//   }
  

// create a function that generates rows and column and append the new divs to it
// assign style to container
// we are assigning an eventlistener, in this case that we want the colour of the grids to change
// when we hover, that move mouse over it., the we will create a function and assign it to the event listener
// passing what we want to happen when the mouse overs

function createRows(rows,column){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for(let i = 0; i < rows * column; i++){
        let cells = document.createElement("div");
        cells.classList.add("gridItem");
        container.appendChild(cells);
        cells.addEventListener("mouseover", changeColor())

    }

}

// create a function that will change the colors randomly, then pass  ot as a paraameter to the eventlistener above
function changeColor(){
    const randomColor = `(${generateNumber(255)}, ${generateNumber(255)}, ${generateNumber(255)})`;
    cells.style.backgroundColor = randomColor;
}

createRows(16,16);




const button = document.getElementById("button");

button.addEventListener("click", function changeSize(size) {
    size = prompt("Enter a value between 0 to 101");
    container.innerHTML = "";
    if (0 < size && size <= 100) {
        makeRows(size, size);
    } else {
        makeRows(16, 16);   
        alert ("Only type values between 1 to 100");
    }
});




















// selector {
// 	background-color: black;
// }

// .selector:hover {
// 	background-color: blue;










// const grid_1 = document.createElement('div');
// grid_1.classList.add('grid_item');
// grid_1.textContent = "";

// container.appendChild(grid_1);

// const row 

// function createRows(number){
//     let i = 1; i <= number*number; i++;
//     return number 
    
// }







// function createGrid(number) {
//     const gridContainer = document.querySelector(".grid-container");
//     gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
//     gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
//     for (let i = 1; i <= number*number; i++) {
//         let div = document.createElement("div");
//         div.classList.add("grid-box")
//         gridContainer.appendChild(div);
//     }
//     document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
// }

















// function createRows(rows,number){
//     let text = 0
//     let i = 0;
//     while (number > 0){
//         text += rows;
//         number--;
//     }
//     return text * 16
// }

// createRows(grid_1,16)

// function createRows(rows,number){
//     let text = 0
//     let i = 0;
//     while (number > 0){
//         text += rows;
//         number--;
//     }
//     return text * 16
// }

// createRows(grid_1,16)

// function createRows(){
    
//     let i = 0;
//     while (i < 10){
//         grid_1 += i;
//         i++;
//     }
//     return grid_1
// }

// createRows()


// {/* <script>
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// } */}












// const grid_3 = document.createElement('div');
// grid_3.classList.add('grid_item');
// grid_3.textContent = "1";

// container.appendChild(grid_3);


// const grid_2 = document.createElement('div');
// grid_2.classList.add('grid_item');
// grid_2.textContent = "4";

// container.appendChild(grid_2);


// const grid_4 = document.createElement('div');
// grid_4.classList.add('grid_item');
// grid_4.textContent = "5";

// container.appendChild(grid_4);


// const repeatString = function (str,num){
//     let text = "";
//     if(num < 0){return "ERROR"}
//     while(num > 0){
//         text += str;
//         num--;
//     }

//     return text


// }
    











// the for loop i will use 

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript While Loop</h2>

// <p id="demo"></p>

// <script>
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// }
// document.getElementById("demo").innerHTML = text;
// </script>

// </body>
// </html>