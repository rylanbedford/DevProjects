var numSquares = 6;
var colors = [];
var pickedColor; //variable with no value
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            //the above line replaces the if statement below

            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            reset();
        });
    }
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}



function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    messageDisplay.style.color = "rgb(10, 71, 121)";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}
//the above code is a DRY version of the 2 event listeners bellow and also allows us to remove all the code under the reset button listener and replace it with the reset function


// easyBtn.addEventListener("click", function() {
//     messageDisplay.textContent = "";
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors"
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     messageDisplay.textContent = "";
//     h1.style.backgroundColor = "steelblue";
//     resetButton.textContent = "New Colors"
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //loop thru all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match the given color
        squares[i].style.backgroundColor = color;
        messageDisplay.style.color = color;
    }
}

function pickColor() {
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to arr
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
   var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
