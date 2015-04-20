function Square(number) {
  this.number = number;
}

function Board(string) {
  this.input = string;
  this.board = [];
  var smallArray = [new Square(0), new Square(0), new Square(0), new Square(0)];
  for (i=0; i<4; i++) {
    this.board.push(smallArray);
  }
}

Board.prototype.setUp = function() {

}
