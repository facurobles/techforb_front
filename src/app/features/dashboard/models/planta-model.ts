export class PlantaModel {

    private _id: Number;
    private _pais: string;
    private _nombre: string;
    private _alertasMedias: Number;
    private _lecturas: Number;
    private _alertasRojas: Number;
    private _sensoresDeshabilitados: Number

    constructor(id: Number, pais: string, nombre: string, alertasMedias: Number, lecturas: Number, alertasRojas: Number, sensoresDeshabilitados: Number){
        this._id = id;
        this._pais = pais;
        this._nombre = nombre;
        this._alertasMedias = alertasMedias;
        this._lecturas = lecturas;
        this._alertasRojas = alertasRojas;
        this._sensoresDeshabilitados = sensoresDeshabilitados;
    }

    get id():Number{
        return this.id
    }

    get pais():string{
        return this.pais
    }

    set pais(pais: string){
        this._pais = pais
    }

    get nombre():string{
        return this.nombre
    }

    set nombre(nombre: string){
        this._nombre = nombre
    }

    get alertasMedias():Number{
        return this.alertasMedias
    }

    set alertasMedias(alertasMedias: Number){
        this._alertasMedias = alertasMedias
    }

    get lecturas():Number{
        return this.lecturas
    }

    set lecturas(lecturas: Number){
        this._lecturas = lecturas
    }

    get alertasRojas():Number{
        return this.alertasRojas
    }

    set alertasRojas(alertasRojas: Number){
        this._alertasRojas = alertasRojas
    }

    get sensoresDeshabilitados():Number{
        return this.sensoresDeshabilitados
    }

    set sensoresDeshabilitados(sensoresDeshabilitados: Number){
        this._sensoresDeshabilitados = sensoresDeshabilitados
    }

}
