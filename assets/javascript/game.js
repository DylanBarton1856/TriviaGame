// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// questions and answer choices
var answersChosen = [];
var questions = [
	{
		q1: "Which of these engines came equipped in the USDM Nissan 240SX?",
		a1: ['KA24DE', 'SR20DE', 'RB25DE', 'CA18DE'],
		c1: 'KA24DE'
	},
	{
		q2: "Which year began the S14 generation in America?",
		a2: ['1992', '1991', '1995', '1997'],
		c2: '1995'
	}
];
// console.log(questions);

// adding questions to DOM
function gameStart() {
	// $(".quizHolder").text(JSON.stringify(questions[0].question));
	$('#q1').prepend(questions[0].q1 + '<br>' + '<br>');
	$('#q2').prepend(questions[1].q2 + '<br>' + '<br>');
}

// turning answer choices into buttons, display on DOM
for (var i = 0; i < 4; i++) {
	$('#q1').append("<button>" + questions[0].a1[i]);
	$('#q2').append("<button>" + questions[1].a2[i]);
}
// register button clicks.
$("button").on('click', function () {
	console.log(this.innerText);
})

// allow only one button selection per question.



//hide questions until start is clicked!



// submit button



// countdown timer

var clockRunning = false;
var time = 60;

$('#start').on('click', start);
$("#display").text("01:00");

// set clock to running
function start() {
	if (!clockRunning) {
		intervalId = setInterval(count, 1000);
		clockRunning = true;
	}
}

var converted = timeConverter(time);

function count() {
	//allow time to deduct
	time--;

	// turn current time into converted variable
	var converted = timeConverter(time);
	console.log(converted);

	// Show the converted time in the "display" div.
	$("#display").text(converted);
}
function timeConverter(t) {

	var minutes = Math.floor(t / 60);
	var seconds = t - (minutes * 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes === 0) {
		minutes = "00";
	}
	else if (minutes < 10) {
		minutes = "0" + minutes;
	}
	return minutes + ":" + seconds;
}

// compare user choice to correct answer



// game reset



gameStart();
