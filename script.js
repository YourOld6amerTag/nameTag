//set varibales
// identify events
var nameTagInput = document.getElementById("name");
var nameTagDisplay = document.getElementById("nameDisplay");

nameTagInput.addEventListener("change", function(event){
     var currentName = nameTagInput.value; 
     nameTagDisplay.innerText = currentName;
});