// Crear un array con elementos
const array = [1, 2, 3, 4, 5];

// Recorrer el array utilizando un bucle for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
console.log('------------------');
// Recorrer el array utilizando el método forEach
array.forEach((element) => {
    console.log(element);
});
console.log('------------------');

// Recorrer el array utilizando el método map
const newArray = array.map((element) => {
    return element * 2;
});
console.log(newArray);
console.log('------------------');
// Recorrer el array utilizando el método for...of
for (const element of array) {
    console.log(element);
}
