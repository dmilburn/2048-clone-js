$(document).ready(function() {

  board = new Board();
  board.setUp();

  board.draw();
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
});


