/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// Preparazione

const firstNumber = Number(prompt('Inserisci il primo numero'))

const secondNumber = Number(prompt('Inserisci il secondo numero'))

// Elaborazione

if (firstNumber > secondNumber){
    console.log(`Il primo numero: ${firstNumber} è maggiore del secondo numero: ${secondNumber}`);
}
else if (secondNumber > firstNumber){
    console.log(`Il primo numero: ${firstNumber} è minore del secondo numero: ${secondNumber}`);
}
else{
    console.log('I numeri sono uguali');
}



