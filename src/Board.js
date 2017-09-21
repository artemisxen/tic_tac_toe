(function(exports) {
  function Board() {
    this.newBoard = [[null,null,null],[null,null,null],[null,null,null]];
  }

  Board.prototype.getBoard = function () {
    return this.newBoard;
  };

  Board.prototype.placeSymbol = function (x,y,symbol) {
    this.newBoard[x][y] = symbol;
  };

  Board.prototype.isFieldClaimed = function (x,y) {
    if (this.getBoard()[x][y] !== null){
      return true;
    } else {
      return false;
    }
  };

  exports.Board = Board;
})(this);
