import React from 'react';

function Square(props) {
  const className = "square " + props.className;
  return (
    <button
      className={className}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  return (
    <div>
      {
        [...Array(3)].map((_, j) => (
          <div key={j} className="board-row">
            {
              [...Array(3)].map((_, k) => {
                return (
                  <Square
                    key={3 * j + k}
                    value={props.squares[3 * j + k]}
                    onClick={() => props.onClick(3 * j + k)}
                    className={(props.winLine.includes(3 * j + k) ? "win" : "nowin")}
                  />
                );
              })
            }
          </div>
        ))
      }
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        cell: "",
        move: 0,
      }],
      stepNumber: 0,
      xIsNext: true,
      isReversed: false,
    };
  }

  handleClick(i) { // changes history and re-renders
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        cell: "(col " + (i % 3) + ", row " + Math.floor(i / 3) + ")",
        move: history.length,
      }]),
      stepNumber: history.length, // local history not state.history
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) { // re-renders but does not change history
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  reverseList() {
    this.setState({ isReversed: !this.state.isReversed });
  }

  render() {
    const history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const gameOver = !current.squares.includes(null);

    if (this.state.isReversed) {
      history.reverse();
    }

    const moves = history.map((step, index) => { // map(currentValue, index)
      const desc = step.move ? // (move > 0)
        "Go to move #" + step.move + " " + step.cell :
        "Go to game start";

      return (
        <li key={step.move}>
          <button className={(this.state.stepNumber === step.move) ? "boldMove" : "move"} onClick={() => this.jumpTo(step.move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else if (gameOver) {
      status = 'Game over - the result was a draw';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winLine={winner ? winner.line : []}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <div><button onClick={() => this.reverseList()}>Reverse list</button></div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      }
    }
  }
  return null;
}

export default Game;