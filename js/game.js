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
  // remove all 0s from the whole board, using _.without(params_go_here)
  // (4 - array.length) number of times, pad the left of the array with 0s, using array.unshift(0)


}

Board.prototype.moveLeft = function() {

}

Board.prototype.moveUp = function() {

}

Board.prototype.moveDown = function() {

}



