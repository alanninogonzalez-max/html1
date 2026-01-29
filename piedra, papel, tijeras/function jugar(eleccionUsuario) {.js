function jugar(eleccionUsuario) {
    let opciones = ["piedra", "papel", "tijera"];

    
    let eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

   
    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate ";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado = "Ganaste ";
    } else {
        resultado = "Perdiste ";
    }

   
    document.getElementById("resultado").innerHTML =
        "Tú elegiste: <b>" + eleccionUsuario + "</b><br>" +
        "La computadora eligió: <b>" + eleccionComputadora + "</b><br><br>" +
        resultado;
}