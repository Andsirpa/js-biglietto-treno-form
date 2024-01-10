# TRACCIA

Descrizione:
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.
BONUS:
Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.


# SVOLGIMENTO

- chiedo all'utente il numero dei km da percorrere
    - creo un text input dove l'utente può inserire il dato

- chiedo l'età all'utente
    - creo un input select dove chiedo all'utente a quale fascia d'età appartiene
    
- calcolo il prezzo intero del biglietto
    - moltiplico il numero dei km per 0.21 €

- calcolo il prezzo finale
    - SE l'utente è minorenne 
        - applico uno sconto del 20% sul prezzo intero
    - SE l'utente è over 65
         - applico uno sconto del 40% sul prezzo intero

- creo i bottoni e il form per l'invio dei dati

- creo il biglietto con le informazioni per l'utente

- stampo il biglietto
    - creo un evento
        - dopo l'invio del form faccio comparire il biglietto a schermo


