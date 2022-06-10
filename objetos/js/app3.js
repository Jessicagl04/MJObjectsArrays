const producto1 = {
    nombre:"Monitor de 21", // ojo es importantisimo separr con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

//asignar a variables las propiedades de un objeto

//const nombre = producto1.nombre;

//console.log(nombre)

//otra forma de hacerlo y que es relativamente nueva es con algo que se llama object destructuring...
//Destructuring significa sacar de una estructura, puede ser compleja , no lo es tanto sobretodo cuando se practica


const { precio } = producto1;

console.log(precio)

//si quieren extraer varios, simplemente separan por comas

//const { nombre,disponible,precio } = producto1;

//esto equivaldria:
/*
const nombre = productor1.nombre
const precio = productor1.precio
const disponible = productor1.disponible
*/


//ejemplo

const persona = {
    nombre:"Jessica",
    apellido:"Gargurevich",
    edad:26,
    casado:false,
    hijos:false,
    profesion:"Estudiante",
}

//HACER UN DESTRUCTURING
//LUEGO MOSTRAR POR CONSOLA LOS DATOS EN UNA FRASE CON UN TEMPLATE STRING

//Jessica Gargurevich tiene 26 años, no tiene hijos y su profesion es Estudiante

const { nombre,apellido,edad,casado,hijos,profesion } = persona;

const msg = 'Hola soy: ${Jessica} ${Gargurevich}, tengo ${26} años y mi profesion es ${estudiante}';

console.log(msg);