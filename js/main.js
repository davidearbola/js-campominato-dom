// variabili globali e array
let griglia = document.getElementById(`grid`);
let classeCol10 = `col-10`;
let classeCol9 = `col-9`;
let classeCol7 = `col-7`;
let classeColoreRed = `bg-red`;
let classeColoreBlue = `bg-blue`;
let listaMine = [];
let listaSave = [];
let valoreSelect = document.getElementById(`difficulty`).value;
// creo punteggio
let punteggio = 0;

// al click di start
document.getElementById(`start`).addEventListener(`click`, function () {
	// azzero griglia
	griglia.innerHTML = "";
	// azzero array
	listaMine = [];
	listaSave = [];
	// azzero punteggio
	punteggio = 0;
	// prendo il valore della select
	valoreSelect = document.getElementById(`difficulty`).value;
	// se scelto easy
	if (valoreSelect == 100) {
		// richiamo le funzioni
		creaMine(listaMine, valoreSelect);
		creaGioco(
			classeCol10,
			griglia,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			listaMine,
			listaSave
		);
		// se scelto medium
	} else if (valoreSelect == 81) {
		creaMine(listaMine, valoreSelect);
		creaGioco(
			classeCol9,
			griglia,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			listaMine,
			listaSave
		);
		// se scelto hard
	} else if (valoreSelect == 49) {
		creaMine(listaMine, valoreSelect);
		creaGioco(
			classeCol7,
			griglia,
			classeColoreRed,
			classeColoreBlue,
			valoreSelect,
			listaMine,
			listaSave
		);
	}
});

// funzione per creare le griglie e colorarle al click e avvisare se prendo mina o se vinco
function creaGioco(
	// passo i parametri
	classe,
	elementoAppend,
	classe1,
	classe2,
	numero,
	lista,
	lista2
) {
	// ciclo for
	for (let i = 1; i <= numero; i++) {
		// creo elemento
		let nuovoElemento = document.createElement(`div`);
		// aggiungo classe
		nuovoElemento.classList.add(classe);
		// appendo a griglia
		elementoAppend.append(nuovoElemento);
		// al click su elemento nuovo
		nuovoElemento.addEventListener(`click`, function () {
			// se il numero dell'elemento non è incluso nella lista mine e nella lista save
			if (!lista.includes(i) && !lista2.includes(i)) {
				// aggiungo classe background blu
				nuovoElemento.classList.add(classe2);
				// pusho il numero nell'array save
				lista2.push(i);
				// aumento punteggio
				punteggio++;
				// richiamo funzione
				win(valoreSelect, griglia);
				// altrimenti se il numero è incluso nella lista mine
			} else if (lista.includes(i)) {
				// aggiungo classe background red
				nuovoElemento.classList.add(classe1);
				// richiamo funzione
				gameOver(griglia);
			}
		});
	}
}

// funzione per creare le mine random
function creaMine(lista, numero) {
	// variabile contatore
	let i;
	// ciclo while finchè l'array delle mine non contiene 16 elementi
	while (lista.length != 16) {
		// creo numero random da 1 al valore della select difficulty
		let numberRandom = Math.floor(Math.random() * numero + 1);
		// aumento contatore
		i++;
		// se numero random non è incluso nell'array mine
		if (!lista.includes(numberRandom)) {
			// pusho il numero random (cosi non sarà mai ripetuto più volte)
			lista.push(numberRandom);
		}
	}
}

// funzione che dice se si ha perso se si prende la mina
function gameOver(griglia) {
	// stampo in console
	alert(`Hai preso la mina`);
	// stampo in pagina il messaggio
	griglia.innerHTML = `<h2>Hai Perso</h2>`;
}

// funzione che dice se hai vinto
function win(valore, griglia) {
	// se l'array save è lungo il valore della select meno 16 mine
	if (punteggio == valore - 16) {
		// stampo in console
		alert(`Complimenti hai vinto`);
		// stampo in pagina
		griglia.innerHTML = `<h2>Hai Vinto</h2>`;
	}
}
