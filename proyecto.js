//EJ1: //(funcion para calcular el promedio)
/*function CalcularPromedio(){   

let nota1 = Number(prompt("Ingrese la nota del primer trimestre:"));   //el usuario ingresa las notas
let nota2 = Number(prompt("Ingrese la nota del segundo trimestre:"));
let nota3 = Number(prompt("Ingrese la nota del tercer trimestre:"));


if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {            // //valida los numeros ingresados 
    console.log("Por favor, ingrese valores numéricos válidos para las notas.");
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;

alert("El promedio de las notas es: " + promedio.toFixed(2));  //Da las notas del promedio
}

}
console.log(CalcularPromedio())*/















//EJ2:

/*function calcularSalarioSemanal(valorHora, horasPorDia) {
    // Definir el número de días hábiles y el número de horas trabajadas los sábados
    const diasLaborales = 5; // Lunes a Viernes
    const horasSabado = horasPorDia / 2;

    // Calcular el salario por día laboral
    const salarioPorDia = valorHora * horasPorDia;

    // Calcular el salario total en días laborales y sábados
    const salarioTotalSemanal = (salarioPorDia * diasLaborales) + (valorHora * horasSabado);

    return salarioTotalSemanal;
}
const valorHora = Number(prompt("Ingrese el valor monetario de una hora de trabajo:"));
const horasPorDia = Number(prompt("Ingrese la cantidad de horas trabajadas por día:"));
const salarioSemanal = calcularSalarioSemanal(valorHora, horasPorDia);

console.log("el valor del salario semanal es: $" + salarioSemanal.toFixed(2));*/





//EJ3:

















//EJ4:

/*function CalcularElTerreno(){

    const ancho = parseFloat(prompt("Ingrese el ancho del terreno en metros:"));
    const largo = parseFloat(prompt("Ingrese el largo del terreno en metros:"));
    const valorMetroCuadrado = parseFloat(prompt("Ingrese el valor del metro cuadrado de tierra en $:"));
 
 
    // Validar que los valores ingresados sean números positivos
 if (isNaN(ancho) || isNaN(largo) || isNaN(valorMetroCuadrado) || ancho <= 0 || largo <= 0 || valorMetroCuadrado <= 0) {
    alert("Por favor, ingrese valores válidos y positivos.");
    return;
}
 // Calcular el área del terreno
 const area = ancho * largo;

 // Calcular el valor total del terreno
 const valorTotal = area * valorMetroCuadrado;

 // Calcular el perímetro del terreno
 const perimetro = 2 * (ancho + largo);

 // Calculamos la cantidad de metros de alambre necesarios para cercar a diferentes alturas
 const altura1 = 1; // Altura en metros
 const altura2 = 2; // Altura en metros
 const altura3 = 3; // Altura en metros

 const metrosAlambreAltura1 = perimetro * altura1;
 const metrosAlambreAltura2 = perimetro * altura2;
 const metrosAlambreAltura3 = perimetro * altura3;

 // Mostrar los resultados
 alert("Valor total del terreno: $" + valorTotal.toFixed(2));
 alert("Metros de alambre para altura de 1 metro: " + metrosAlambreAltura1.toFixed(2) + " metros");
 alert("Metros de alambre para altura de 2 metros: " + metrosAlambreAltura2.toFixed(2) + " metros");
 alert("Metros de alambre para altura de 3 metros: " + metrosAlambreAltura3.toFixed(2) + " metros");
}
// Ejecutar la función
CalcularElTerreno();*/
















//EJ5:

// Función para solicitar un número natural
/*function obtenerNumeroNatural(mensaje) {
    let numero;
    do {
        numero = parseInt(prompt(mensaje));
    } while (isNaN(numero) || numero < 0);
    return numero;
}

// Solicitar dos números naturales
let numero1 = obtenerNumeroNatural("Ingrese el primer número natural:");
let numero2 = obtenerNumeroNatural("Ingrese el segundo número natural:");

// Solicitar la operación a realizar
let operacion = prompt("Ingrese la operación a realizar: \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir");

// Realizar la operación según la opción seleccionada (suma,resta,multiplicacion, y division.)
let resultado;
switch (operacion) {
    case '1':
        resultado = numero1 + numero2;
        alert("La suma de " + numero1 + " y " + numero2 + " es " + resultado);
        break;
    case '2':
        resultado = numero1 - numero2;
        alert("La resta de " + numero1 + " y " + numero2 + " es " + resultado);
        break;
    case '3':
        resultado = numero1 * numero2;
        alert("La multiplicación de " + numero1 + " y " + numero2 + " es " + resultado);
        break;
    case '4':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert("La división de " + numero1 + " entre " + numero2 + " es " + resultado);
        } else {
            alert("No se puede dividir entre cero.");
        }
        break;
    default:
        alert("Operación no válida. Por favor, elija una opción entre 1 y 4.");
}*/














