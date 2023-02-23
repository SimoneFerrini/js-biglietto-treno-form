/*

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


/*chiedere km e età ad utente*/
let userKmEl = document.getElementById("user-km");
let userAgeEl = document.getElementById("user-age");
let priceForKm = 0.21;


/*btn confirm - controlli e operazioni*/


let btnConfirmEl = document.getElementById("confirm");

btnConfirmEl.addEventListener("click" , function() {
        /*assegno i valori degli input a variabili*/
        let userKm = parseInt(userKmEl.value);
        let userAge = parseInt(userAgeEl.value);
        
        /*controllo che le variabili siano valide, altrimenti messaggio di errore*/
        if (isNaN(userKm) || isNaN(userAge) || userKm<=0 || userAge<=0){
            document.write("I dati inseriti non sono validi, devi inserire un numero intero maggiore di 0!!! <br> Ricarica la pagina");
        }
        else {
            /*se i valori sono validi eseguo calcolo prezzo e prezzo totale in caso di sconto*/
            let price = userKm * priceForKm;
            let finalPrice = price;

            if (userAge < 18) {
                let discount = price / 100 * 20;
                finalPrice = price - discount;

            } else if(userAge >= 65) {
                let discount = price / 100 * 40;
                finalPrice = price - discount;
            }

            finalPrice = finalPrice.toFixed(2);
            
            document.getElementById("prezzo-totale").innerHTML = finalPrice;
            
            
        }
    
    }
)

