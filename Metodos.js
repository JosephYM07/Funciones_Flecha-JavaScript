// Crear un arreglo
let arr = [1, 2, 3, 4, 5];

// Método forEach para iterar sobre el arreglo
arr.forEach(function (item, index) {
  console.log(`El elemento en el índice ${index} es ${item}`);
});

// Método push para agregar un elemento al final del arreglo
arr.push(6);

// Método pop para eliminar el último elemento del arreglo
arr.pop();

// Método splice para eliminar el elemento en el índice 2
arr.splice(2, 1);

// Método map para crear un nuevo arreglo con los resultados de la llamada a una función para cada elemento del arreglo
let newArr = arr.map(function (item) {
  return item * 2;
});

console.log(arr); // Imprime el arreglo original
console.log(newArr); // Imprime el nuevo arreglo