//EJ6:
// Solicitar un número entero al usuario
/*let numero = parseInt(prompt("Ingrese un número entero:"));

// Verifica si el número es válido
if (!isNaN(numero)) {
    // Determinar si el número es par o impar
    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " es un número impar.");
    }
} else {
    alert("Por favor, ingrese un número entero válido.");
}*/










//EJ7:
/*
// Solicitar dos números enteros al usuario
let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));

// Verificar cuál número es mayor
if (numero1 > numero2) {
    alert("El número mayor es " + numero1);
} else if (numero2 > numero1) {
    alert("El número mayor es " + numero2);
} else {
    alert("Ambos números son iguales.");
}*/















//EJ8:

// Solicitar tres números enteros al usuario
/*let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));
let numero3 = parseInt(prompt("Ingrese el tercer número entero:"));

// Determinar cuál número es el mayor
let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

// Mostrar el número mayor y su valor
alert("El número mayor es " + mayor);*/


















//EJ9: 


// Función para determinar si el niño puede entrar al juego
/*function puedeEntrar(edad, altura) {
    return edad >= 7 && altura > 1.50;
}

// Datos para evaluar
const datos = [
    { nombre: "Juan", edad: 5, altura: 1.45 },
    { nombre: "María", edad: 7, altura: 1.23 },
    { nombre: "Luis", edad: 8, altura: 1.51 },
    { nombre: "Ana", edad: 9, altura: 1.39 }
];

// Evaluar y mostrar resultados
datos.forEach(dato => {
    let entra = puedeEntrar(dato.edad, dato.altura) ? "V" : "F";
    alert(`${dato.nombre} Edad: ${dato.edad} Altura: ${dato.altura} ¿Entra al juego? ${entra}`);
});*/















//EJ10:


// Mostrar números del 1 al 5
/*for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Mostrar números del 5 al 1 en orden inverso
for (let i = 5; i >= 1; i--) {
    console.log(i);
}*/










//EJ11:

// Solicitar al usuario que ingrese un número entero
/*const n = parseInt(prompt("Introduce un número entero:", ""), 10);

// Verificar si la entrada es un número válido
if (isNaN(n)) {
    console.log("Por favor, introduce un número entero válido.");
} else {
    // Mostrar los primeros 10 múltiplos de n
    console.log(`Los primeros 10 múltiplos de ${n} son:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${n} = ${i * n}`);
    }
}*/







//EJ12

// Solicitar al usuario que ingrese dos números enteros
/*const num1 = parseInt(prompt("Introduce el primer número entero (num1):"), 10);
const num2 = parseInt(prompt("Introduce el segundo número entero (num2):"), 10);

// Verificar si la entrada es válida y si num1 es menor o igual a num2
if (isNaN(num1) || isNaN(num2) || num1 > num2) {
    console.log("Por favor, introduce dos números enteros válidos donde el primero es menor o igual al segundo.");
} else {
    // Mostrar la secuencia incluyendo los límites
    console.log(`Secuencia de números del ${num1} al ${num2} (incluyendo ambos):`);
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }

    // Mostrar la secuencia excluyendo los límites
    console.log(`Secuencia de números del ${num1} al ${num2} (excluyendo ambos):`);
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}*/











//EJ13:



