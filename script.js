$(document).ready(function(){

var magic8Ball = {};
var answer = document.getElementById("answer");
$("#answer").hide(answer);

//created an array of possible answers
magic8Ball.Answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now",  "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

//the method that will select a answer at random and print the question and the answer to the console

magic8Ball.shake = function (question) {
	//getting us a random number we can use to select an entry in our array
var randomNumber = Math.random();
var randomNumberForOurList = this.Answers.length * randomNumber;
var cleanNumber = Math.floor(randomNumberForOurList);

var answer = this.Answers[cleanNumber];
$("#answer").text(answer);

$("#answer").fadeIn(4000);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
};

var insertQuestion = function() {
	$("#answer").hide(answer);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  $("#8ball").effect("shake" );

setTimeout(
	function() {
		var question = prompt("Ask the 8 ball a question");
		magic8Ball.shake(question);
		}, 500);
};

$("#questionButton").click(insertQuestion);

});
