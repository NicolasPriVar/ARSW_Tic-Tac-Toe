import { useEffect, useState } from 'react';
import Game from './Game';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [sala, setSala] = useState(null);

  async function crearSala() {
    const res = await fetch('http://localhost:8080/api/salas/crear', { method: 'POST' });
    const data = await res.json();
    await unirse(data.codigo);
  }

  async function unirse(codigoSala) {
    const res = await fetch(`http://localhost:8080/api/salas/unirse?codigo=${codigoSala}&jugador=${nombre}`, {
      method: 'POST',
    });
    const data = await res.json();
    setSala(data);
    localStorage.setItem('nombre', nombre);
  }

  if (!sala) {
    return (
      <div>
        <h1>Unirse a Sala</h1>
        <input placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input placeholder="Código de sala" value={codigo} onChange={e => setCodigo(e.target.value)} />
        <button onClick={() => unirse(codigo)}>Unirse</button>
        <button onClick={crearSala}>Crear nueva sala</button>
      </div>
    );
  }

  return <Game sala={sala} nombreJugador={nombre} />;
}
