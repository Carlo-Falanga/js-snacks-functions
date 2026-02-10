/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
// function getFirstLetter(arr, letter) {
//   let startWith = [];
//   for (let i = 0; i < arr.length; i++) {
//     const name = arr[i];

//     if (name[0] === letter) {
//       startWith.push(name);
//     }
//   }
//   return startWith;
// }

const getFirstLetter = (arr, letter) => {
  let startWith = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i];

    if (name[0] === letter) {
      startWith.push(name);
    }
  }
  return startWith;
};

// Invoca la funzione qui e stampa il risultato in console
const result = getFirstLetter(names, "A");
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
