console.log("hoolaa!")

//calculadora

let firstNum  = prompt("ingrese un nro")
let secondNum = prompt("ingrese otro nro")

//Esta función realiza un suma de los parametros n1 y n2
function sumaDeNros (n1, n2) {
    return (n1 + n2)
}

let sumaTotal = sumaDeNros (firstNum, secondNum)

document.writeln (`<h2> La suma total es de : ${sumaTotal} </h2>`)