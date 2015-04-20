$(document).ready(function() {

  Board.newGame();

  Mousetrap.bind("up", function(){
    board.move("up");
    board.draw();
  })
  Mousetrap.bind("down", function(){
    board.move("down");
    board.draw();
  })
  Mousetrap.bind("left", function(){
    board.move("left");
    board.draw();
  })
  Mousetrap.bind("right", function(){
    board.move("right");
    board.draw();
  })

  $('#new-game').on('click', function() {
    Board.newGame();
  })

});


