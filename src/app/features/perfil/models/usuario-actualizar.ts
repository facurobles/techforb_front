export class UsuarioActualizar {

    private emailDto: string;
    private nombreDto: string;
    private apellidoDto: string;
    private nacimientoDto: Date;

    constructor(email: string, nombre: string, apellido: string, nacimiento: Date) {
        this.emailDto = email;
        this.nombreDto = nombre;
        this.apellidoDto = apellido;
        this.nacimientoDto = nacimiento;
    }

}
