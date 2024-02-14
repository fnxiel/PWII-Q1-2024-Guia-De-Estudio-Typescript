import { IAlbum, IArtista, ICancion, IDuracion } from "../interfaces";

export class Cancion implements ICancion{
    id: number;
    titulo: string;
    artista: IArtista;
    album: IAlbum;
    duracion: IDuracion;
    generoMusical: string;
    fechaLanzamiento: Date;

    constructor(id: number, titulo: string, artista: IArtista, album: IAlbum, duracion: IDuracion, generoMusical: string, fechaLanzamiento: Date){
        this.id = id
        this.titulo = titulo
        this.artista = artista
        this.album = album
        this.duracion = duracion
        this.generoMusical = generoMusical
        this.fechaLanzamiento = fechaLanzamiento
    }
    
    reproducir(): string {
        const mensaje = `Reproduciendo la cancion ${this.titulo} del artista: ${this.artista}`
        console.log(mensaje)
        return mensaje
    }

    descargar(): boolean {
        setTimeout(() => {
            console.log(`Descargando la canción ${this.titulo} - del artista: ${this.artista}`)
        }, 3000)
        return true
    }
}