var noOfSquare=6;
var colors=[];
var pickedColor
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");

init();
	function init(){
		setupModeButton();
		setupSquares();
		reset();

	}
function setupModeButton(){
	for(var i=0;i<modeButton.length;i++){
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?noOfSquare=3:noOfSquare=6;
		reset();
		});
		}
}
function setupSquares(){
	for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=colors[i];
			squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor=this.style.backgroundColor;
			//compare the clicked color with the pickedColor
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				resetButton.textContent="Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
			});
		}
}


function reset(){
	resetButton.textContent="New Colors";
	colors=generateRandomColor(noOfSquare);
	//pick new random color from array
	pickedColor=pickColor();
	//change color display
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	//change colors of square
	for(var i=0;i<squares.length;i++){
	if(colors[i])
	{
	squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
	}
	h1.style.backgroundColor="steelblue";

}

resetButton.addEventListener("click",function(){
reset();
});
colorDisplay.textContent=pickedColor;

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	//make an array
	var arr=[]
	//add num random colors to the array
	for(var i=0;i<num;i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}
function randomColor(){
	//pick a "red ", blue and green from 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}