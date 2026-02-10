/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

// function getName(nameGreeting) {
//   let hour = new Date().getHours();
//   let message;

//   if (hour <= 13) {
//     message = `Buongiorno ${nameGreeting}`;
//   } else if (hour <= 17) {
//     message = `Buon pomeriggio ${nameGreeting}`;
//   } else {
//     message = `Buonasera ${nameGreeting}`;
//   }

//   return message;
// }

const getName = (nameGreeting) => {
  let hour = new Date().getHours();  
  let message;

  if (hour <= 13) {
    message = `Buongiorno ${nameGreeting}`;
  } else if (hour <= 17) {
    message = `Buon pomeriggio ${nameGreeting}`;
  } else {
    message = `Buonasera ${nameGreeting}`;
  }

  return message;
};

// Invoca la funzione qui e stampa il risultato in console
const result = getName(name);
console.log(result);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
