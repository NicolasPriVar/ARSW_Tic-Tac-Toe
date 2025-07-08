# 🎮 Juego de Tres en Raya (Tic-Tac-Toe) con React

![image](https://github.com/user-attachments/assets/d8a681bc-c405-4304-a01d-00f04e967836)


Un clásico juego implementado con React que combina funcionalidad completa con un diseño moderno y atractivo.

## ✨ Características Destacadas

- **Sistema de turnos** alternantes entre jugadores X y O
- **Detección inteligente** de victorias y empates
- **Máquina del tiempo** para revisar toda la partida
- **Interfaz pulida** con animaciones sutiles
- **Totalmente responsive** para cualquier dispositivo

## 🏗️ Arquitectura del Proyecto

### `Square` (Casilla)
Componente básico que representa cada celda interactiva del tablero.

### `Board` (Tablero)
Gestiona la lógica del juego y renderiza la cuadrícula 3x3.

### `Game` (Juego)
Coordina el estado global y el historial de movimientos.

## 💡 Explicación de Componentes

### 📁 index.js
Archivo principal que arranca la aplicación.

- **Importa** el componente `App` desde `./App`.
- Renderiza el componente principal (`<App />`) en el `<div id="root">`.
- Usa `ReactDOM.createRoot` y `React.StrictMode`.

### 🎮 App.js (realmente llamado `Game`)
Componente principal del juego.

#### 🔧 Hooks usados:
- `useState` para manejar:
  - `history`: el historial de movimientos.
  - `currentMove`: el índice del movimiento actual.

#### 🧠 Funciones:
- `handlePlay(nextSquares)`: actualiza el historial cuando un jugador hace un movimiento.
- `jumpTo(nextMove)`: permite volver a un movimiento anterior.

#### 🧩 Renderiza:
- El componente `Board`.
- Una lista de botones que permiten ir hacia atrás en los movimientos.

---

### 🧩 Board
Representa el **tablero del juego** (3x3).

#### 📦 Props:
- `xIsNext`: booleano que indica si es turno de "X".
- `squares`: estado actual de las 9 casillas.
- `onPlay`: función para notificar cambios al componente padre (`Game`).

#### 🧠 Funciones:
- `handleClick(i)`: controla qué sucede al hacer clic en una casilla.
- `calculateWinner(squares)`: determina si hay un ganador.

#### 🧩 Renderiza:
- 3 filas (`.board-row`), cada una con 3 casillas (`Square`).
- Un mensaje de estado: **ganador, empate o próximo turno**.

---

### ⬜ Square
Representa una **casilla individual** del tablero.

#### 📦 Props:
- `value`: puede ser `"X"`, `"O"` o `null`.
- `onSquareClick`: función que se ejecuta al hacer clic.

#### 🧩 Renderiza:
- Un botón con el valor actual (`X`, `O`, o vacío).

---

### 🧠 calculateWinner
Función auxiliar que detecta si alguien ha ganado.

- Recibe el arreglo de `squares` (estado del tablero).
- Verifica combinaciones ganadoras (filas, columnas, diagonales).
- Devuelve el símbolo ganador (`'X'` o `'O'`), o `null`.

---

### 🖼 public/index.html
HTML base donde se monta la app React.

- Tiene el `<div id="root"></div>` donde se renderiza toda la aplicación.
- Incluye `favicon`, `meta tags`, y referencias a archivos públicos (`manifest.json`, `logo192.png`).

---

### 🎨 App.css / index.css
Estilos CSS de la aplicación.

- Centran el contenido en pantalla.
- Estilizan botones, celdas (`.square`), filas (`.board-row`), y mensajes (`.status`).
- Añaden efectos como `hover` y colores llamativos.

---

### 📦 reportWebVitals.js
Módulo opcional generado por **Create React App**.

- Se usa para medir el rendimiento de la aplicación.
- Puedes activarlo para enviar estadísticas o logs (no obligatorio).

---

### ✅ Hooks utilizados

- `useState` → manejo de estado para historial de movimientos y turno actual.
- No se utilizan: `useEffect`, `useRef`, ni `useReducer`.

---
## 🎨 Diseño Premium

Disfruta de una experiencia visual mejorada con:

- **Efectos hover** dinámicos en celdas
- **Paleta de colores** moderna y accesible
- **Tipografía optimizada** para legibilidad
- **Transiciones fluidas** entre acciones
- **Bordes redondeados** estilo contemporáneo

## 🕹️ Cómo Jugar

1. El jugador **X** inicia la partida
2. Toca cualquier casilla vacía para marcar
3. Alterna turnos hasta completar la partida
4. Explora el **historial** para analizar jugadas

## 🛠️ Tecnologías Clave

- **React** para componentes interactivos
- **Hooks** para gestión de estado
- **CSS3** para diseño avanzado
- **Flexbox** para layouts perfectos

Proyecto educativo ideal para aprender React mientras creas un juego clásico con estilo profesional.
