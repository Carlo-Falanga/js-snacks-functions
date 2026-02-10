/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

// function getFirstLetter(stringNames) {
//   let firstLetter = [];

//   for (let i = 0; i < stringNames.length; i++) {
//     const name = stringNames[i];
//     firstLetter.push(name.slice(0, 1));
//   }
//   return firstLetter
// }

const getFirstLetter = stringNames => {
  let firstLetter = [];

  for (let i = 0; i < stringNames.length; i++) {
    const name = stringNames[i];
    firstLetter.push(name.slice(0, 1));
  }
  return firstLetter;
};

// Invoca la funzione qui e stampa il risultato in console
const result = getFirstLetter(names);
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
