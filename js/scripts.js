// Back end
var total;

function getRandom() {
total = Math.ceil(Math.random()*6);
alert(total);
return total
}



// Front end
$(document).ready(function(){
  $("#roll-button").submit(function(event){
    event.preventDefault();

  var rollOutput = getRandom();

  $("#result").text(total);

  });
});
