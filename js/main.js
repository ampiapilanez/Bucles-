/*Ejercicio 1: Suma del 1 al 100
Escribe un programa en JavaScript que calcule la suma de todos los números enteros del 1 al 100. El resultado debe imprimirse en la consola.*/
function contador() {
    
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma = suma + i
    } 
    return suma
}
console.log(contador())

/*Ejercicio 2: Números pares del 1 al 50
Escribe un programa que imprima en consola todos los números pares comprendidos entre 1 y 50 (inclusive). Recuerda que un número es par si el resto de dividirlo por 2 es 0.*/

function numerosPares() {
    let par = 0;
    for (let i = 1; i <= 50; i++) 
        if(i % 2 === 0) {
        console.log(numerosPares())
    }
}

/*Ejercicio 3: Tabla de multiplicar
Pide al usuario un número mediante prompt(). Luego, imprime su tabla de multiplicar del 1 al 10. Ejemplo de salida si el usuario ingresa 5:*/
let numero = Number(prompt("Ingresa un número:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
};

/*Ejercicio 4: Cuenta regresiva
Escribe un programa que imprima una cuenta regresiva desde 10 hasta 1. Cada número debe mostrarse en una línea diferente en la consola.*/
function regresiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

regresiva();



/*Ejercicio 5: Factorial de un número
Pide al usuario un número mediante prompt() y calcula su factorial. El factorial de un número entero positivo n (n!) es el producto de todos los enteros positivos desde 1 hasta n.*/