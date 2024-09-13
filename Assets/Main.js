const NumRandom = (min, max) => {
    let Max = ConvertirInt(max),
    Min = ConvertirInt(min);
    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
};

const ConvertirInt = (string) => {      
    const str = string.value;
    const st = parseInt(str, 10);
    return st
}

const ActualizarPagina = () => {
    location.reload();
};

const Min = document.getElementById("Min"),
    Max = document.getElementById("Max"),
    ReglasJuego = document.getElementById("ReglasJuego"),
    NumeroRandom = document.getElementById("NumeroRandom"),
    Subir = document.getElementById("Subir");

Subir.addEventListener('click', function(event) {
    N = NumRandom(Min, Max);
    ReglasJuego.innerHTML = '';
    ReglasJuego.innerHTML = `<div id="NumeroDelJugador">
                <p>una versión del juego "Adivina el Número" donde los números son elegidos por el jugador, la dinámica es un poco diferente. Aquí, uno de los jugadores elige un número secreto, y el otro jugador tiene que adivinarlo. El juego proporciona pistas como "muy alto" o "muy bajo" en función de las conjeturas del segundo jugador, hasta que adivine el número correctamente.  Tus Posibilidades son ${Min.value} - ${Max.value}</p>
                <input type="number" placeholder="Escribe tu numero aqui" id="NumeroJugador">
                <button type="submit"  class="btn btn-outline-primary" id="ComprobarNumero">Comprobar</button>
                <button class="btn btn-outline-warning btn-lg" id="ObtenerPista">Pista</button>
            </div>
            <p id ="PistaGenerada"></p>`


    ComprobarNumero.addEventListener('click' , function(event) {

        const NumeroJugador = document.getElementById("NumeroJugador"),
        PistaGenerada = document.getElementById("PistaGenerada"),
        ComprobarNumero = document.getElementById("ComprobarNumero"),
        numerojug = ConvertirInt(NumeroJugador);

        if (numerojug === N) {
            NumeroRandom.innerHTML = `<h4>Has Ganado</h4>
            <p id="PistaG"><div id="NGenerado">${N}</div></p>`
            alert("Has Ganado");
        } else {
            NumeroRandom.innerHTML = `<h4>Has Perdido</h4>
            <p id="PistaG"><div id="NGenerado">${N}</div></p>`
            alert("Has Perdido");
        }

        ReglasJuego.innerHTML = `<div id="NumeroDelJugador">
        <p>una versión del juego "Adivina el Número" donde los números son elegidos por el jugador, la dinámica es un poco diferente. Aquí, uno de los jugadores elige un número secreto, y el otro jugador tiene que adivinarlo. El juego proporciona pistas como "muy alto" o "muy bajo" en función de las conjeturas del segundo jugador, hasta que adivine el número correctamente.</p>
        <button class="btn btn-outline-danger" onclick= "ActualizarPagina()"> Actualizar Pagina </button> 
        </div>`
    });

    ObtenerPista.addEventListener('click' , function(event) {
        const ObtenerPista = document.getElementById("ObtenerPista");
        if (N % 2 === 0) {
            PistaGenerada.innerHTML = `<p id = "PistaGenerada">El Numero es Par</p>`
        } else if (N % 2 === 1) {
            PistaGenerada.innerHTML = `<p id = "PistaGenerada">El Numero es Impar</p>`;
        } else {
            PistaGenerada.innerHTML = `<p id = "PistaGenerada">Error</p>`;
        }
    });
});



