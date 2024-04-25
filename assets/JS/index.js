console.log("hoolaa!")

//calculadora

let firstNum  = Number(prompt("ingrese un nro"))
let secondNum = Number(prompt("ingrese otro nro"))

//Esta función realiza un suma de los parametros n1 y n2
function sumaDeNros (n1, n2) {
    return n1 + n2
}

let sumaTotal = sumaDeNros (firstNum, secondNum)

//document.write (`<h2> La suma total es de : ${sumaTotal} </h2>`)

//otra forma:

const restaDeNros = function (n1,n2) {
    return n1 - n2
}
let restaTotal = restaDeNros (firstNum, secondNum)

const multiplNros =(n1,n2) => n1*n2

let multipl_tot = multiplNros (firstNum, secondNum)

const divNros =(n1,n2) => n1/n2

let div_tot = divNros (firstNum, secondNum)
//document.write (`<h2> La resta total es de : ${restaDeNros (firstNum, secondNum)} </h2>`)

//funcion arrow

/* fn - pageWriter
 *  Función para imprimir texto en pantalla.
 * @param {string} operacionImprimir - La operación que se realizó.
 * @param {number} valor - El valor a imprimir.
 * @return {void}
 */



const pageWriter = (operacion_print, valor) => {
    let texto_imprimir = `<h2> La ${operacion_print} total es de : ${valor} </h2>`
    document.write (texto_imprimir)
    return null
}

// pageWriter("suma", sumaTotal)
// pageWriter("resta", restaTotal)
// pageWriter("multiplicación", multipl_tot)
// pageWriter("división", div_tot)

//Creando una calculadora:

const imprimirCalculo = pageWriter 

function  realizarCalculo ( fnCalculo , n1, n2) {
    return fnCalculo (n1, n2)
}
function tomarNro () {
    let number = prompt("ingrese numero de operacion")
    return Number(number)
}

function pedirOperacion() {
    let operacion = prompt( 
        `
        1- SUMA
        2- RESTA
        3- MULTIPLICACION
        4- DIVISION 
        `
    )
    return operacion
}



function main () {
    document.write ( 
        `
        <h2>Vamos a hacer una calculadora manual! 🕘</h2>
   
        <p>
        Deberas ingresar las opciones de 
        <li>1 - suma</li>
        <li>2 - resta</li>
        <li>3 - multiplcacion</li>
        <li>4 - division</li>
        
    </p>
    `
    )


    //PAsos para la calcu:

    let operacion = pedirOperacion()
    let n1= tomarNro ()
    let n2= tomarNro ()

    let operacion_matematica
    let nombre_operacion 

    if (operacion ==1) {
        operacion_matematica =sumaDeNros
        nombre_operacion = "suma"
        
    }
    else if (operacion ==2) {
        operacion_matematica =restaDeNros
        nombre_operacion = "resta"

    }

    else if (operacion ==3){
    operacion_matematica =multiplNros
    nombre_operacion = "multiplicacion"
    }
    else if (operacion ==4){
    operacion_matematica =divNros
    nombre_operacion = "división"
    }
    else {
        operacion_matematica = (n1,n2) => null
        nombre_operacion = "no existe"
    }

    let resultado = realizarCalculo (operacion_matematica, n1, n2)
    imprimirCalculo(nombre_operacion, resultado)

}
   

main()