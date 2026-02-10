/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// function addStrings(name){
//     let arr = 'Ciao ';
//     arr += name;
//     return arr;
// }


const addStrings = name => 'Ciao ' + name;

// Invoca la funzione qui e stampa il risultato in console
const result = addStrings(userName)
console.log(result);


//Risultato atteso se si passa 'Mario': // ciao Mario
