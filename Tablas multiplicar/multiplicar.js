function generarTablas() {

    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    let tabla = 4; 

    contenido += "<h1>Tabla del " + tabla + "</h1>";

    for (let i = 1; i <= 10; i++) {
        contenido += "<div class='fila'>" + tabla + " × " + i + " = " + (tabla * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}