'use strict';
describe ('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('starts with an empty 2d board', function() {
    expect(board.newBoard.length).toEqual(3);
  });


});
