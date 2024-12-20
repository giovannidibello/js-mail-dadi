// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

// Creo un array con le email degli invitati
const listaEmail = ["mario.rossi@example.com", "lucia.bianchi@example.org", "andrea.verdi@example.net", "giulia.esposito@domain.com", "antonio.ricci@website.org",
    "sara.mancini@web.net", "francesco.lombardi@mail.com", "alessandra.ferrari@company.org", "luca.gallo@test.net", "martina.conti@service.com"];

// INPUT

// Chiedo all'utente di inserire la sua email
let emailUtente = prompt("Inserisci la tua email: ");
console.log(emailUtente);

// ELABORAZIONE

// dichiaro la var
let trovato = false;

// Creo un ciclo for nel quale confronto il dato inserito con tutti quelli presenti nell'array
for (let i = 0; i < listaEmail.length; i++) {

    // SE la mail fornita è presente nell'array
    if (emailUtente === listaEmail[i]) {
        // stampo l'utente è stato invitato
        console.log("Congratulazioni sei stato/a invitato/a!!!");
        // aggiorno la variabile trovato
        trovato = true;
    }
}

// ALTRIMENTI     

if (!trovato) {
    // stampo l'utente non è stato invitato
    console.log("Purtroppo non sei stato/a invitato/a!!!");
}




