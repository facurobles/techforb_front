export class PlantaDtoModel {

    private paisDto: string;
    private nombreDto: string;
    private alertasMediasDto: number;
    private lecturasDto: number;
    private alertasRojasDto: number;
    private sensoresDeshabilitadosDto: number

    constructor(paisDto: string, nombreDto: string, alertasMediasDto: number, lecturasDto: number, alertasRojasDto: number, sensoresDeshabilitadosDto: number){
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

    public getAlertasMediasDto():number{
        return this.alertasMediasDto
    }

    public setAlertasMediasDto(alertasMediasDto: number){
        this.alertasMediasDto = alertasMediasDto
    }

    public getLecturasDto():number{
        return this.lecturasDto
    }

    public setLecturasDto(lecturasDto: number){
        this.lecturasDto = lecturasDto
    }

    public getAlertasRojasDto():number{
        return this.alertasRojasDto
    }

    public setAlertasRojasDto(alertasRojasDto: number){
        this.alertasRojasDto = alertasRojasDto
    }

    public getSensoresDeshabilitadosDto():number{
        return this.sensoresDeshabilitadosDto
    }

    public setSensoresDeshabilitadosDto(sensoresDeshabilitadosDto: number){
        this.sensoresDeshabilitadosDto = sensoresDeshabilitadosDto
    }
}
