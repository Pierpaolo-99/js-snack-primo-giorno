/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// prompt

const firstNumber = Number(prompt('Inserisci il primo numero'))

const secondNumber = Number(prompt('Inserisci il secondo numero'))

if (firstNumber > secondNumber){
    console.log(firstNumber);
}
else{
    console.log(secondNumber);
}



