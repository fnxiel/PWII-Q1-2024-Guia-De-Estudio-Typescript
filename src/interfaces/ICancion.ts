import { IArtista } from "./IArtista"
import { IAlbum } from "./IAlbum"
import { IDuracion } from "./IDuracion"

export interface ICancion{
    id: number
    titulo: string
    artista: IArtista
    album: IAlbum
    duracion: IDuracion
    generoMusical: string
    fechaLanzamiento: Date

    reproducir(): string
    descargar(): boolean
}