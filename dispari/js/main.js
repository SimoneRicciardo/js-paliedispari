const pardisp = prompt('Inserisci pari o dispari');

const numeroGiocatore = parseInt(prompt('Scegli un numero tra 1 e 5'));

console.log('numero giocatore:' + numeroGiocatore)

let numeroPc = numerorandom();

const somma = numeroGiocatore + numeroPc;

console.log('numero computer:' + numeroPc)
console.log('la somma è:' + somma)

if (numeroGiocatore >= 1 && numeroGiocatore <= 5) {

    let risultato;

    if (somma % 2 == 0) {
        risultato = 'pari'
    } else {
        risultato = 'dispari';
    }

    console.log('il numero è:' + risultato)

    if (risultato == pardisp) {
        alert('Giocatore vince');
        console.log('Giocatore vince');
    } else {
        alert('PC vince');
        console.log('PC vince');
    }

} else {
    alert('valore non valido');
}



function numerorandom(numeroComputer){
    numeroComputer = Math.floor(Math.random() * 5) + 1;
    return numeroComputer;
}


