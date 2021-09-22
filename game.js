const colors = ["red", "green", "blue", "yellow"];
const gamePattern = [];
const userPattern = [];

function nextSequence() {
  function randomGenrator() {
    var rand = Math.floor(Math.random() * 4);
    return rand;
  }
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  var colorChosen = colors[randomGenrator()];
  gamePattern.push(colorChosen);
  $("#" + colorChosen).fadeOut(100).fadeIn(100);
  playSound(colorChosen);
  
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  playSound(userChosenColor);
});
