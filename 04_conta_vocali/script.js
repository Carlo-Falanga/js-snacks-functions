/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

// function vowels(str) {
//   let count = 0;
//   let arr = []
//   for (let i = 0; i < str.length; i++) {
//     const wordFind = str[i];
//     if ('aeiouAEIOU'.includes(wordFind)) {
//       count++;
//       arr.push(wordFind)

//     }

//   }
//   return count + ' ' + arr.join(", ");
// }

const vowels = str => {
  let count = 0;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const wordFind = str[i];
    if ("aeiouAEIOU".includes(wordFind)) {
      count++;
      arr.push(wordFind);
    }
  }
  return count + " " + arr.join(", ");
};

// Invoca la funzione qui e stampa il risultato in console
const result = vowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
