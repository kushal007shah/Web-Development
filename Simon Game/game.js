var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var clickCount = 0;
var startedToToggle = "false";
//only once detect keypress , to start the game
$(document).on("keypress", function() {
  if (startedToToggle == "false") {
    startedToToggle = "true";
    $("h1").text("Level 0");
    nextSequence();
  }
});

//on click event listener
$(".btn").on("click", function() {
  clickCount++;
  var userChosenColor = this.id; //getting color
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  if (clickCount == level) {
    checkAnswer(level);
  }
});

function nextSequence() {
  $("h1").text("Level " + level++);
  var randomNumber = Math.floor((Math.random() * 100) % 4 + 1);
  var randomChosenColor = buttonColors[randomNumber - 1];
  gamePattern.push(randomChosenColor);
  console.log(randomNumber, randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

// play sounds
function playSound(randomChosenColor) {
  var audio = new Audio("sounds/" + randomChosenColor + '.mp3');
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed").delay(100).queue(function() {
    $(this).removeClass("pressed").dequeue();
  });
}

function checkAnswer(currentLevel) {
  for (var i = 0; i < currentLevel; i++) {
    if (userClickedPattern[i] != gamePattern[i]) {
      console.log("wrong");
      var audio = new Audio('sounds/wrong.mp3');
      audio.play();
      $("body").addClass("game-over").delay(200).queue(function() {
        $(this).removeClass("game-over").dequeue();  });
      $("h1").text("Game Over,Press Any Key to Restart");
      level = 0;
      startOver();
      break;
    }
  }
  if (i === currentLevel) {
    console.log("success");
    userClickedPattern = [];
    clickCount = 0;
    setTimeout(function() {nextSequence();}, 1000);
  }
}

function startOver(){
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  clickCount = 0;
  startedToToggle = "false";
}
