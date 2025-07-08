import { useEffect, useState } from 'react';
import Board from './Board';
import './Game.css';
import { connectWebSocket, sendJugada } from './webSocket';
import { sendRetroceso } from './webSocket';

export default function Game({ sala, nombreJugador }) {
  const [salaState, setSalaState] = useState(sala);

  useEffect(() => {
    connectWebSocket(sala.codigo, (nuevaSala) => {
      console.log('Recibido:', nuevaSala);
      setSalaState(nuevaSala);
    });
  }, [sala.codigo]);

  const xIsNext = salaState.currentMove % 2 === 0;
  const soyX = salaState.jugadorX === nombreJugador;
  const soyO = salaState.jugadorO === nombreJugador;
  const esMiTurno = (xIsNext && soyX) || (!xIsNext && soyO);

  const currentSquares = salaState.historial[salaState.currentMove] || Array(9).fill(null);

  function handleClick(i) {
    if (!esMiTurno) return alert('No es tu turno');
    if (calculateWinner(currentSquares) || currentSquares[i]) return;

    const nextSquares = [...currentSquares];
    nextSquares[i] = xIsNext ? 'X' : 'O';
    sendJugada(sala.codigo, nextSquares);
  }

  function sendRetrocesoHandler(move) {
    sendRetroceso(sala.codigo, move);
  }

  const winner = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every(cell => cell !== null);
  const status = winner
    ? `Ganador: ${winner}`
    : isDraw
      ? 'Empate 😒'
      : esMiTurno
        ? 'Tu turno'
        : 'Esperando al otro jugador';

  return (
    <div className="game">
      <h2>Sala: {sala.codigo}</h2>
      <div className="status">{status}</div>

      <div className="game-content">
        <Board squares={currentSquares} onSquareClick={handleClick} />

        <div className="game-info">
          <h3>Historial</h3>
          <ol>
            {salaState.historial.map((_, move) => (
              <li key={move}>
                <button onClick={() => sendRetrocesoHandler(move)}>
                  Ir al movimiento #{move}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