// Inicializar variables
/*let totalEdades = 0;
let contadorImparesMayoresDe18 = 0;

// Función para ingresar una edad
function ingresarEdad(indice) {
    return parseInt(prompt(`Introduce la edad ${indice}:`), 10);
}

// Ingresar 5 edades y calcular el total
for (let i = 1; i <= 5; i++) {
    let edad = ingresarEdad(i);

    // Validar que la entrada sea un número
    if (isNaN(edad) || edad < 0) {
        console.log("Por favor, introduce una edad válida (un número entero no negativo).");
        i--; // Decrementar el contador para volver a pedir la entrada
        continue;
    }

    // Sumar la edad al total
    totalEdades += edad;

    // Verificar si la edad es impar y mayor de 18
    if (edad > 18 && edad % 2 !== 0) {
        contadorImparesMayoresDe18++;
    }
}

// Calcular el promedio de las edades
const promedioEdades = totalEdades / 5;

// Mostrar los resultados
console.log(`El promedio de las edades es: ${promedioEdades.toFixed(2)}`);
console.log(`Cantidad de edades impares mayores a 18: ${contadorImparesMayoresDe18}`);*/




















//EJ14:




// Función para realizar la operación matemática
/*function realizarOperacion(op, num1, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: División por cero no permitida.';
            }
            return num1 / num2;
        default:
            return 'Operación no válida.';
    }
}

// Función principal para manejar la entrada y salida del usuario
function calcular() {
    while (true) {
        // Solicitar la operación al usuario
        const operacion = prompt("Introduce la operación (+, -, *, /) o 'F' para finalizar:");

        // Si el usuario desea finalizar, salimos del bucle
        if (operacion === 'F') {
            console.log("No se desean calcular más operaciones. Fin del programa.");
            break;
        }

        // Validar que la operación sea una válida
        if (!['+', '-', '*', '/'].includes(operacion)) {
            console.log("Operación no válida. Por favor, ingresa una operación válida.");
            continue;
        }

        // Solicitar los dos números al usuario
        const num1 = parseInt(prompt("Introduce el primer número entero:"), 10);
        const num2 = parseInt(prompt("Introduce el segundo número entero:"), 10);

        // Verificar si las entradas son números válidos
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Por favor, introduce números enteros válidos.");
            continue;
        }

        // Realizar la operación y mostrar el resultado
        const resultado = realizarOperacion(operacion, num1, num2);
        console.log(`Resultado: ${resultado}`);
    }
}

// Ejecutar la función principal
calcular();*/





















//EJ15:


// Versión con ciclo while
/*function validarOpcionWhile() {
    let opcion;
    while (true) {
        opcion = prompt("¿Deseas continuar? [S/N]").toUpperCase();
        
        if (opcion === 'S' || opcion === 'N') {
            console.log(`Opción seleccionada: ${opcion}`);
            break; // Salir del bucle si la opción es válida
        } else {
            console.log("Entrada no válida. Por favor, ingresa 'S' para sí o 'N' para no.");
        }
    }
}

// Ejecutar la función
validarOpcionWhile();*/









// Versión con ciclo do-while
/*function validarOpcionDoWhile() {
    let opcion;
    do {
        opcion = prompt("¿Deseas continuar? [S/N]").toUpperCase();
        
        if (opcion === 'S' || opcion === 'N') {
            console.log(`Opción seleccionada: ${opcion}`);
            break; // Salir del bucle si la opción es válida
        } else {
            console.log("Entrada no válida. Por favor, ingresa 'S' para sí o 'N' para no.");
        }
    } while (true);
}

// Ejecutar la función
validarOpcionDoWhile();*/













//EJ16:



/*function encontrarMinMax() {
    let numero;
    let maximo = -Infinity; // Inicializar con el menor valor posible
    let minimo = Infinity;  // Inicializar con el mayor valor posible

    // Bucle para ingresar números hasta que se introduzca 0
    while (true) {
        numero = parseInt(prompt("Introduce un número (0 para finalizar):"), 10);
        
        // Verificar si la entrada es un número válido
        if (isNaN(numero)) {
            console.log("Por favor, introduce un número entero válido.");
            continue;
        }

        // Salir del bucle si el número es 0
        if (numero === 0) {
            break;
        }

        // Actualizar el máximo y el mínimo
        if (numero > maximo) {
            maximo = numero;
        }

        if (numero < minimo) {
            minimo = numero;
        }
    }

    // Verificar si se ingresaron números distintos de 0
    if (maximo === -Infinity || minimo === Infinity) {
        console.log("No se han ingresado números válidos.");
    } else {
        console.log(`Número máximo: ${maximo}`);
        console.log(`Número mínimo: ${minimo}`);
    }
}

// Ejecutar la función
encontrarMinMax();*/














