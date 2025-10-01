/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// array vuoto 

const userNumber = [];

// ciclo per chiedere i numeri all'utente e inserire solo i numeri dispari

for ( let i = 0; i < 6; i++){
    const number = Number(prompt('inserisci un numero'))

    if (number % 2 !== 0){
        userNumber.push(number)
    }
}
console.log(userNumber);
