const papelJugador = document.getElementById("papel-jugador");
const piedraJugador = document.getElementById("piedra-jugador");
const tijeraJugador = document.getElementById("tijera-jugador");

papelJugador.addEventListener("click", function () {
  playRound("papel");
});

piedraJugador.addEventListener("click", function () {
  playRound("piedra");
});

tijeraJugador.addEventListener("click", function () {
  playRound("tijera");
});

function playRound(eleccionJugador) {
  const elecciones = ["piedra", "papel", "tijera"];
  const eleccionComputadora =
    elecciones[Math.floor(Math.random() * elecciones.length)];

  mostrarElecciones(eleccionJugador, eleccionComputadora);

  const resultado = resultadoFinal(eleccionJugador, eleccionComputadora);
  muestroResultado(resultado);
  actualizoContador(resultado);

  setTimeout(function () {
    location.reload();
  }, 3000);
}

function mostrarElecciones(eleccionJugador, eleccionComputadora) {
  const jugadorElemento = document.createElement("img");
  jugadorElemento.src = `./img/${eleccionJugador}.png`;
  jugadorElemento.alt = eleccionJugador;
  jugadorElemento.classList.add("choice-image");

  const computadoraElemento = document.createElement("img");
  computadoraElemento.src = `./img/${eleccionComputadora}.png`;
  computadoraElemento.alt = eleccionComputadora;
  computadoraElemento.classList.add("choice-image");

  const container = document.createElement("div");
  container.classList.add("choices-container");

  container.appendChild(jugadorElemento);
  container.appendChild(computadoraElemento);

  document.body.appendChild(container);
}

function resultadoFinal(eleccionJugador, eleccionComputadora) {
  if (eleccionJugador === eleccionComputadora) {
    return "Empate";
  } else if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
    (eleccionJugador === "tijera" && eleccionComputadora === "papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "Perdiste :(";
  }
}

function muestroResultado(resultado) {
  const resultElemento = document.createElement("span");
  resultElemento.textContent = resultado;
  resultElemento.classList.add("result-message");
  document.body.appendChild(resultElemento);
}

function actualizoContador(resultado) {
  const contadorElemento = document.querySelector(".counter h1");
  const contador = contadorElemento.textContent.split("-");
  const puntajeJugador = parseInt(contador[0]);
  const puntajeComputadora = parseInt(contador[1]);

  if (resultado === "¡Ganaste!") {
    contadorElemento.textContent = `${puntajeJugador + 1}-${puntajeComputadora}`;
  } else if (resultado === "Perdiste :(") {
    contadorElemento.textContent = `${puntajeJugador}-${puntajeComputadora + 1}`;
  }
}
