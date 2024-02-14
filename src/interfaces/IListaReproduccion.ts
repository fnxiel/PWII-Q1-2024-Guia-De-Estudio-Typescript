import { ICancion } from "."

export interface IListaReproduccion{
    id: number
    fechaCreacion: Date
    nombre: string
    canciones: ICancion[]
    descripcion: string
    visibilidad: "Publica" | "Privada"
    enlaceCompartir: string

    renombrar(nuevoNombre: string): boolean
    agregar(cancion: ICancion): void
    eliminar(id: number): void
    buscar(generoMusical: string): ICancion[]
    buscarPorAnio(anual: number): ICancion[]
}