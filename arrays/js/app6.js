//como adicionar elementos con sintaxis moderna "MUCHO MEJOR"
//CON EL SPREAD OPERATOR ...

const miCarrito = [];


const producto1 = {
    nombre:"Monitor de 21",
    precio:120,
    disponible:true, 
}
const producto2 = {
    nombre:"parlantes BT",
    precio:200,
    disponible:true,
}
const producto3 = {
    nombre:"Teclado WL",
    precio:50,
    disponible:true,
}

//siempre se trabaja con una variable auxiliar 

let resultado =[ ...miCarrito,producto1]
resultado = [ ...resultado,producto2]

//si lo quiero al principio primero va el elemento y despues la copia

resultado = [producto3, ...resultado]

console.log(resultado)

//sintaxis declarativa o imperativa 