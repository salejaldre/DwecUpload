class Sujeto{
    #nombre;
    #tipo;
    #residencia;
    #tiempoDescargado;
    #culpabilidad;
    #imagen;
    #comentarios;

    // Constructor de la clase
    constructor(nombre, tipo, residencia, tiempoDescargado, culpabilidad, imagen, comentarios) {
        this.#nombre = nombre;
        this.#tipo = tipo;
        this.#residencia = residencia;
        this.#tiempoDescargado = tiempoDescargado;
        this.#culpabilidad = culpabilidad;
        this.#imagen = imagen;
        this.#comentarios = comentarios;
    }

    // GETTERS Y SETTERS
    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get tipo() {
        return this.#tipo;
    }

    set tipo(nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    get residencia() {
        return this.#residencia;
    }

    set residencia(nuevaResidencia) {
        this.#residencia = nuevaResidencia;
    }

    get tiempoDescargado() {
        return this.#tiempoDescargado;
    }

    set tiempoDescargado(nuevoTiempoDescargado) {
        this.#tiempoDescargado = nuevoTiempoDescargado;
    }

    get culpabilidad() {
        return this.#culpabilidad;
    }

    set culpabilidad(nuevaCulpabilidad) {
        this.#culpabilidad = nuevaCulpabilidad;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(nuevaImagen) {
        this.#imagen = nuevaImagen;
    }

    get comentarios() {
        return this.#comentarios;
    }

    set comentarios(nuevosComentarios) {
        this.#comentarios = nuevosComentarios;
    }
}