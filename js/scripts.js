// Back end
var player1 = "";
var player2 = "";

var rollDice = function() {
  return Math.ceil(Math.random()*6);
}



// Front end
$(document).ready(function(){
  $("button#roll-button").click(function(event){
    event.preventDefault();

  var roll = rollDice();

  $("span#result").text(roll);

  });
});
