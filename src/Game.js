(function(exports) {
  function Game() {
    this.player_x = new Player('X');
    this.player_o = new Player('O');
    this.board = new Board();
    this.currentPlayer = this.player_x;
  }

  Game.prototype.claimField = function(x,y) {
    this.board.newBoard[x][y] = this.currentPlayer.getSymbol();
    this._switchTurns();
    return this.board.newBoard;
  };

  Game.prototype._switchTurns = function () {
    if (this.currentPlayer === this.player_x) {
      this.currentPlayer = this.player_o;
    } else {
      this.currentPlayer = this.player_x;
    }
    return this.currentPlayer;
  };

exports.Game = Game;
})(this);
