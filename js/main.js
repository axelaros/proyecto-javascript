let agregaralcarrito=[]
const carteleraCine=[
{
     nombre: "Jurassic park dominion",
     genero:"accion/ciencia ficcion",
     calificacion:"atp",
     duracion:"2h 27m",
     estreno:"02/06/2022",
     id:1
},
{

    nombre: "lightyear",
    genero:"aventura/infantil",
    calificacion:"atp",
    duracion:"1h 45m",
    estreno:"16/06/2022",
    id:2
},
{

    nombre: "doctor strange multiverso",
    genero:"accion/aventura",
    calificacion:"mayores de 13 años",
    duracion:"2h 06m",
    estreno:"02/06/2022",
    id:3
},
{

    nombre: "top gun maverick",
    genero:"accion/aventura",
    calificacion:"atp",
    duracion:"2h 11m",
    estreno:"26/05/2022",
    id:4
},
{

    nombre: "gemelo siniestro",
    genero:"terror/suspenso",
    calificacion:"mayores de 18 años",
    duracion:"1h 49m",
    estreno:"16/06/2022",
    id:5
},
{

    nombre: "the northman",
    genero:"aventura/accion",
    calificacion:"mayores de 16 años",
    duracion:"2h 17m",
    estreno:"21/04/2022",
    id:6
},
{

    nombre: "sonic 2",
    genero:"accion/ciencia ficcion",
    calificacion:"mayores de 13 años",
    duracion:"2h 2m",
    estreno:"07/04/2022",
    id:7
}
]
for (const nombre of carteleraCine) {
    console.log(nombre);
}
function cartelera () {
    let iniciar=confirm("bienvenido al cine, quieres ver la cartelera disponible?");
    while(iniciar) {
        let decidir=prompt("ingrese el nombre de la pelicula o salir para finalizar");
        let peliculasVistas=carteleraCine.filter(pelicula=>pelicula.nombre===decidir);
        agregaralcarrito.push(peliculasVistas)
        iniciar=confirm(" quieres seguir mirando la cartelera disponible?");
    }
    console.log(agregaralcarrito)
}
cartelera()












