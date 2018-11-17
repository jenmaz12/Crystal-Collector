$(document).ready(function(){
// set targetNumber equal to a random integer between 120 and 19
var targetNumber = Math.floor(Math.random() * 101) + 19;
// print target number to section with id targetnumber
$("#targetnumber").html(targetNumber);
console.log(targetNumber);

// set usertotal to 0
var userTotal = 0;
$("#usertotal").html(userTotal);

// set wins and losses to zero
var wins = 0;
$("#wins").html("Wins: " + wins);
var losses = 0;
$("#losses").html("Losses: " + losses);

// create array of crystal values
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

// create variable for each crystal based on their id
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");

// assign value randomly to each from array above
crystal1.attr("data-crystalvalue",numberOptions[Math.floor(Math.random() * 11)]);
crystal2.attr("data-crystalvalue",numberOptions[Math.floor(Math.random() * 11)]);
crystal3.attr("data-crystalvalue",numberOptions[Math.floor(Math.random() * 11)]);
crystal4.attr("data-crystalvalue",numberOptions[Math.floor(Math.random() * 11)]);


// when any crystal is clicked, add the crystal's value to the userTotal and print to screen
$(".crystal").on("click",function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    userTotal += crystalValue;
    $("#usertotal").html(userTotal);
    // if userTotal is equal to the target number, the user wins and receives win message
    if (userTotal===targetNumber) {
        $("#alert").html("You win!");
        wins++;
        $("#wins").html("Wins: " + wins);
        userTotal = 0;
        $("#usertotal").html(userTotal);
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#targetnumber").html(targetNumber);
    }
    // if userTotal is greater than the target number, the user loses and receives losing message
    else if (userTotal>targetNumber) {
        $("#alert").html("You lose!");
        losses++;
        $("#losses").html("Losses: " + losses);
        userTotal = 0;
        $("#usertotal").html(userTotal);
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#targetnumber").html(targetNumber);
    };
});


});