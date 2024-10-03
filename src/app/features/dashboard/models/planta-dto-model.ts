export class PlantaDtoModel {

    private paisDto: string;
    private nombreDto: string;
    private alertasMediasDto: Number;
    private lecturasDto: Number;
    private alertasRojasDto: Number;
    private sensoresDeshabilitadosDto: Number

    constructor(paisDto: string, nombreDto: string, alertasMediasDto: Number, lecturasDto: Number, alertasRojasDto: Number, sensoresDeshabilitadosDto: Number){
        this.paisDto = paisDto;
        this.nombreDto = nombreDto;
        this.alertasMediasDto = alertasMediasDto;
        this.lecturasDto = lecturasDto;
        this.alertasRojasDto = alertasRojasDto;
        this.sensoresDeshabilitadosDto = sensoresDeshabilitadosDto;
    }

    public getPaisDto():string{
        return this.paisDto
    }

    public setPaisDto(paisDto: string){
        this.paisDto = paisDto
    }

    public getNombreDto():string{
        return this.nombreDto
    }

    public setNombreDto(nombreDto: string){
        this.nombreDto = nombreDto
    }

    public getAlertasMediasDto():Number{
        return this.alertasMediasDto
    }

    public setAlertasMediasDto(alertasMediasDto: Number){
        this.alertasMediasDto = alertasMediasDto
    }

    public getLecturasDto():Number{
        return this.lecturasDto
    }

    public setLecturasDto(lecturasDto: Number){
        this.lecturasDto = lecturasDto
    }

    public getAlertasRojasDto():Number{
        return this.alertasRojasDto
    }

    public setAlertasRojasDto(alertasRojasDto: Number){
        this.alertasRojasDto = alertasRojasDto
    }

    public getSensoresDeshabilitadosDto():Number{
        return this.sensoresDeshabilitadosDto
    }

    public setSensoresDeshabilitadosDto(sensoresDeshabilitadosDto: Number){
        this.sensoresDeshabilitadosDto = sensoresDeshabilitadosDto
    }
}
