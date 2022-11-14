# Etch-A-Sketch

helpful links
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events


This is  a browser version of something between a sketchpad and an Etch-A-Sketch


The process explained

1) const container = document.querySelector('#grid_container');

Created a variable that held the grid container.

2)function generateNumber(number){
  return  Math.floor(Math.random() * number + 1)
}

Create a function that generates random numbers

3) create a function that generates rows and column and append the new divs to it

there are different kind of event listeners such as mouse over, mouse out, click


4) The function that generates random colors, they used Hexadecimals and added 0x to it before applying to Javascript.
The prefix 0x is used in code to indicate that the number is being written in hex. But what is 'B' doing in there? The hexadecimal format has a base of 16, which means that each digit can represent up to 16 different values.
https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript


5) the prompt function...and buttons
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt



https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript

https://developer.mozilla.org/en-US/docs/Web/CSS/--*
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grid_skills








Assignment Guide//

Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div.
changing the div’s background color using JavaScript.
Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

Notes on Grid//
display grid
grid template columns: 200px  200px   200px splits all the cells into colomns
grid-template-columns: 1fr 1fr 1fr; we can use the fr unit to flexibly size grid rows and columns. This unit represents one fraction of the available space in the grid container.
alernative, use repeat --------(grid-template-columns: repeat(3, 1fr); ----in the case of ethc a scketh, you repeat by the variable that represents random columns
grid-gap: 20px; - not neccesary, its an obsolete property

the above is the process of creating an explicit grid. 

The implicit grid is created when content is placed outside of that grid, such as into our rows.By default, tracks created in the implicit grid are auto sized, 
If you wish to give implicit grid tracks a size, you can use the grid-auto-rows and grid-auto-columns properties.

The minmax() function - The minmax() function lets us set a minimum and maximum size for a track, for example, minmax(100px, auto).
 The minimum size is 100 pixels, but the maximum is auto, which will expand to accommodate more content.


   grid-column: 1/13; - its saying let the column expand to the end of column 12. it was used in  a 12column grid
