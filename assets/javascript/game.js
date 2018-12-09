// questions and answer choices
// var answersChosen = [];
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

$(document).ready(function() {
// console.log(questions);

// adding questions to DOM
function questionDis() {
	$('#q1').prepend(questions[0].q1 + '<br>' + '<br>');
	$('#q2').prepend(questions[1].q2 + '<br>' + '<br>');
}

// turning answer choices into buttons, display on DOM
function answerDis() {
	$('#q1').append("<input type='radio' name='a1' value='1'/>" + questions[0].a1[0]);
	$('#q2').append("<input type='radio' name='a2' value='1'/>" + questions[1].a2[0]);
	for (var i = 1; i < 4; i++) {
		// $('#q1').append("<button>" + questions[0].a1[i]);
		// $('#q2').append("<button>" + questions[1].a2[i]);
		$('#q1').append("<input type='radio' name='a1' value ='2'/>" + questions[0].a1[i]);
		$('#q2').append("<input type='radio' name='a2' value ='2'/>" + questions[1].a2[i]);
	}

	// register button clicks.
	// $("button").on('click', function () {
	// 	console.log(this.innerText);
	// })
}

// allow only one button selection per question.



//hide questions until start is clicked!



// submit button
$('#submit').on('click', function(){
	gameEnd();
})


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

	if (time === 0) {
		gameEnd()
	}
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

//game end, compare user choice to correct answers
	function gameEnd() {
	var value1 = $("input[name='a1']:checked").val();
	var value2 = $("input[name='a2']:checked").val();
	console.log(value1);
	console.log(value2);
}


questionDis()
answerDis()
})