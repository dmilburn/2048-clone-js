$(document).ready(function() {

  Board.newGame();

  $('#new-game').on('click', function() {
    Board.newGame();
  });

});


