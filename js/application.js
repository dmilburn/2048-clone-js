$(document).ready(function() {

  Board.newGame();

  ["up", "down", "right", "left"].forEach(function(direction) {
    Mousetrap.bind(direction, function(event){
    event.preventDefault();
    board.move(direction);
    board.draw();
    })
  });

});


