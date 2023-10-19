
/*var peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));

var altura = parseFloat(prompt("Ingresa tu altura en metros:"));

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function tipodeimc (imc){
    if(imc<18.5){
        return "bajo_de_peso"
    }else if(imc<24.9){
        return "peso normal"
    }else if(imc<29.9){
        return"sobrepeso"
    }else{
        return"sobrepeso"
    }
}
var imc = calcularIMC(peso, altura);

var categoriaIMC = tipodeimc(imc);

alert("Tu IMC es: " + imc + "Categoría de IMC: " + categoriaIMC);*/


//var altura = parseInt(prompt("Ingresa el numero de filas  :"));


let filas = prompt("ingrese numero");
var fila =' ';
function imtriangulo(filas){
    for(let i=0; i<filas;i++){
       
        fila +=' * '
        console.log(fila);
    }
}
imtriangulo(filas);

/*var altura = prompt("Introduce la altura del triángulo:");

for (var i = 1; i <= altura; i++) {
    var linea = "*".repeat(i);
    console.log(linea);
}*/

