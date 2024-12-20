// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ELABORAZIONE

// Creo due variabili una per il giocatore e una per il pc
let numeroGiocatore;
let numeroPc;

// Genero i numeri random e li assegno ai due giocatori
numeroGiocatore = Math.floor(Math.random() * 6) + 1;
numeroPc = Math.floor(Math.random() * 6) + 1;

console.log("Numero Giocatore: " , numeroGiocatore,"Numero Pc: " , numeroPc);


// Confronto i due numeri 

// SE è piu alto il numero del giocatore
if (numeroGiocatore > numeroPc) {
    // Stampo il giocatore ha vinto
    console.log("Ha vinto il giocatore");
    
// SE è piu alto il numero del PC
} else if (numeroGiocatore < numeroPc){
    // Stampo il pc ha vinto
    console.log("Ha vinto il Pc");

    // ALTRIMENTI
} else {
    console.log("Pareggio, i due numeri sono uguali");
}
    
    
    
    
