// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var i = 0
  for (i; i < array.length ; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.splice(array.length, 0, elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.splice(0, 0, elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var i = 0;
  var newArrayy = '';
  for (i; i < palabras.length; i++) {
    if (i === 0) {
      newArrayy = palabras[i];
    }
    else {
      newArrayy = newArrayy + ' ' + palabras[i];
    }
  }
  return newArrayy;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var i = 0;
  for (i; i < array.length; i++) {
    if (elemento === array[i]) {
      var a = 1;
    }
  }
  if (a === 1) {
    return true;
  }
  else {
    return false;
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i = 0;
  var acumulaivesuma = 0;
  for (i; i < numeros.length; i++) {
    acumulaivesuma = acumulaivesuma + numeros[i]; 
  }
  return acumulaivesuma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i = 0;
  var acumulaivesuma = 0;
  for (i; i < resultadosTest.length; i++) {
    acumulaivesuma = acumulaivesuma + resultadosTest[i]; 
  }
  var  promedio = acumulaivesuma/resultadosTest.length;
  return acumulaivesuma/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max.apply(Math, numeros);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var i = 0;
  var multiplierArguments = 1;
  for (i; i < arguments.length; i++) {
    multiplierArguments = multiplierArguments * arguments[i]; 
  }
  if (arguments.length !== 0) {
    return multiplierArguments;
  }
  else {
    return 0;
  }
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var i = 0;
  var a = arreglo.length;
  var contadorMayores = 0;
  for (i; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contadorMayores = contadorMayores + 1;
    }
  }
  return contadorMayores;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
      return "Es fin de semana";
    case 7:
      return "Es fin de semana";
    case 2:
      return "Es dia Laboral";
    case 3:
      return "Es dia Laboral";
    case 4:
      return "Es dia Laboral";
    case 5:
      return "Es dia Laboral";
    case 6:
      return "Es dia Laboral";
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (String(n).charAt(0) == 9) {
    return true;
  }
  else {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var i = 1;
  contadorDistintos = 0;
  for (i; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[i - 1]) {
      contadorDistintos = contadorDistintos + 1;
    }
  }
  if (contadorDistintos >= 1) {
    var a = false;
  }
  else {
    var a = true;
  }
  return a;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var Jan = 0;
  var March = 0;
  var Nov = 0;
  var i = 0;
  var iPrima = 0;
  var iEnero = 0;
  var iMarzo = 0;
  var iNoviembre = 0;
  var newArrayLista = [];
  for (i; i < array.length; i++) {
    var valorArray = array[i];
    switch (valorArray) {
      case "Enero":
        Jan = 1;
        var enero = "Enero";
        iEnero =  iPrima;
        iPrima = iPrima + 1;
        break;
      case "Marzo":
        March = 1;
        var marzo = "Marzo";
        iMarzo =  iPrima;
        iPrima = iPrima + 1;
        break;
      case "Noviembre":
        Nov = 1;
        var noviembre = "Noviembre";
        iNoviembre =  iPrima;
        iPrima = iPrima + 1;
        break;
      default:
        break;
          //
    }
  }
  if ((Jan + March + Nov) < 3) {
    var devuelvo = "No se encontraron los meses pedidos";
  }
  else {
    var iNuevo = 0;
    for (iNuevo; iNuevo < iPrima; iNuevo ++) {
      if (iNuevo === iEnero) {
        newArrayLista[iEnero] = enero;
      }
      else if (iNuevo === iMarzo) {
        newArrayLista[iMarzo] = marzo;
      }
      else if (iNuevo === iNoviembre) {
        newArrayLista[iNoviembre] = noviembre;
      }
    }
  var devuelvo = newArrayLista;
  }
return devuelvo;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var i = 0;
  var contadorDistintos = [];
  var indexcontadorDistintos = 0;
  for (i; i < array.length; i++) {
    if (array[i] > 100) {
      contadorDistintos [indexcontadorDistintos] = array[i];
      indexcontadorDistintos += 1; 
    }
  }
  return contadorDistintos;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 0;
  var iPrima = 0;
  var arrayPrima = [];
  for (i; i < 10; i++) {
    numero += 2;
    arrayPrima [iPrima] = numero;
    if (numero === iPrima) {
      return "Se interrumpió la ejecución";
    }
  iPrima += 1;
  }
  return arrayPrima;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i = 0;
  var iPrima = 0;
  var arrayPrima = [];
  for (i; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero += 2;
    arrayPrima [iPrima] = numero;
  iPrima += 1;
  }
  return arrayPrima;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
