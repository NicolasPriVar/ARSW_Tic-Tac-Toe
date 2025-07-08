import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let client = null;
let connected = false;

export function connectWebSocket(codigoSala, onMessageReceived) {
  client = new Client({
    webSocketFactory: () => new SockJS('http://localhost:8080/ws'), // ✅ usa SockJS aquí
    reconnectDelay: 5000,
    onConnect: () => {
      connected = true;
      client.subscribe(`/topic/sala/${codigoSala}`, (message) => {
        const sala = JSON.parse(message.body);
        onMessageReceived(sala);
      });
    }
  });

  client.activate();
}

export function sendJugada(codigoSala, nuevoTablero) {
  if (connected && client) {
    client.publish({
      destination: `/app/sala/${codigoSala}/jugar`,
      body: JSON.stringify(nuevoTablero)
    });
  }
}

export function disconnectWebSocket() {
  if (client && connected) {
    client.deactivate();
    connected = false;
  }
}

export function sendRetroceso(codigoSala, move) {
  if (connected && client) {
    client.publish({
      destination: `/app/sala/${codigoSala}/retroceder`,
      body: move.toString(),
    });
  }
}
