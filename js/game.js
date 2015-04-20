

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
  var initialValues = this.input.split("");
  // find the index of values are NOT 0.
  for (i=0; i<initialValues.length; i++) {
      // find index of the value IF it's not zero
      var numToTest = parseInt(initialValues[i]);
    if (numToTest !== 0) {
      // convert that index to the index of this.board
      var innerArrayIndex = i%4;
      var outerArrayIndex = parseInt(i/4);
    // change the number property of the square at that index
    //   to the value from the input string.
      this.board[outerArrayIndex][innerArrayIndex].number = parseInt(initialValues[i]);
    }
  }
}


Board.prototype.toString = function(){
  console.log(_.flatten(this.board));
}


