# Boolflix

### Descrizione

L'obbiettivo di questo progetto è replicare la logica di siti di streaming famosi e di cercare e visualizzare informazioni dettagliate su film e serie TV utilizzando l'API di The Movie Database (TMDb)

## Funzionalità implementate

### Ricerca di Film e Serie TV

Ho iniziato creando un layout base con una search bar, in questo modo l'utente può cercare film e serie TV. Al click sul bottone era possibile visualizzare (sotto forma di lista) dettagli come: Titolo, Titolo Originale, Lingua e Voto. Ho anche gestito la traduzione delle lingue (italiano / inglese) nelle corrispondenti bandiere nazionali per rendere l'app visivamente accattivante.

### Webapp Stile Netflix

Ho riprogettato un header con il logo e una search bar, imitando il layout del servizio di streaming. I risultati della ricerca sono presentati in "card" con uno sfondo rappresentato dall'immagine di copertina. Inoltre, ho reso disponibili i dettagli aggiuntivi per l'utente, appaiono al passaggio del mouse, tra cui l'overview.

### Dettagli Film e Serie TV

Ho convertito il voto da 1 a 10 ad una scala da 1 a 5, rendendo la visualizzazione più intuitiva attraverso stelle piene e vuote. Questa scelta è stata fatta per semplificare la rappresentazione del voto e rendere la "card" più ordinata visivamente.

### Home Page Dinamica

Al caricamento della pagina home, ho incluso una chiamata API separata per mostrare i film e le serie TV di tendenza, arricchendo così l'esperienza dell'utente con i contenuti del momento.

## Funzionalità da implementare

### Messaggio di errore

Aggiungere un messaggio di errore nel caso in cui la ricerca non restituisca risultati.

### Cast di Attori

Per ogni film o serie TV, richiedere all'API l'elenco dei primi 5 attori del cast, mostrando solo Nome e Cognome.

### Lista di Generi e Filtri

Creato un elenco dei generi disponibili tramite l'API. Aggiungere filtri per mostrare/nascondere le schede ottenute con la ricerca.

## Layout

![/assets/img/layout definitivo.png](<src/assets/img/layout definitivo.png>)
