export class Tarea {

    public id: number;
    public descripcion: string;
    public completado: boolean;

    constructor(decripcionTarea: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.completado = false;
        this.descripcion = decripcionTarea.charAt(0).toUpperCase() + decripcionTarea.slice(1);
    }
}
