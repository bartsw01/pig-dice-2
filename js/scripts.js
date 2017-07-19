// Back end
function Player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
}

Player.prototype.addTempScore = function (){
}

Player.prototype.playerName = function() {
  return this.name;
}

var rollDice = function() {
  return Math.ceil(Math.random()*6);
}

// Front end
$(document).ready(function(){
  $("#play-button").click(function(event){
    event.preventDefault();
    var inputtedPlayerName = $("input#playername").val();
    // alert(inputtedPlayerName);
    var newPlayer = new Player(inputtedPlayerName);
    $(".playerName").text(newPlayer.name);

    $("button#roll-button").click(function(event){
      event.preventDefault();

    roll = rollDice();
    $("span#result").text(roll);

    if (roll === 1){
      newPlayer.roll = 0;
    // alert(newPlayer.roll);
      if (roll === 1){
        alert("1 Rolled..... turn over");

      }
    } else {
      newPlayer.roll += roll;
    // alert(newPlayer.roll);
    }
    $("span#tempScore").text(newPlayer.roll);
    });
    $("button#hold-button").click(function(event){
      event.preventDefault();
      newPlayer.score += newPlayer.roll;
      newPlayer.roll = 0;
      $("span#playerScore").text(newPlayer.score);
      if (newPlayer.score >= 100){
        alert("player1 WINS!!!");
      }
      // $("#player2panel").show();
    });
  });
});
