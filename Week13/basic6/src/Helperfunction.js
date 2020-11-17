
function max(a, b) {
    if (a > b) return a;
    return b;
}

function min(a, b) {
    if (a < b) return a;
    return b;
}

function winner(board , sym) {
    for (let i = 0; i < 3; i++){
        if ((board[i][0] === sym) && (board[i][1] === sym) && (board[i][2] === sym)) return true;
        if ((board[0][i] === sym) && (board[1][i] === sym) && (board[2][i] === sym)) return true;
    }
    if ((board[0][0] === sym) && (board[1][1] === sym) && (board[2][2] === sym)) return true;
    if ((board[0][2] === sym) && (board[1][1] === sym) && (board[2][0] === sym)) return true;
    return false;
}

function isTie(board) {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if(board[i][j] === '') return false;
        }
    }
    return true;
}

function equals3(a, b, c) {
  return a === b && b === c && a !== '';
}

function checkWinner(board) {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        openSpots++;
      }
    }
  }

  if (winner === null && openSpots === 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function maxmin(board, symbol, reward, str) {
    if( isTie(board)) return 0;
    if (str === 'max') {
        let bestScore = +Infinity;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = symbol.player;
                    if (winner(board, symbol.player)) {
                        board[i][j] = ''
                        return -1;
                    }
                    let score = maxmin(board, symbol, reward, 'min');
                    bestScore = min(score, bestScore);
                    board[i][j] = ''
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = symbol.ai;
                    if (winner(board, symbol.ai)) {
                        board[i][j] = ''
                        return 1;
                    }
                    let score = maxmin(board, symbol, reward, 'min');
                    bestScore = max(score, bestScore);
                    board[i][j] = ''
                }
            }
        }
        return bestScore;
    }
}

function minimax(board, depth, isMaximizing , ai , human , scores) {
    let result = checkWinner(board);
    if (result !== null) {
        return scores[result];
    }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === '') {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false , ai , human , scores);
          board[i][j] = '';
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === '') {
          board[i][j] = human;
          let score = minimax(board, depth + 1, true , ai , human , scores);
          board[i][j] = '';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

function getMatrixSuccess(board) {
    for (let i = 0; i < 3; i++){
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '')
            return [`${i}-0`, `${i}-1`, `${i}-2`];
        if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && board[0][i] !== '')
            return [`0-${i}`, `1-${i}`, `2-${i}`];
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '')
        return ['0-0', '1-1', '2-2'];
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== '')
        return ['0-2' , '1-1' , '2-0']
}

export {
    max, min, winner,
    isTie, equals3, checkWinner,
    maxmin,minimax,getMatrixSuccess
}