// Back end
var player1 = 0;
var player2 = 0;
var tempScore = 0;
var rollDice = function() {
  return Math.ceil(Math.random()*6);
}



// Front end
$(document).ready(function(){
  $("button#roll-button").click(function(event){
    event.preventDefault();

  var roll = rollDice();
  $("span#result").text(roll);
  if (roll === 1){
    tempScore = 0;
    if (roll === 1){
      alert("1 Rolled..... turn over");
      $("#player1panel").hide();
      $("#player2panel").show();
    }
  } else {
    tempScore += roll;
  }


  $("span#tempScore").text(tempScore);
  });

  $("button#hold-button").click(function(event){
    player1 += tempScore;
    tempScore = 0;
  $("span#player1Score").text(player1);
  if (player1 >= 100){
  alert("player1 WINS!!!");

  }
  });
});
