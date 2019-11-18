//select elements

//select elements
//textarea
let textContent= document.getElementById("displayText");
//box inside 
let length= document.getElementById("displayLength");
//add input event Listener to display words

textContent.addEventListener("input", function(){
  //get value
  let value= textContent.value;
  //let split value into array 
  //remove white space in the array
  let removewhiteSpaceinArray=  value.split(" ").filter((item) => item !== "").length;
  length.innerHTML= removewhiteSpaceinArray;
});
