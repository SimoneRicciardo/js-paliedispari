let parolaUtente = prompt('inserisci parola');


function parolaPal (parola){

    let reverseWord = parola.split('').reverse();

    return reverseWord;
}

let parolaContr = parolaPal(parolaUtente);

if(parolaUtente == parolaContr){
    alert('parola palindroma');

} else {
    alert('parola NON palindroma');

}
