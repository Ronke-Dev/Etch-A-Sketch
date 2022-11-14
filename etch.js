// create a random number generator
// create a random color generator that generates 256 numbers
// assign a new element to the existing container and add a class
// create a button function using the mouse over event Listener
// create a for loop that expands the random number generator
// create an input Box




// create a random number generator function
// using 255 because numbers will be generated from 0-255 = 256 numbers, 16 X 16 = 256

function randomNumber(){
    return Math.floor(Math.random() * 255 + 1)
};

randomNumber();



    

// A function that will change the background colour randomly, rgb uses 3 values



// assign a new element to the existing grid container and add a class
const gridContainer = document.querySelector('#grid_container');


// create a function that produces multiple grid, by using a for loop.then insert the new element
function makeRows(rows, cols){
    gridContainer.style.setProperty("--grid-rows",rows);
    gridContainer.style.setProperty("--grid-cols", cols);
    for(c = 0; c < (rows * cols); c++){
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    gridContainer.appendChild(cell);
    cell.addEventListener("mouseover", function changeColor(){
      const rndCol = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
      cell.style.backgroundColor = rndCol;
    });
   
    

    }
}

makeRows(16,16)




// make the button
const button = document.querySelector("#btn");

button.addEventListener("click", function changeSize(size){
  size = prompt("Enter a value between 0 and 101");
  gridContainer.innerHTML="";
  if (0 < size && size <= 100){
    makeRows(size,size);
  } else{ 
    makeRows(16,16);
    alert("only input numbers between 0 and 101")}
});


  
 





// button.addEventListener("click", function changeSize(size) {
//   size = prompt("Enter a value between 0 to 101");
//   container.innerHTML = "";
//   if (0 < size && size <= 100) {
//       makeRows(size, size);
//   } else {
//       makeRows(16, 16);   
//       alert ("Only type values between 1 to 100");
//   }
// });





// // generate random colour through the using of template literals
// function changeColor(){
//     const rndCol = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
//     document.body.style.//////////////////////// = rndCol; - we will have to input the grid background here and not the assignments main background, assign it to div, check TOP
// }


    


    // const grid_container = document.querySelector('#grid_container');
    // const cells = document.createElement("div");
    // cells.classList.add("cells");
    // cells.textContent= "TEXT";
    // grid_container.appendChild(cells);


    


    // function changeColor(){
    //     const rndCol = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    //     document.body.style.cells = rndCol;
       
    // }


  

    




// Use Javascript to add cells to the grid container








//create a button that when you click it and input button shows up

// function message(){
//     let produce = prompt("Enter a value between 0 to 100");
//     return produce
// };
















// create a function for the Message
// function message(){
//     change =  prompt("Enter a value between 0 to 100")
//     return change
// };

// make the button
// const button = document.getElementById("btn");
// button.addEventListener("click", message());



















// assign a new element to the existing container and add a class
// const container = document.querySelector("#container");

// const newDiv = document.createElement('div');
// newDiv.classList.add("grid");
// newDiv.textContent = "Hi, I want to be a grid";

// container.appendChild(newDiv);











// newDiv.style.backgroundColor = randomColor; find a way to make sure the random colour is the background of the grid



// / create a random color generator that generates 256 numbers
// The value of the Hexadecimal can range from 00 to FF. So, the maximum value can be FFFFFF - white color, and the minimum value can be 000000 - black color
// `assign maximum color value to a variable
// assign the random color number generator to a variable
// then convert the random coloR number to A HEX AGAIN (string(16)
// then use padStart to ensure that the string length is at least 6

// a shorter way to write it

// const randColor = () =>  {
//     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }

// console.log(randColor());

// function generateRandomColor(){
//     let maximumValue = 0xFFFFFF;
//     let randomColorNumber = Math.floor(Math.random() * maximumValue);
//     randomColorNumber = randomColorNumber.toString(16);
//     let randomColor = randomColorNumber.padStart(6,0);
//     return `#${randomColor.toUpperCase()}`
// };

// generateRandomColor();


// random color generator multiplied by 255 random numbers
// what if i input the randomNumber() 256 function i made at the top here? This means it wont generate more that 256 numbers, it worked

// function generateRandomColor(){
//     let maximumValue = 0xFFFFFF;
//     let randomColorNumber = randomNumber() * maximumValue;
//     randomColorNumber = randomColorNumber.toString(16);
//     let randomColor = randomColorNumber.padStart(6,0);
    
//     return `#${randomColor.toUpperCase()}`
// };

// generateRandomColor();