//EJ17:




/*function encontrarPersonaMasJoven() {
    let nombre;
    let edad;
    let nombreMasJoven = '';
    let edadMasJoven = Infinity; // Inicializar con el mayor valor posible

    // Bucle para ingresar nombre y edad hasta que se ingrese un asterisco
    while (true) {
        nombre = prompt("Introduce el nombre de la persona (introduce '*' para finalizar):");
        
        // Salir del bucle si el nombre es un asterisco
        if (nombre === '*') {
            break;
        }

        // Solicitar la edad de la persona
        edad = parseInt(prompt("Introduce la edad de la persona:"), 10);

        // Verificar si la entrada de edad es válida
        if (isNaN(edad) || edad < 0) {
            console.log("Por favor, introduce una edad válida (un número entero no negativo).");
            continue;
        }

        // Actualizar el nombre y edad de la persona más joven
        if (edad < edadMasJoven) {
            edadMasJoven = edad;
            nombreMasJoven = nombre;
        }
    }

    // Mostrar el nombre de la persona más joven
    if (nombreMasJoven === '') {
        console.log("No se han ingresado personas.");
    } else {
        console.log(`La persona más joven es: ${nombreMasJoven}`);
    }
}

// Ejecutar la función
encontrarPersonaMasJoven();*/











//EJ18:


// Credenciales predefinidas
/*const usuarioValido = "admin";
const contrasenaValida = "123456";

// Función para validar credenciales
function validarCredenciales(usuario, contrasena) {
    return usuario === usuarioValido && contrasena === contrasenaValida;
}

// Función principal para controlar el acceso
function controlarAcceso() {
    let intentos = 0;
    const maxIntentos = 3;
    let accesoConcedido = false;

    while (intentos < maxIntentos && !accesoConcedido) {
        // Solicitar nombre de usuario y contraseña
        let usuario = prompt("Ingrese el nombre de usuario:");
        let contrasena = prompt("Ingrese la contraseña:");

        // Validar credenciales
        if (validarCredenciales(usuario, contrasena)) {
            accesoConcedido = true;
            alert("Acceso concedido");
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert("Credenciales incorrectas. Intento " + intentos + " de " + maxIntentos);
            }
        }
    }

    if (!accesoConcedido) {
        alert("Se ha bloqueado la cuenta");
    }
}

// Llamar a la función para iniciar el proceso de control de acceso
controlarAcceso();*/
















//EJERCICIO FINAL:








// Función para calcular el puntaje basado en la distancia
function calcularPuntaje(distancia) {
    if (distancia === 0) {
        return 500;
    } else if (distancia <= 10) {
        return 250;
    } else if (distancia >= 11 && distancia <= 50) {
        return 100;
    } else {
        return 0;
    }
}

// Función principal del juego
function tiroAlBlanco() {
    let numJugadores;
    do {
        numJugadores = parseInt(prompt("Ingrese la cantidad de jugadores (mayor o igual a 2):"));
    } while (isNaN(numJugadores) || numJugadores < 2);

    let jugadores = [];
    let totalTiros = 0;

    for (let i = 0; i < numJugadores; i++) {
        let nombre = prompt("Ingrese el nombre del jugador " + (i + 1) + ":");
        let puntajeTotal = 0;
        let tirosJugador = 0;

        for (let j = 1; j <= 3; j++) {
            let distancia;
            do {
                distancia = parseInt(prompt("Ingrese la distancia del tiro " + j + " para " + nombre + " (número mayor o igual a cero):"));
            } while (isNaN(distancia) || distancia < 0);

            let puntaje = calcularPuntaje(distancia);
            puntajeTotal += puntaje;
            tirosJugador++;
            totalTiros++;
        }

        jugadores.push({ nombre, puntajeTotal });
    }

    // Determinar el ganador
    let ganador = jugadores.reduce((max, jugador) => jugador.puntajeTotal > max.puntajeTotal ? jugador : max);

    // Mostrar resultados
    alert("Ganador: " + ganador.nombre + " con un puntaje de " + ganador.puntajeTotal);
    alert("Cantidad total de tiros al centro: " + totalTiros);
}

// Ejecutar el juego
tiroAlBlanco();

