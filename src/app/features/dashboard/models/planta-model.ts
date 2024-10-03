export class PlantaModel {

    private id: Number;
    private pais: string;
    private nombre: string;
    private alertasMedias: Number;
    private lecturas: Number;
    private alertasRojas: Number;
    private sensoresDeshabilitados: Number

    constructor(id: Number, pais: string, nombre: string, alertasMedias: Number, lecturas: Number, alertasRojas: Number, sensoresDeshabilitados: Number){
        this.id = id;
        this.pais = pais;
        this.nombre = nombre;
        this.alertasMedias = alertasMedias;
        this.lecturas = lecturas;
        this.alertasRojas = alertasRojas;
        this.sensoresDeshabilitados = sensoresDeshabilitados;
    }

    public getId():Number{
        return this.id
    }

    public getPais():string{
        return this.pais
    }

    public setPais(pais: string){
        this.pais = pais
    }

    public getNombre():string{
        return this.nombre
    }

    public setNombre(nombre: string){
        this.nombre = nombre
    }

    public getAlertasMedias():Number{
        return this.alertasMedias
    }

    public setAlertasMedias(alertasMedias: Number){
        this.alertasMedias = alertasMedias
    }

    public getLecturas():Number{
        return this.lecturas
    }

    public setLecturas(lecturas: Number){
        this.lecturas = lecturas
    }

    public getAlertasRojas():Number{
        return this.alertasRojas
    }

    public setAlertasRojas(alertasRojas: Number){
        this.alertasRojas = alertasRojas
    }

    public getSensoresDeshabilitados():Number{
        return this.sensoresDeshabilitados
    }

    public setSensoresDeshabilitados(sensoresDeshabilitados: Number){
        this.sensoresDeshabilitados = sensoresDeshabilitados
    }

}
