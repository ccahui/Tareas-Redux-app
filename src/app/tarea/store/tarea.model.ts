export class Tarea {

    public id: number;
    public descripcion: string;
    public completado: boolean;

    constructor(decripcionTarea: string) {
        this.id = Math.random();
        this.completado = false;
        this.descripcion = this.primeraLetraUpperCase(decripcionTarea);
    }

    private primeraLetraUpperCase(cadena: string): string {
        return cadena.charAt(0) + cadena.slice(1);
    }
}
