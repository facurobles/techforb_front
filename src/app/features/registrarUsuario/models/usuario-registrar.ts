export class UsuarioRegistrar {

    private email: string;
    private password: string;
    private nombre: string;
    private apellido: string;
    private nacimiento: Date;

    constructor(email: string, password: string, nombre: string, apellido: string, nacimiento: Date) {
        this.email = email;
        this.password = password;
        this.nombre = nombre
        this.apellido = apellido
        this.nacimiento = nacimiento
    }
}
