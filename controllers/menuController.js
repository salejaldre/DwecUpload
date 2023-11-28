document.addEventListener('DOMContentLoaded', function() {
    var nombre = document.getElementById("nombre");
    var tipo = document.getElementById("tipo");
    var residencia = document.getElementById("residencia");
    var tiempoDescargado = document.getElementById("tiempoDescargado");
    var culpabilidad = document.getElementById("culpabilidad");
    var imagenUno = document.getElementById("imagen");
    var comentarios = document.getElementById("comentarios");

    var btnAgregar = document.getElementById("btnAgregar");
    var btnDesaparecer = document.getElementById("btnDesaparecer");
    var listado = document.getElementById("listado");
    var imagen = document.getElementById("imagenOcultar");
    var formulario = document.getElementById("formulario");

    btnAgregar.addEventListener("click", mostrarFormulario);
    btnDesaparecer.addEventListener("click", desaparecerMostrarInfo);

    // Metodo para ir cambiando entre la vista del formulario y el listado
    function mostrarFormulario() {
        localStorage.setItem("agregando", true);
        if(imagen.style.display === "block"){
            imagen.style.display = "none";
            formulario.style.display = "block";
        }
        listado.style.display = "none";
        formulario.style.display = "block";
        nombre.disabled = false;
    }

    // Metodo para ir cambiando entre la vista del formulario, el listado y la imagen
    function desaparecerMostrarInfo() {
        if (listado.style.display === "none") {
            listado.style.display = "block";
            formulario.style.display = "none";
            imagen.style.display = "none";

            nombre.value = "";
            tipo.value = "";
            residencia.value = "";
            tiempoDescargado.value = "";
            culpabilidad.value = "";
            imagenUno.value = "";
            comentarios.value = "";
        } else{
            listado.style.display = "none";
            imagen.style.display = "block";
        }
        btnAgregar.disabled = false;
    }
});