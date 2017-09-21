(function(exports) {
  function Rules(board) {
    this.board = board;
  }

  Rules.prototype.row = function (symbol) {
    this.board.getBoard().forEach(function(innerArray) {
      innerArray.forEach(function(element) {
        if(element === symbol) {
          return false;
        }
        return true;
      });
    });
  };









  Rules.prototype.winningRow = function () {
    ary = this.board.getBoard();
    for (i = 0; i < ary.length; i++) {
      if(ary[i][0] === ary[i][1] && ary[i][2] === ary[i][0]) {
         console.log('win');
          break;
       }
     }
   };

   Rules.prototype.winningColumn = function () {
     ary = this.board.getBoard();
     for (i = 0; i < ary.length; i++) {
       if(ary[0][i] === ary[1][i] && ary[2][i] === ary[1][i]) {
          console.log('win');
           break;
        }
      }
    };

  exports.Rules = Rules;
})(this);
