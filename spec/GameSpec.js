'use strict';
describe ('Game', function() {
  var game;
  var player_x;
  var player_o;
  var board;

  beforeEach(function() {
    game = new Game();
  });

  it('player can claim a field of the board', function() {
    game.claimField(0,2);
    expect(game.board.newBoard[0][2]).toEqual('X');
  });

  it('players switch turns after claiming a field', function() {
    game.claimField(0,2);
    expect(game.currentPlayer).toEqual(game.player_o);
  });


});
