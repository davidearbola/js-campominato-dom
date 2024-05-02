// seleziono il div grid che conterrà le colonne
let grid = document.getElementById(`grid`);
// creo variabili da usare come paramentri nella funzione
let div = `div`;
let classeCol10 = `col-10`;
let classeCol9 = `col-9`;
let classeCol7 = `col-7`;
let classeColoreRed = `bg-red`;
let classeColoreBlue = `bg-blue`;
// creo array per le mine
let mine = [];
// variabile punteggio
let score = 0;

// seleziono bottone
let btnStart = document.getElementById(`start`);
// aggiungo eventlistener
btnStart.addEventListener(`click`, function () {
	// svuoto la griglia
	grid.innerHTML = "";
	// ciclo while
	// variabile contatore
	let i = 1;
	// finchè la lunghezza dell'array mine non è uguale a 16
	while (mine.length != 16) {
		// genero numero random da 1 a 100
		let numeroRandom = Math.floor(Math.random() * 100 + 1);
		// se il numero random non è ancora incluso in array mine lo pusho
		if (!mine.includes(numeroRandom)) {
			mine.push(numeroRandom);
		}
		// incremento contatore
		i++;
	}
	// prendo il valore della select
	let valoreSelect = document.getElementById(`difficulty`).value;
	// if per controllare il valore delle select in base al valore richiamo funzione con parametri diversi
	if (valoreSelect == `100`) {
		creaColonna(
			grid,
			div,
			classeCol10,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			mine,
			score
		);
	} else if (valoreSelect == `81`) {
		creaColonna(
			grid,
			div,
			classeCol9,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			mine,
			score
		);
	} else if (valoreSelect == `49`) {
		creaColonna(
			grid,
			div,
			classeCol7,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			mine,
			score
		);
	}
});

// funzione che crea ciclo for per creare le griglie diverse in base alla difficoltà scelta dall'utente
function creaColonna(
	griglia,
	element,
	classe1,
	classe2,
	classe3,
	ncelle,
	lista,
	punteggio
) {
	// creo ciclo for con valore select
	for (let i = 1; i <= ncelle; i++) {
		// creo elemento
		let elementoDiv = document.createElement(element);
		// inserisco elemento dentro al div selezionato
		griglia.append(elementoDiv);
		// aggiungo classe che crea colonna
		elementoDiv.classList.add(classe1);
		// aggiungo evento di click
		elementoDiv.addEventListener(`click`, function () {
			// se la casella cliccata non è inclusa in array mine coloro di blue
			if (!lista.includes(i)) {
				// aggiungo classe per colore di sfondo Sei salvo(blue)
				elementoDiv.classList.add(classe3);
				// aggiungo punto
				punteggio++;
				console.log(`sei salvo: punteggio attuale: ${punteggio}`);
				// altrimenti
			} else if (lista.includes(i)) {
				// aggiungo classe sfondo per mina (rosso)
				elementoDiv.classList.add(classe2);
				punteggio = 0;
				alert(`bomba`);
				griglia.innerHTML = `<h2>Hai perso</h2>`;
			}
		});
	}
}
