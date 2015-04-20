

function Square(number) {
  this.number = number;
}

function Board(string) {
  this.input = string;
  this.board = [[new Square(0), new Square(0), new Square(0), new Square(0)],
                [new Square(0), new Square(0), new Square(0), new Square(0)],
                [new Square(0), new Square(0), new Square(0), new Square(0)],
                [new Square(0), new Square(0), new Square(0), new Square(0)]];
}

Board.prototype.setUp = function() {
  var initialValues = this.input.split("");
  for (i=0; i<initialValues.length; i++) {
      var numToTest = parseInt(initialValues[i]);
    if (numToTest !== 0) {
      var innerArrayIndex = i%4;
      var outerArrayIndex = parseInt(i/4);
      this.board[outerArrayIndex][innerArrayIndex].number = parseInt(initialValues[i]);
    }
  }
}


Board.prototype.toString = function(){
  var flattenedBoard = _.flatten(this.board);
  // console.log(flattenedBoard);
  for (i=0; i<flattenedBoard.length; i++){
    flattenedBoard[i] = flattenedBoard[i].number.toString();
    if (i%4 === 3){
      flattenedBoard[i] += "\n";
    }
  }
  console.log(flattenedBoard.toString());
}


