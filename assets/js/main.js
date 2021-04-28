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
var listaUl = '';

for (var i = 0; i < cognomiNew.length; i++) {
    //console.log(cognomiNew[i]);
    lista =(i + 1) +') ' + cognomiNew[i];
    console.log(lista);
    listaUl = document.getElementById('cognomi').innerHTML;
    document.getElementById('cognomi').innerHTML = document.getElementById('cognomi').innerHTML + '<li>' + lista + '</li>';    
}