export class UsuarioActualizar {

    private email: string;
    private nombre: string;
    private apellido: string;
    private nacimiento: Date;

    constructor(email: string, nombre: string, apellido: string, nacimiento: Date) {
        this.email = email;
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
    }

}
