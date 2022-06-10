//hemos visto que en las variables creadas con const una vez definidas no se puede reasignar valor 
//pero en los objetos hay un comportamiento diferente, porque si puedo reasignar valores a las llaves


const producto1 = {
    nombre:"Monitor de 21", // ojo es importantisimo separr con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(producto1)

producto1.disponible = false