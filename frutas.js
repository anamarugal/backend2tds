//Lista Ordenada de Valores - ARRAY
const frutas = ["Maçã" , "Banana" , "Uva" , "Manga"];
//Indice =         0         1        2        3

console.log(frutas[0]);
console.log(frutas[3]);

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Cereja");
frutas.unshift("Abacate");
console.log(frutas);

console.log(frutas.length); //Faz a contagem dos elementos dentro do array

frutas[4] = "Laranja";  
frutas.unshift("Abacaxi");
console.log(frutas);   // Laranja no lugar da Manga