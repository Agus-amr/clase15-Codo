console.log("hoolaa!")

//calculadora

let firstNum  = Number(prompt("ingrese un nro"))
let secondNum = Number(prompt("ingrese otro nro"))

//Esta función realiza un suma de los parametros n1 y n2
function sumaDeNros (n1, n2) {
    return n1 + n2
}

let sumaTotal = sumaDeNros (firstNum, secondNum)

document.write (`<h2> La suma total es de : ${sumaTotal} </h2>`)

//otra forma:

const restaDeNros = function (n1,n2) {
    return n1 - n2
}
restaDeNros (firstNum, secondNum)

document.write (`<h2> La resta total es de : ${restaDeNros (firstNum, secondNum)} </h2>`)