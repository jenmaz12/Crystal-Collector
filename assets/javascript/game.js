$(document).ready(function(){
// set targetNumber equal to a random integer between 120 and 19
var targetNumber = Math.floor(Math.random() * 120) + 19;
// print target number to section with id targetnumber
$("#targetnumber").html(targetNumber);
console.log(targetNumber);
});