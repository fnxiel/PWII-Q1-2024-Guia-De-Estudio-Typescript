import { ICancion, IListaReproduccion } from "../interfaces";

export class ListaReproduccion implements IListaReproduccion{
    id: number;
    fechaCreacion: Date;
    nombre: string;
    canciones: ICancion[];
    descripcion: string;
    visibilidad: "Publica" | "Privada";
    enlaceCompartir: string;

    constructor(id: number, nombre: string, descripcion: string, visibilidad: "Publica" | "Privada"){
        this.id = id
        this.fechaCreacion = new Date()
        this.nombre = nombre,
        this.canciones = []
        this.descripcion = descripcion
        this.visibilidad = visibilidad
        this.enlaceCompartir = `https://aplicacion.com/listas/${this.id}`
    }

    renombrar(nuevoNombre: string): boolean {
        console.log(`Se cambio el nombre de la lista de reproducción de: ${this.nombre} a ${nuevoNombre}`)
        this.nombre = nuevoNombre
        return (this.nombre === nuevoNombre)
    }
    agregar(cancion: ICancion): void {
        this.canciones.push(cancion)
        console.log(`Se agregó la canción ${cancion.titulo} a la lista de reproducción ${this.nombre}`)
    }
    eliminar(id: number): void {
        this.canciones = this.canciones.filter(cancion => cancion.id !== id)
        console.log(`Se eliminó la cancion con el id ${id}`)
    }
    buscar(generoMusical: string): ICancion[] {
        console.log(`Buscando las canciones con el género musical ${generoMusical}`)
        return this.canciones.filter(cancion => cancion.generoMusical === generoMusical)
    }
    buscarPorAnio(anual: number): ICancion[] {
        console.log(`Buscando las canciones con año de lanzamiento menor al año ${anual}`)
        return this.canciones.filter(cancion => cancion.fechaLanzamiento.getFullYear() <= anual)
    }
    
}