// variables here
var timerText = document.querySelector('#timer');
var startBtn = document.querySelector('#start-button');
var startDisplay = document.querySelector('#start-display');
var quizArea = document.querySelector('#quiz-area');
var qDisplay = document.querySelector('#question-display');
var optionGroup = document.querySelector('#options-group');
var rDisplay = document.querySelector('#display-RorW');
var submitBtn = document.querySelector('#submit');
var saveDisplay = document.querySelector('#save-score');
var enterInitials = document.querySelector('#initials');
var saveInitials = document.querySelector('#save-changes');
var pInitials = document.querySelector('#p-initials');
var pScores = document.querySelector('#p-scores');
var clearScores = document.querySelector('#clear-scores');
var restartBtn = document.querySelector('#restart-quiz');
var countDown = 100;
var timeLeft = 0;
var timeRewardOrDeduct = 10;
var qCountIndex = 0;
var lCountIndex = questions.length - 1;
var timer;
// initial start quiz window pops up
function startQuiz() {
    if(startDisplay) {
        if(startDisplay.style.display == 'none') {
            startDisplay.style.display = 'block';
            quizArea.style.display = 'none';
            restartBtn.style.display = 'none'
        } else {
            startDisplay.style.display = 'none';
            quizArea.style.display = 'block';
        }
    }
// timer is set once start button is clicked
    timer = setInterval(function() {
        console.log(countDown);
        if(countDown === 0) return;
        countDown--
        timerText.textContent = 'Timer: ' + countDown;
    }, 1000);
    displayQuestions()
}
// can't figure out how to loop through questions without calling on each choice ???
function displayQuestions() {
    qDisplay.textContent = questions[qCountIndex].title;
    var displayElements = questions[qCountIndex].choices.map(function(choice, index){
      return (`<button type="button" id="ques-btns" class="button-options btn btn-info btn-lg btn-block" onclick="choiceCheck(${index})">${choice}</button>`) //use of template literals from tutor
    })
    optionGroup.innerHTML = displayElements.join('')
}
// checks user responses-correct or incorrect-deducts or adds time depending on incorrect or correct response
function choiceCheck(choice) {
  if (choice === questions[qCountIndex].answer) {
    countDown += timeRewardOrDeduct;
    rDisplay.textContent = 'ROIGHT';
    rDisplay.setAttribute('style', 'color: green');
  } else {
    countDown -= timeRewardOrDeduct;
    rDisplay.textContent = 'YIKES';
    rDisplay.setAttribute('style', 'color: red');
  }
  questions[qCountIndex].selection = choice
  qCountIndex++
  if (qCountIndex === questions.length) {
    endQuiz()
    return
  }
  displayQuestions()
}
// ends quiz, stops timer, hides qDisplay
function endQuiz() {
  clearInterval(timer)
  qDisplay.textContent = ''
  rDisplay.textContent = ''
  optionGroup.innerHTML = `
    <form id="submit" onsubmit="handleScoreSubmit(event)">
      <p>score: ${countDown}</p>
      <input type="text" placeholder="enter initials"></input>
      <input type="submit" value="submit high score"></input>
    </form> 
  ` // code is from one on one tutor
  console.log(questions);
}
function handleScoreSubmit(event) {
  event.preventDefault()
  var oldScores = localStorage.getItem("highscores")
  if (oldScores) {
    var newScores = JSON.parse(oldScores)
    newScores.push({initials: '', score: countDown})
    localStorage.setItem('highscores', JSON.stringify(newScores))
  } else {
    localStorage.setItem('highscores', JSON.stringify([{initials: '', score: countDown}]))
  }
}