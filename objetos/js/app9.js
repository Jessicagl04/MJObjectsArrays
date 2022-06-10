//como unimos 2 objetos, algo que llega a ser muy comun en el desarrollo web, a veces en una base de datos (DB) obtenemos por ejm el Id de un cliente y nos gustaria unir varios clientes.

const producto1 = {
    nombre:"Monitor de 21", // ojo es importantisimo separr con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

const medida = {
    peso:"2kg",
    medida:"1 metro",
}

//la primera forma de unir objetos es con un metodo que se llama assign

const resultado = Object.assign(producto1,medida);

console.log(producto1)
console.log(medida)
console.log(resultado)