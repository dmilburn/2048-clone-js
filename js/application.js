$(document).ready(function() {

board = new Board('2000200000000000');

board.setUp();

// board.toString();

// board.moveDown();

board.toString();

board.moveUp();
board.toString();
board.moveDown();
board.toString();
board.moveRight();
board.toString();
board.moveLeft();
board.toString();
});
