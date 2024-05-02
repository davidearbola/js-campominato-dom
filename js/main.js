// seleziono il div grid che conterrà le colonne
let grid = document.getElementById(`grid`);
// creo variabili da usare come paramentri nella funzione
let div = `div`;
let classeCol10 = `col-10`;
let classeCol9 = `col-9`;
let classeCol7 = `col-7`;
let classeColore = `bg`;

// seleziono bottone
let btnStart = document.getElementById(`start`);
// aggiungo eventlistener
btnStart.addEventListener(`click`, function () {
	// svuoto la griglia
	grid.innerHTML = "";
	// prendo il valore della select
	let valoreSelect = document.getElementById(`difficulty`).value;
	// if per controllare il valore delle select in base al valore richiamo funzione con parametri diversi
	if (valoreSelect == `100`) {
		creaColonna(grid, div, classeCol10, classeColore, valoreSelect);
	} else if (valoreSelect == `81`) {
		creaColonna(grid, div, classeCol9, classeColore, valoreSelect);
	} else if (valoreSelect == `49`) {
		creaColonna(grid, div, classeCol7, classeColore, valoreSelect);
	}
});

// funzione che crea ciclo for per creare le griglie diverse in base alla difficoltà scelta dall'utente
function creaColonna(griglia, element, classe1, classe2, ncelle) {
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
			// aggiungo o rimuovo classe per colore di sfondo colonna
			elementoDiv.classList.add(classe2);
			// faccio controllo per stampare o rimuovere numero dentro alle celle
			// se la cella è vuota
			// if (elementoDiv.innerHTML == "") {
			// 	// stampo
			// 	elementoDiv.innerHTML = i;
			// 	// altrimenti
			// } else {
			// 	// svuoto
			// 	elementoDiv.innerHTML = "";
			// }
			// stampo in console numero della colonna cliccata
			console.log(`Hai cliccato sulla casella numero: ${i}`);
		});
	}
}

// MILESTONE #1: GENERARE LE BOME
// All'avvio della partita abbiamo bisogno di generare una lista di celle contenenti bombe. Le bombe:
// devono essere casuali
// devono essere sempre 16
// non devono includere ripetizioni, sono tutte diverse
// devono essere un numero, che rappresenti una cella esistente (es. tra 1 e 100)
// Ragionate bene sul da farsi. Potete anche testare una funzioncina in un file separato o in console.
// Potete pensare a un ciclo che finchè non raggiunge lo scopo (16 bombe) continua a:
// generare numeri casuali
// controllare se sono già nella lista di bombe
// aggiungere il numero alla lista o ignorarlo, a seconda del caso
