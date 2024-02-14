import { IListaReproduccion } from "."

export interface IUsuario{
    
    nombre: string
    password: string
    cuenta: string
    correo: string
    listasDeReproduccion: IListaReproduccion[]
    usuarioAutenticado: boolean

    autenticarse(cuenta: string, password: string): boolean
    compartirPlaylist(id: number): string | undefined
    asignarListaDeReproduccion(listaReproduccion: IListaReproduccion): Boolean
    
}