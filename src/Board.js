(function(exports) {
  function Board() {
    this.newBoard = [[null,null,null],[null,null,null],[null,null,null]];
  }
  function getBoard() {
    return this.newBoard;
  }
  exports.Board = Board;
})(this);
