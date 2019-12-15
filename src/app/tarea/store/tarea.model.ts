export class Tarea {

    public id: number;
    public descripcion: string;
    public completado: boolean;

    constructor(decripcionTarea: string) {
        this.id = this.generarId();
        this.completado = false;
        this.descripcion = this.primeraLetraUpperCase(decripcionTarea);
    }

    private primeraLetraUpperCase(cadena: string): string {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    private generarId() {
        return Math.floor(Math.random() * 1000);
    }
}
