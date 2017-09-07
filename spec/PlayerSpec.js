'use strict';
describe ('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player('X');
  });

  it('returns the symbol of the player', function() {
    expect(player.getSymbol()).toEqual('X');
  });

});
