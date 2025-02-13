/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// creazione ciclo per 10 prompt in cui inserire un numero

const userNumber = [];

for (let i = 0; i < 10; i++){
    userNumber.push(Number(prompt('inserisci un numero')));
}

for (let i = 0; i < 10; i++) {
    console.log(userNumber[i]);
}

// creazione ciclo per la somma dei numeri 

let sum = 0;

for (let i = 0; i < userNumber.length; i++) {
    sum += userNumber[i];
}

console.log(sum);

