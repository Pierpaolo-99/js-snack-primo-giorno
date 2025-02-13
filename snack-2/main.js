/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// prompt per la prima parola

const firstWord = prompt('inserisci la prima parola')

// prompt per la seconda parola

const secondWord = prompt('inserisci la seconda parola')

// confronto della lunghezza tra le parole

if (firstWord.length > secondWord.length){
    console.log(`la parola piu corta è: "${secondWord}" la parola piu lunga è: "${firstWord}"`);
}
else if (secondWord.length > firstWord.length){
    console.log(`la parola piu corta è: "${firstWord}" la parola piu lunga è: "${secondWord}"`);
}
else{
    console.log('le parole sono lunghe uguali');  
}