//1. chiedi all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome');
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli']
cognomi.push(cognomeUtente);
var cognomiNew = cognomi.sort();

//3. stampa la lista ordinata alfabeticamente
console.log(cognomiNew);
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var lista = '';

for (var i = 0; i < cognomiNew.length; i++) {
    //console.log(cognomiNew[i]);
    lista =(i + 1) +') ' + cognomiNew[i];
    console.log(lista);
}