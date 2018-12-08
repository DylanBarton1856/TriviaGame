// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// questions and answer choices
var questions = [
	{
		q1: "Which of these engines came equipped in the USDM Nissan 240SX",
        a1: ['KA24DE','SR20DE','RB25DE','CA18DE'],
        c1: 'KA24DE'
	},
	{
		q2: "Which year began the S14 generation in America",
		a2: ['1992','1991','1995','1997'],
		c2: '1995'
	}
];
// console.log(questions);

// appending questions to DOM
function displayQuestion(){
// $(".quizHolder").text(JSON.stringify(questions[0].question));
			$('#q1').append(questions[0].q1 + '<br>' + '<br>');
			$('#q2').append(questions[1].q2 + '<br>' + '<br>');
}

// turning answer choices into buttons, display on DOM
 function displayAnswer(){
		 // Puts all remaining answers on the page with a different value
		 for (var i = 0; i < 4; i++) {
			 $('#q1').append("<input type='radio' name='answers1'/>" + questions[0].a1[i]);
			 $('#q2').append("<input type='radio' name='answers2'/>" + questions[1].a2[i]);
		 }
}

// click event for user choice
$('.quizHolder').onclick(event)


// submit button



// countdown timer



// compare user choice to correct answer



// game reset



displayQuestion();

displayAnswer();
