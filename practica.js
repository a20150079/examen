var nom = prompt("Ingresa nombre y Apellido");
alert("Bienvenido al cuestionario de las olimpiadas, "+ nom);
var total= res1 + res2 + res3 + res4;

var res1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas? \nA. Lunes 02 de octubre \nB. Viernes 29 de setiembre \nC. Jueves 28 de setiembre")
if(res1=="C"){
    res1 = 5
}else{
    res1 = 0
}

var re2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria? \nA. Celeste o Turquesa \nB. Rojo \nC. Morado")
if(res2=="A"){
    res2 = 5
}else{
    res2 = 0
}

var res3 = prompt("3. Nuevo deporte incluido este año \nA. Futsal femenino \nB. Balonmano \nC. Marcha atlética ")
if(res3=="C"){
    res3 = 5
}else{
    res3 = 0
}


