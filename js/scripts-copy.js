// Back end
var player1 = 0;
var player2 = 0;
var tempScore = 0;
var rollDice = function() {
  return Math.ceil(Math.random()*6);
}



// Front end
$(document).ready(function(){
  $("#player-name").submit(function(event){
    event.preventDefault();
    var player1Name = $("input#player1name").val();
    $(".player1Name").text(player1Name);
  });

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

  $("button#roll-button2").click(function(event){
    event.preventDefault();

  var roll = rollDice();
  $("span#result2").text(roll);
  if (roll === 1){
    tempScore = 0;
    if (roll === 1){
      alert("1 Rolled..... turn over");
      $("#player2panel").hide();
      $("#player1panel").show();
    }
  } else {
    tempScore += roll;
  }
  $("span#tempScore2").text(tempScore);
  });

  $("button#hold-button").click(function(event){
    player1 += tempScore;
    tempScore = 0;
    $("span#player1Score").text(player1);
    if (player1 >= 100){
      alert("player1 WINS!!!");
    }
  });
  $("button#hold-button2").click(function(event){
    player2 += tempScore;
    tempScore = 0;
    $("span#player2Score").text(player2);
    if (player2 >= 100){
      alert("player2 WINS!!!");
    }
  });
});
