function Board(string) {
  this.input = string;
  this.board = [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]];
}

Board.prototype.setUp = function() {
  var initialValues = this.input.split("");
  for (i=0; i<initialValues.length; i++) {
      var numToTest = parseInt(initialValues[i]);
    if (numToTest !== 0) {
      var innerArrayIndex = i%4;
      var outerArrayIndex = parseInt(i/4);
      this.board[outerArrayIndex][innerArrayIndex] = parseInt(initialValues[i]);
    }
  }
}

Board.prototype.toString = function(){
  var flattenedBoard = _.flatten(this.board);
  for (i=0; i<flattenedBoard.length; i++){
    flattenedBoard[i] = flattenedBoard[i].toString();
    if (i%4 === 3){
      flattenedBoard[i] += "\n";
    }
  }
  console.log(flattenedBoard.join(""));
}

Board.prototype.moveRight = function() {
// for each outerIndex:
  // starting at innerIndex[2], check if innerIndex[i+1] === 0
    // if it is 0:
      // change innerIndex[i+1] to the value of innerIndex[i]
      // change the value of innerIndex[i] to 0.
  // then innerIndex[1]
  // then innerIndex[0]
  for (var outerIndex=0; outerIndex<4; outerIndex++) {
    for (var innerIndex=2; innerIndex >=0; innerIndex--) {
      if (this.board[outerIndex][innerIndex+1] === 0) {
        this.board[outerIndex][innerIndex+1] = this.board[outerIndex][innerIndex];
        this.board[outerIndex][innerIndex] = 0;
      }
    }
  }
}

Board.prototype.moveLeft = function() {

}

Board.prototype.moveUp = function() {

}

Board.prototype.moveDown = function() {

}



