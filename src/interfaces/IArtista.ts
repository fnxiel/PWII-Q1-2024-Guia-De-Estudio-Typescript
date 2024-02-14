import { IEnlace } from "./IEnlace"
export interface IArtista{
    nombre: string
    esBanda: boolean
    cantidadIntegrantes: number
    estado: "Activa" | "Separada"
    enlace: IEnlace
}