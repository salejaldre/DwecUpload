document.addEventListener('DOMContentLoaded', function() {
    var btnAgregar = document.getElementById("btnAgregar");
    var nombre = document.getElementById("nombre");
    var tipo = document.getElementById("tipo");
    var residencia = document.getElementById("residencia");
    var labelTiempoDescargado = document.getElementById("labelTiempo");
    var tiempoDescargado = document.getElementById("tiempoDescargado");
    var culpabilidad = document.getElementById("culpabilidad");
    var imagen = document.getElementById("imagen");
    var comentarios = document.getElementById("comentarios");

    nombre.value = "";
    tipo.value = "";
    residencia.value = "";
    tiempoDescargado.value = "";
    culpabilidad.value = "";
    imagen.value = "";

    // Codigo que comprueba si el sujeto es cargado o no
    tipo.addEventListener("change", function(){
        if(tipo.value !== "cargado"){
            labelTiempoDescargado.style.display = "none";
            tiempoDescargado.style.display = "none";
        } else{
            labelTiempoDescargado.style.display = "block";
            tiempoDescargado.style.display = "block";
        }
    });
});

// Metodo para comprobar que todos los datos obligatorios estén rellenados
function validarFormulario() {
    // Validar campos obligatorios
    if (nombre.value === "" || tipo.value === "" || residencia.value === "" || culpabilidad.value === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Crear objeto con la información del sujeto
    var sujeto = {
        nombre: nombre.value,
        tipo: tipo.value,
        residencia: residencia.value,
        tiempoDescargado: tiempoDescargado.value,
        culpabilidad: culpabilidad.value,
        imagen: imagen.value,
        comentarios: comentarios.value
    };
    
    // Almacenar el objeto en localStorage
    guardarEnLocalStorage(sujeto);
}

// Metodo para ocultar el formulario
function cerrarFormulario(){
    listado.style.display = "block";
    formulario.style.display = "none";
}

// Metodo para añadir el nuevo sujeto al localStorage o editar los datos del sujeto existente
function guardarEnLocalStorage(sujeto) {
    // Obtener la lista actual de sujetos desde localStorage (si existe)
    var sujetosGuardados = JSON.parse(localStorage.getItem("sujetos")) || [];
    var sujetoExistente = false;

    sujetosGuardados.forEach(sujeto => {
        if(sujeto.nombre == nombre.value){
            editarSujeto(sujeto);
            sujetoExistente = true;
            return;
        }
    });

    if(sujetoExistente == false){
        // Agregar el nuevo sujeto a la lista
        sujetosGuardados.push(sujeto);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem("sujetos", JSON.stringify(sujetosGuardados));

        // Puedes agregar lógica adicional, como limpiar el formulario o redirigir a otra página
        alert("Sujeto agregado correctamente");
    }

    var listado = document.getElementById("listado");
    var formulario = document.getElementById("formulario");

    formulario.style.display = "none";
    listado.style.display = "block";
    location.reload();
    btnAgregar.disabled = false;
}

// Metodo para editar el sujeto existente
function editarSujeto(sujeto) {
    var sujetosGuardados = JSON.parse(localStorage.getItem("sujetos")) || [];

    // Obteter el indice en el array del sujeto a editar
    var indiceSujeto = sujetosGuardados.findIndex(function (item) {
        return item.nombre === sujeto.nombre;
    });

    if (indiceSujeto !== -1) {
        // Actualizar los datos del sujeto
        sujetosGuardados[indiceSujeto].nombre = nombre.value;
        sujetosGuardados[indiceSujeto].tipo = tipo.value;
        sujetosGuardados[indiceSujeto].residencia = residencia.value;
        sujetosGuardados[indiceSujeto].tiempoDescargado = tiempoDescargado.value;
        sujetosGuardados[indiceSujeto].culpabilidad = culpabilidad.value;
        sujetosGuardados[indiceSujeto].imagen = imagen.value;
        sujetosGuardados[indiceSujeto].comentarios = comentarios.value;

        // Guardar el array actualizado en localStorage
        localStorage.setItem("sujetos", JSON.stringify(sujetosGuardados));

        alert("Sujeto editado correctamente");
    } else {
        alert("No se encontró el sujeto con el nombre proporcionado.");
    }
    btnAgregar.disabled = false;
}