class equipo {
    constructor(id, nombre, empleados, tareas) {
        this.id = id;
        this.nombre = nombre;
        this.empleados = empleados;
        this.tareas = tareas;
    }

    get id() {
        return this.id;
    }

    get nombre() {
        return this.nombre;
    }

    get empleados() {
        return this.empleados;
    }

    getEmpleado(index) {
        return this.empleados[index];
    }

    get tareas() {
        return this.tareas;
    }

    getTarea(index) {
        return this.tareas[index];
    }

    set id(id) {
        this.id = id;
    }

    set nombre(nombre) {
        this.nombre = nombre;
    }

    set empleados(empleados) {
        this.empleados = empleados;
    }

    setEmpleado(index, empleado) {
        this.empleados[index] = empleado;
    }

    set tareas(tareas) {
        this.tareas = tareas;
    }

    setTarea(index, tarea) {
        this.tareas[index] = tarea;
    }
}
