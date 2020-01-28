var timer = document.querySelector('#timer');
var startBtn = document.querySelector('#start-button');
var startDisplay = document.querySelector('#start-display');
var quizArea = document.querySelector('#quiz-area');
var qDisplay = document.querySelector('#question-display');
// var optionGroup = document.querySelector('#options-group');
var optionA = document.querySelector('#option-A');
var optionB = document.querySelector('#option-B');
var optionC = document.querySelector('#option-C');
var optionD = document.querySelector('#option-D');
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
var timeRewardOrDeduct = 10;
var qCountIndex = 0;
var lCountIndex = questions.length - 1;

submitBtn.addEventListener('click', nextQuestion);

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

    startQuestions();
}

// can't figure out how to loop through questions without calling on each choice ???
function startQuestions() {
    qDisplay.textContent = questions[qCountIndex].title;
    optionA.textContent = questions[qCountIndex].choices[0];
    optionB.textContent = questions[qCountIndex].choices[1];
    optionC.textContent = questions[qCountIndex].choices[2];
    optionD.textContent = questions[qCountIndex].choices[3];
}

function nextQuestion() {

}

function choiceCheck(choice) {
    if(choice === questions[qCountIndex].answer) {
        countDown + timeRewardOrDeduct;
        rDisplay.textContent = 'ROIIIGHT'
        startQuestions();
    } else {
     countDown - timeRewardOrDeduct;
     rDisplay.textContent = 'YIKES'
     startQuestions();
    }
}
// set up local storage to store scores and initials

// 
// 