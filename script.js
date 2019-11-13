//select elements

//box inside 
let displayValue= document.getElementById("displayLength");
//button to be click to display the value of the length
let clickButton= document.getElementById("button");

clickButton.addEventListener("click", length);

//write lengthofWord function

function length(){
  let lenghtofwords= document.getElementById("displayText").value.length;
  displayValue.innerHTML= lenghtofwords;
}
