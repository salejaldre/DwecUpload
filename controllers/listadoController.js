var labelTiempoDescargado;

document.addEventListener('DOMContentLoaded', function() {
    console.log("SUJETOS", localStorage.getItem("sujetos"));

    var btnAgregar = document.getElementById("btnAgregar");
    var listado = document.getElementById("listado");
    var formulario = document.getElementById("formulario");
    var nombre = document.getElementById("nombre");
    var tipo = document.getElementById("tipo");
    var residencia = document.getElementById("residencia");
    labelTiempoDescargado = document.getElementById("labelTiempo");
    var tiempoDescargado = document.getElementById("tiempoDescargado");
    var culpabilidad = document.getElementById("culpabilidad");
    var imagen = document.getElementById("imagen");
    var comentarios = document.getElementById("comentarios");

    if(localStorage.getItem("sujetos") == null){
        var sujeto = {
            nombre: "David Choak",
            tipo: "cargado",
            residencia: "Vista al Lago",
            tiempoDescargado: "2023-11-17",
            culpabilidad: "cooperador",
            imagen: "https://static.tvmaze.com/uploads/images/medium_portrait/255/637514.jpg",
            comentarios: "Esto es un comentario"
        };
        
        guardarEnLocalStorage(sujeto);
    }
});

sujetos = JSON.parse(localStorage.getItem("sujetos")) || [];

// Metodo para cargar la lista de sujetos y permitir que sea clicable 
function cargarListado() {
    var listadoContainer = document.getElementById("listado");

    // Limpiar el contenido del listado
    listadoContainer.innerHTML = "";

    // Recorrer todos los sujetos existentes y mostrar su información
    sujetos.forEach(function (sujeto) {
        var sujetoElement = document.createElement("div");
        sujetoElement.classList.add(sujeto.tipo); // Añadimos la clase de estado (cargado o vivo)
        
        var imagenElement = document.createElement("img");
        // Ajusta la lógica según la disponibilidad de imágenes
        imagenElement.src = sujeto.imagen;
        imagenElement.addEventListener("error", () => imagenElement.src="../img/Image_not_available.png");
        sujetoElement.appendChild(imagenElement);

        var nombreElement = document.createElement("span");
        nombreElement.textContent = sujeto.nombre;
        nombreElement.classList.add(sujeto.culpabilidad); // Añadimos la clase de culpabilidad
        sujetoElement.appendChild(nombreElement);

        // Permitir clicar en un sujeto para poder ver sus datos y editarlo
        sujetoElement.addEventListener("click", function(){
            listado.style.display = "none";
            formulario.style.display = "block";

            localStorage.setItem("agregando", false);
            
            mostrarDatosEnFormulario(sujeto);
        });

        listadoContainer.appendChild(sujetoElement);
    });
}

// Metodo para mostrar los datos del sujeto seleccionado en el formulario
function mostrarDatosEnFormulario(sujeto) {
    btnAgregar.disabled = true;
    nombre.disabled = true;
    nombre.value = sujeto.nombre;
    tipo.value = sujeto.tipo;
    residencia.value = sujeto.residencia;
    if(sujeto.tipo == "vivo"){
        tiempoDescargado.style.display = "none";
        labelTiempoDescargado.style.display = "none";
    } else{
        tiempoDescargado.value = sujeto.tiempoDescargado;
    }
    culpabilidad.value = sujeto.culpabilidad;
    imagen.value = sujeto.imagen;
    comentarios.value = sujeto.comentarios;
}

// Recargar el listado al cargar la pagina
window.onload = cargarListado;