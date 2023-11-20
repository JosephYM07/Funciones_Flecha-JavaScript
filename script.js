const numeros = [1, 2, 3, 4, 5];
const multiplicar = numeros.map((x) => x * x); // [1, 4, 9, 16, 25]
console.log(multiplicar);

const nombres = ["Juan", "Pedro", "Maria", "Jose"];
const nombresConP = nombres.filter((nombre) => nombre[0] === "P"); // ["Pedro"] .
console.log(nombresConP);
