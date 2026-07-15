function generarTablas() {

    let contenedor = document.getElementById("contenedor");
    let contenido = "";

    let tabla = parseInt(document.getElementById("txtTabla").value);

    contenido += "<h1>Tabla del " + tabla + "</h1>";

    for (let i = 1; i <= 10; i++) {
        contenido += "<div class='fila'>" + tabla + " × " + i + " = " + (tabla * i) + "</div>";
    }

    contenedor.innerHTML = contenido;
}