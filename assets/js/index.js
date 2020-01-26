var timer = document.querySelector('#timer');
var startBtn = document.querySelector('#start-button');
var startDisplay = document.querySelector('#start-display');
var quizArea = document.querySelector('#quiz-area');
var qDisplay = document.querySelector('#question-display');
var optionsGroup = document.querySelector('#options-group')
var rDisplay = document.querySelector('#display-RorW');
var submitBtn = document.querySelector('#submit');
var saveDisplay = document.querySelector('#save-score');
var enterInitials = document.querySelector('#initials');
var saveInitials = document.querySelector('#save-changes');
var pInitials = document.querySelector('#p-initials');
var pScores = document.querySelector('#p-scores');
var clearScores = document.querySelector('#clear-scores');

var countDown = 100;
var timeLeft = 0;
var timeDeduct = 0;

// initial start quiz window pops up
function startQuiz() {
    if(startDisplay) {
        if(startDisplay.style.display == 'none') {
            startDisplay.style.display = 'block';
            quizArea.style.display = 'none';
        } else {
            startDisplay.style.display = 'none';
            quizArea.style.display = 'block';
        }
    }
// timer is set once start button is clicked
setInterval(function() {
    console.log(countDown);
    if(countDown === 0) return;
    countDown--
    timer.textContent = 'Timer: ' + countDown;
}, 1000);

}
    


// cycle through quiz questions
function quizQuestions () {
    qDisplay.textContent = questions.title;
    console.log(quizQuestions)
}



