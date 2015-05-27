function Board() {
  var defaultBoardStart = _.shuffle([2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  defaultBoardStart = defaultBoardStart.join("");
  this.input = defaultBoardStart;
  this.score = 0;
  this.board = [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]];
  this.firstMove = true;
}

Board.prototype.resetKeys = function() {
  ["up", "down", "right", "left"].forEach(function(direction) {
    Mousetrap.bind(direction, function(event){
    event.preventDefault();
    board.move(direction);
    board.draw();
    })
  });
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

Board.prototype.spawnNumber = function() {
  // check entire nested board for 0.
  // replace one of those 0s with a 2 or 4.
  var outerIndex = Math.floor(Math.random() * 4);
  var innerIndex = Math.floor(Math.random() * 4);
  if (this.board[outerIndex][innerIndex] === 0) {
    // 2 or 4
    if (this.firstMove === true){
      this.board[outerIndex][innerIndex] = 2;
      this.firstMove = false;
    }else {
      this.board[outerIndex][innerIndex] = Math.floor((Math.random() * 2) + 1 ) * 2;
    }
  }
  else {
    this.spawnNumber();
  }
}

Board.prototype.checkDirection = function(direction) {
  if (direction=="up" || direction=="down") {
    this.board = _.zip.apply(_, this.board);
  }
}

Board.prototype.hasEmpty = function() {
  if (_.contains(_.flatten(this.board), 0)) {
    return true;
  }
  else {
    return false;
  }
}

Board.newGame = function() {
  board = new Board();
  board.resetKeys();
  board.setUp();
  board.draw();
}

Board.prototype.lose = function() {
  this.board[1][0] = "G";
  this.board[1][1] = "A";
  this.board[1][2] = "M";
  this.board[1][3] = "E";
  this.board[2][0] = "O";
  this.board[2][1] = "V";
  this.board[2][2] = "E";
  this.board[2][3] = "R";
  for (i=0; i<4; i++) {
    this.board[0][i] = 0;
    this.board[3][i] = 0;
  }
  ["up", "down", "right", "left"].forEach(function(direction) {
    Mousetrap.bind(direction, function(event){
    event.preventDefault();
      Board.newGame();
    })
  });
}

Board.prototype.move = function(direction) {
  this.checkDirection(direction);
  var doubleness = false;
  var emptiness = this.hasEmpty();
  for (i=0; i<4; i++) {
    this.board[i] = _.without(this.board[i], 0);
    if (direction === "left" || direction === "up") {
      for (k=0; k < this.board[i].length - 1; k++) {
        if (this.board[i][k] === this.board[i][k+1]) {
          doubleness = true;
          this.board[i][k+1] += this.board[i][k];
          this.score += this.board[i][k+1];
          this.board[i].splice(k, 1);
        }
      }
    }
    else {
      for (k=this.board[i].length-1; k>=0; k--) {
        if (this.board[i][k] === this.board[i][k-1]) {
          doubleness = true;
          this.board[i][k-1] += this.board[i][k];
          this.score += this.board[i][k-1];
          this.board[i].splice(k, 1);
        }
      }
    }
    var paddingAmount = 4 - this.board[i].length;
    for (j=0; j<paddingAmount; j++) {
      if (direction=="right" || direction=="down") {
        this.board[i].unshift(0); }
      else {
        this.board[i].push(0); }
    }
  }
  this.checkDirection(direction);
  if (emptiness === false && doubleness === false) {
    this.lose();
  }
  else {
    this.spawnNumber();
  }
}

Board.prototype.draw = function() {
  var colors = ["cornflowerblue", "aquamarine", "hotpink", "blueviolet", "goldenrod", "dodgerblue", "lightcoral", "lightgreen"];
  document.getElementById('score').innerHTML = this.score;
  for (outerIndex=0; outerIndex<4; outerIndex++) {
    for (innerIndex=0; innerIndex<4; innerIndex++ ) {
      if (this.board[outerIndex][innerIndex] !== 0) {
        document.getElementById(outerIndex + "-" + innerIndex).innerHTML = this.board[outerIndex][innerIndex];
          document.getElementById(outerIndex + "-" + innerIndex).style.background = colors[(Math.log2(this.board[outerIndex][innerIndex]))%8];
      }
      else {
        document.getElementById(outerIndex + "-" + innerIndex).innerHTML = "";
        document.getElementById(outerIndex + "-" + innerIndex).style.background = "skyblue";
      }
    }
  }
}



