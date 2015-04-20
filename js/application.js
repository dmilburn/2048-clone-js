$(document).ready(function() {

  Board.newGame();

  Mousetrap.bind("up", function(){
    board.moveUp();
    board.draw();
  })
  Mousetrap.bind("down", function(){
    board.moveDown();
    board.draw();
  })
  Mousetrap.bind("left", function(){
    board.moveLeft();
    board.draw();
  })
  Mousetrap.bind("right", function(){
    board.moveRight();
    board.draw();
  })

  $('#new-game').on('click', function() {
    Board.newGame();
  })

});


