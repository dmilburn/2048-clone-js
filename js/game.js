function Square(number) {
  this.number = number;
}

function Board(string) {
  this.input = string;
  this.board = [];
  var smallArray = [null, null, null, null];
  for (i=0; i<4; i++) {
    this.board.push(smallArray);
  }
}

Board.prototype.setUp = function() {

}
