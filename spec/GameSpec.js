'use strict';
describe ('Game', function() {
  var game;
  var player_x = jasmine.createSpyObj('player_x', {'getSymbol': 'x'})
  var player_o = jasmine.createSpyObj('player_o', {'getSymbol': 'o'})
  var board = jasmine.createSpyObj('board', {'placeSymbol': '', 'getBoard': [[null,null,null]], 'isFieldClaimed': false})
  var board2;

  beforeEach(function() {
    game = new Game(player_x, player_o, board);
  });

  it('player can claim a field of the board', function() {
    game.play(0,2);
    expect(board.placeSymbol).toHaveBeenCalledWith(0,2,'x');
  });

  it("player can't claim a field that is already claimed", function() {
    var newboard = jasmine.createSpyObj('board', {'isFieldClaimed': true})
    var newgame = new Game(player_x, player_o, newboard);
    expect(function(){newgame.play(0,2)}).toThrow("This field is already claimed");
  })

  it('players switch turns after claiming a field', function() {
    game.play(0,2);
    expect(game.currentPlayer).toEqual(game.player_o);
  });


});
