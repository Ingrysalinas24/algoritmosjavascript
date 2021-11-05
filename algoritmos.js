// Primero declaramos las variables a utilizar en el 
// algoritmo

function operacionesBasicas (){
    var A = 0;
    var B = 0;
    
    var suma = 0
    var resta = 0
    var multi = 0
    var divi = 0 
    // Solicitamos los valores y los asignamos en las variables a y b
    // a traves de la funcion prompt
    // parseFloat el termino que se le da a los decimales 
    A = parseFloat(prompt("Por favor ingrese el primer valor"));
    B = parseFloat(prompt("Por favor ingrese el segundo valor"));
    
    // Realizamos las operaciones del algoritmo
    suma = A + B;
    resta = A - B;
    multi = A * B;
    divi = A / B;
    // Imprimimos los resultados en pantalla
    alert ("El resultado de la suma es: " + suma);
    alert ("El resultado de la resta es: " + resta)
    alert ("El resultado de la multi es: " + multi)
    alert ("El resultado de la divi es: " + divi)
     
}

function promedio () {
    // el promedio se calcula al sumar la cantidad notas
    // y dividir el resultado de esta suma en la cantidad

    var nota1 = 0;
    var nota2 = 0
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio = 0;

    nota1 = parseFloat(prompt("Por favor ingrese la primera nota:"));
    nota2 = parseFloat(prompt("Por favor ingrese la segunda nota:"));
    nota3 = parseFloat(prompt("Por favor ingrese la tercera nota:"));
    nota4 = parseFloat(prompt("Por favor ingrese la cuarta nota:"));
    nota5 = parseFloat(prompt("Por favor ingrese la quinta nota:"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (promedio <= 2.9) {
        alert ("Reprobo, su promedio es de: " + promedio)
    } else {
        alert ("Aprobo, su promedio es de: " + promedio)
 
    }

    
}

function mayordeDosnumeros () {

    var A = 0;
    var B = 0;

    A = parseFloat(prompt("Por favor ingrese el primer valor"));
    B = parseFloat(prompt("Por favor ingrese el segundo valor"));

    if (A == B) {
        alert("Los valores ingresados son iguales" )
    }else if (A > B) {
        alert("El numero mayor es: " + A)
    }else {
        alert("El numero mayor es: " + B)
    }
}

function menordeTresnumeros () {

  var A = 0;
  var B = 0;
  var C = 0;

 A = parseFloat(prompt("Por favor ingrese el primer valor"));
 B = parseFloat(prompt("Por favor ingrese el segundo valor"));
 C = parseFloat(prompt("Por favor ingrese tercer valor"));

 if ((A == B) && (A == C)){
     alert("Las variables ingresadas son iguales")
 }else if((A <= B) && (A < C)){
     alert ("El numero menor es " + A)
 }
 if ((C < A) && (C < B)){
     alert ("El numero menor es " + C)
 }else if (( B <= A) && (B < C)){
     alert ("El numero menor es " + B)     
 } else {
     alert ("El numero menor es " + A)
 }
 
}

function numeroimparOpar() {

    var A = 0;

    A = parseFloat(prompt("Por favor ingrese un numero"));

    if (A%2==0) {
        alert("El valor ingresado es un numero par " + A)

    } else {
        alert("El valor ingresado es un numero impar " + A)
    }
}

function cuadradoDeunnumero(){

    var A = 0;
    var Cuadrado = 0;

    A = parseFloat(prompt("Por favor ingrese el valor"));
    Cuadrado = A**2;
      alert("El cuadrado de" + A + "es:" + Cuadrado) 
}

function determinarlosmetrosAcentimetros(){

    var A = 0;
    var B = 0;
    var Centimetros = 0;

    A= parseFloat(prompt("Por favor ingrese el valor en metros"));
    
    Centimetros = A*100;

    alert ("El resultado de" + A + "es:" + Centimetros)
}

function areadeuntriangulo() {

    var B = 0;
    var A = 0;
    var area = 0;

    B= parseFloat(prompt("Por favor ingrese la base del triangulo"));
    A= parseFloat(prompt("Por favor ingrese la altura del triangulo"));

    alert("El resultado del area " + "es: " + B*A/2)

}

function añoenelquenacio(){

    var E = 0;
    var F = 0;
    var R = 0;
    var edad = 0;

    E= parseFloat(prompt("Por favor ingrese su edad"));
    F= parseFloat(prompt("Por favor ingrese el año actual"));

   Edad = E - F;
   
    alert("El año en el que nacio fue: " + Edad )



}

function elcapitalquedeseainvertir() {

    var E = 0;
    var F = 0;
    var G = 0;
    var H = 0;

    E = parseFloat(prompt("Por favor ingrese lo que desea invertir"));
    H = (E*0.02);

    alert("La ganancia que tiene en el mes es: " + H);
 
    F = parseFloat (prompt("Por favor ingrese los meses que desea invertir"));
    G = (H*F);

    alert("La ganancia que tiene en los meses que desea invertir es: " + G)
}


function fruteriavendemanzanasa4500elkilo() {

    var M = 0
    var F = 0

    M = parseFloat(prompt("Por favor escriba los kilos que compro"))

    if (M <= 2){
        R = M*4500;
        alert ("El total que debes pagar es: " + R)
    }else if (M <= 10){
        R = (M*4500)-((15*(M*4500))/100)
        alert("El total de lo que debes pagar es: " + R)
    }else if (M>10){
        R = (M*4500)-((15*(M*4500))/100)
        alert("El total de lo que debes pagar es: " + R)
    }

}