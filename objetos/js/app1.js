//los objetos son una de las 2 piezas  (tipos de datos) claves en JS, porque nos permite juntas informacion

const nombreProducto = "Monitor de 21 pulgadas";
const precioProducto = 120;
const prodcutoDisponible = true;

//podemos crear mejor un objeto que agrupe toda esta informacion en una sola variable
// como se crea un objeto 

const producto2 = {
    //esto es lo que se conoce como literal de objeto (object literal)
}

// luego en las llaves colocamos las propiedades o las llaves

/*
const producto3 = {
    nombre://esto es lo que se conoce como llave
}
*/

//despues de la llave debe ir el valor

const producto = {
    nombre:"Monito de 21 pulgadas" //nota: como en lugar del signo igual se utilizan :, esta sintaxis es propia de los objetos y representa el valor que tendra la propiedas o llave del objeto, a la pareja muchas veces se le llama....llave:valor
}

//si quiero agregar mas propiedades simplemente las separo con comas

const producto1 = {
    nombre:"Monitor de 21", // ojo es importantisimo separr con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(producto1)