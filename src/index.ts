import {ICancion, IListaReproduccion} from "./interfaces"
import { Cancion, ListaReproduccion, Usuario } from "./modelos"

//Interface = Modelo logico //Abstraccion.


//* Inicializacion de varaibles para la demostracion */
const cancion: ICancion = new Cancion(1,
    "Prueba", 
    {
        nombre: "",
        esBanda: false,
        cantidadIntegrantes: 0,
        estado: "Activa",
        enlace: {
            href: "",
            texto: ""
        }
    },
    {
        portada: {
            src: "",
            alt: ""
        },
        nombre: "",
        lanzamiento: 0
    },
    {
        minutos: 0,
        segundos: 0
    },
    "Country",
    new Date(1990, 1, 12)
    )


const cancion2: ICancion = new Cancion(1,
        "Prueba2", 
        {
            nombre: "",
            esBanda: false,
            cantidadIntegrantes: 0,
            estado: "Activa",
            enlace: {
                href: "",
                texto: ""
            }
        },
        {
            portada: {
                src: "",
                alt: ""
            },
            nombre: "",
            lanzamiento: 0
        },
        {
            minutos: 0,
            segundos: 0
        },
        "Country",
        new Date(1991, 1, 12)
        )



const listaReproduccion: IListaReproduccion = new ListaReproduccion(1, "De viaje", "Musica para escuchar cuando voy de viaje", "Publica")
const listaReproduccion2: IListaReproduccion = new ListaReproduccion(2, "Para dormir", "Musica para escuchar cuando duermo", "Publica")

console.log(listaReproduccion)

listaReproduccion.renombrar("Musica bailable")
listaReproduccion.renombrar("De viaje")
listaReproduccion.renombrar("Ya no se como ponerle")

console.log(cancion)
listaReproduccion.agregar(cancion)
listaReproduccion.agregar(cancion2)

console.log(listaReproduccion.buscarPorAnio(1990))


const usuario = new Usuario("Luke", "jedi1234", "Skywalker", "luke@skywalker.com")

usuario.autenticarse("Skywalker", "jedi12345")
usuario.asignarListaDeReproduccion(listaReproduccion)
usuario.asignarListaDeReproduccion(listaReproduccion2)
usuario.autenticarse("Skywalker", "jedi1234")
usuario.asignarListaDeReproduccion(listaReproduccion)
console.log(usuario.compartirPlaylist(1))




