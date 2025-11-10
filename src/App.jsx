import { useState } from 'react';

function Square({ value, onSquareClick }) {
   <button className="square" onClick={onSquareClick}></button>
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[0]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}