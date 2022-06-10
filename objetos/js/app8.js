"use strict"
//existe un metodo similar a freeze que se llama Seal
//a diferencia de freeze no se puede agregar ni borrar propiedades, pero si permite modificafr existentes

const producto1 = {
    nombre:"Monitor de 21", // ojo es importantisimo separr con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

producto1.disponible = false;

console.log(producto1)