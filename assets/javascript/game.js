var randomNumber= Math.floor((Math.random()*120)+19);
var blue = Math.floor((Math.random()*12) + 1);
var orange = Math.floor((Math.random()*12) + 1);
var red =	Math.floor((Math.random()*12) + 1);
var green = Math.floor((Math.random()*12) + 1);
var wins = 0;
var losses = 0;
var totalScore = 0;

$(document).ready(function() {

$("#randomNumber").text("Random Number is: " + randomNumber);
$("#totalScore").text("Your total score is: " + totalScore);

	$("#blue").on("click", function(){
		totalScore = totalScore + blue;
		update();
	})
	$("#orange").on("click", function(){
		totalScore = totalScore +  orange;
		update();
	})
	$("#red").on("click", function(){
		totalScore = totalScore +  red;
		update();
	})
	$("#green").on("click", function(){
		totalScore = totalScore +  green;
		update();
	})

function update() {
	$("#totalScore").text("Your total score is: " + totalScore);
	if (totalScore === randomNumber) {
		wins++;
		$("#wins").text("Wins: " + wins);
		reset();
	}
	else if (totalScore >= randomNumber) {
		losses++;
		$("#losses").text("Losses: " + losses);
		reset();
	}
};

function reset() {
	randomNumber = Math.floor((Math.random()*120)+19);
	$("#randomNumber").text("Random Number is: " + randomNumber);
	blue = Math.floor((Math.random()*12) + 1);
	orange = Math.floor((Math.random()*12) + 1);
	red =	Math.floor((Math.random()*12) + 1);
	green = Math.floor((Math.random()*12) + 1);
	totalScore = 0;
	$("#totalScore").text("Your total score is: " + totalScore);


}

});