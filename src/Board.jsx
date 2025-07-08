import Square from './Square';

export default function Board({ squares, onSquareClick }) {
  return (
    <>
      <div className="board-row">
        {squares.slice(0, 3).map((val, i) => <Square key={i} value={val} onClick={() => onSquareClick(i)} />)}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((val, i) => <Square key={i + 3} value={val} onClick={() => onSquareClick(i + 3)} />)}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((val, i) => <Square key={i + 6} value={val} onClick={() => onSquareClick(i + 6)} />)}
      </div>
    </>
  );
}