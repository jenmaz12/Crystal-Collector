$(document).ready(function(){
// set targetNumber equal to a random integer between 120 and 19
var targetNumber = Math.floor(Math.random() * 120) + 19;
// print target number to section with id targetnumber
$("#targetnumber").html(targetNumber);
console.log(targetNumber);

// set usertotal to 0
var userTotal = 0;

// create array of crystal values
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

// create variable for crystal images
var imageCrystal = $("<img>");

// assign value randomly from array above
imageCrystal.attr("data-crystalvalue",numberOptions[Math.floor(Math.random() * 11)]);

$(".crystal").on("click",function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
})
});