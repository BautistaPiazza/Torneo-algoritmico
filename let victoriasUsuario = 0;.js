let victoriasUsuario = 0;
let victoriasMaquina = 0;
const victoriasParaGanar = 2; // Mejor de 3: gana quien llega primero a 2.

while (
  victoriasUsuario < victoriasParaGanar &&
  victoriasMaquina < victoriasParaGanar
) {
  const entrada = prompt("Elige: Piedra, Papel o Tijera");

  if (entrada === null) {
    break; // Permite cancelar la partida.
  }

  const jugada = entrada.trim().toLowerCase();

  if (!["piedra", "papel", "tijera"].includes(jugada)) {
    console.log("Opción no válida. Escribe piedra, papel o tijera.");
    continue;
  }

  const opciones = ["piedra", "papel", "tijera"];
  const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];

  console.log(`La máquina eligió: ${jugadaMaquina}`);

  if (jugada === jugadaMaquina) {
    console.log("Empate: nadie suma un punto.");
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    console.log(`Ganaste esta ronda. Marcador: ${victoriasUsuario} - ${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    console.log(`La máquina ganó esta ronda. Marcador: ${victoriasUsuario} - ${victoriasMaquina}`);
  }
}

const campeon =
  victoriasUsuario === victoriasMaquina
    ? "Partida sin ganador"
    : victoriasUsuario > victoriasMaquina
      ? "¡Ganaste el torneo!"
      : "La máquina ganó el torneo.";

console.log(`${campeon} Marcador final: ${victoriasUsuario} - ${victoriasMaquina}`);