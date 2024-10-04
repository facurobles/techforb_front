export class PlantaModel {

    private _id: number;
    private _pais: string;
    private _nombre: string;
    private _alertasMedias: number;
    private _lecturas: number;
    private _alertasRojas: number;
    private _sensoresDeshabilitados: number
    private _codigo? :string

    constructor(id: number, pais: string, nombre: string, alertasMedias: number, lecturas: number, alertasRojas: number, sensoresDeshabilitados: number, codigo? :string){
        this._id = id;
        this._pais = pais;
        this._nombre = nombre;
        this._alertasMedias = alertasMedias;
        this._lecturas = lecturas;
        this._alertasRojas = alertasRojas;
        this._sensoresDeshabilitados = sensoresDeshabilitados;
        this._codigo = codigo;
    }

    get id():number{
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

    get alertasMedias():number{
        return this.alertasMedias
    }

    set alertasMedias(alertasMedias: number){
        this._alertasMedias = alertasMedias
    }

    get lecturas():number{
        return this.lecturas
    }

    set lecturas(lecturas: number){
        this._lecturas = lecturas
    }

    get alertasRojas():number{
        return this.alertasRojas
    }

    set alertasRojas(alertasRojas: number){
        this._alertasRojas = alertasRojas
    }

    get sensoresDeshabilitados():number{
        return this.sensoresDeshabilitados
    }

    set sensoresDeshabilitados(sensoresDeshabilitados: number){
        this._sensoresDeshabilitados = sensoresDeshabilitados
    }

    get codigo():string{
        return this.codigo
    }

    set codigo(codigo: string){
        this._codigo = codigo
    }

}
