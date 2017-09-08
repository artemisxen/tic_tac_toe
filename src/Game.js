(function(exports) {
  function Game(player_x, player_o, board) {
    this.player_x = player_x;
    this.player_o = player_o;
    this.board = board;
    this.currentPlayer = this.player_x;
  }

  Game.prototype.play = function(x,y) {
    if (this.board.isFieldClaimed(x,y)) {
      throw "This field is already claimed";
    } else {
      this.board.placeSymbol(x,y,(this.currentPlayer.getSymbol()));
      this._switchTurns();
      return this.board.getBoard();
    }
  };

  Game.prototype._switchTurns = function () {
    (this.currentPlayer === this.player_x) ? (this.currentPlayer = this.player_o) : (this.currentPlayer = this.player_x);
    return this.currentPlayer;
  };

exports.Game = Game;
})(this);
