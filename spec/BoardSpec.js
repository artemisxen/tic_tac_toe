'use strict';
describe ('Board', function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('starts with an empty 2d board', function() {
    expect(board.newBoard.length).toEqual(3);
  });

  it('has a method to return the board', function() {
    expect(board.getBoard()).toEqual(board.newBoard);
  })

  it('has a method for placing a symbol in a field', function() {
    board.placeSymbol(1,2,'x');
    expect(board.getBoard()[1][2]).toEqual('x');
  })

  it('checks if a field is claimed', function() {
    board.placeSymbol(1,2,'x');
    expect(board.isFieldClaimed(1,2)).toBe(true);
  })

});
