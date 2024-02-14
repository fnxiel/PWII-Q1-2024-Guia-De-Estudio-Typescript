import { IListaReproduccion, IUsuario } from "../interfaces";

export class Usuario implements IUsuario{
    nombre: string;
    password: string;
    cuenta: string;
    correo: string;
    listasDeReproduccion: IListaReproduccion[]
    usuarioAutenticado: boolean;

    constructor(nombre: string, password: string, cuenta: string, correo: string){
        this.nombre = nombre
        this.password = password
        this.cuenta = cuenta
        this.correo = correo
        this.listasDeReproduccion = []
        this.usuarioAutenticado = false
    }

    autenticarse(cuenta: string, password: string): boolean {
        this.usuarioAutenticado = (this.cuenta === cuenta && this.password === password)
        return this.usuarioAutenticado
    }

    asignarListaDeReproduccion(listaReproduccion: IListaReproduccion): boolean{
        if (!this.usuarioAutenticado){
            console.log("Debe autenticarse para utilizar esta funcion")
            return false
        } 
        const longitudActual = this.listasDeReproduccion.length 
        this.listasDeReproduccion.push(listaReproduccion)
        console.log(`Se agregó una lista de reproducción al usuario ${this.nombre}`)
        return longitudActual < this.listasDeReproduccion.length     
    }

    compartirPlaylist(id: number): string | undefined {
        if (!this.usuarioAutenticado){
            console.log("Debe autenticarse para utilizar esta funcion")
            return ""
        } 
        return this.listasDeReproduccion.find(listaReproduccion => listaReproduccion.id === id)?.enlaceCompartir
    }
    
}