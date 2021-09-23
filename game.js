const colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePresss(userChosenColor);

  checkAnswer(userPattern.length - 1);
});

function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var rand = Math.floor(Math.random() * 4);
  var colorChosen = colors[rand];
  gamePattern.push(colorChosen);

  $("#" + colorChosen)
    .fadeOut(100)
    .fadeIn(100);
  playSound(colorChosen);
}

function checkAnswer(currentLevel) {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Succes");
    if (userPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } 
  else {
    console.log("fils")

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart ");
    playSound("wrong");
    started = false;
    level = 0;
    gamePattern = [];

  }
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePresss(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
