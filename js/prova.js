// MILESTONE #1: GENERARE LE BOME
// All'avvio della partita abbiamo bisogno di generare una lista di celle contenenti bombe. Le bombe:
// devono essere casuali
// devono essere sempre 16
// non devono includere ripetizioni, sono tutte diverse //************         ok */

// devono essere un numero, che rappresenti una cella esistente (es. tra 1 e 100)
// Ragionate bene sul da farsi. Potete anche testare una funzioncina in un file separato o in console.
// Potete pensare a un ciclo che finchè non raggiunge lo scopo (16 bombe) continua a:
// generare numeri casuali
// controllare se sono già nella lista di bombe
// aggiungere il numero alla lista o ignorarlo, a seconda del caso

// // creo array per le mine
// let mine = [];
// // ciclo while
// // variabile contatore
// let i = 1;
// // finchè la lunghezza dell'array mine non è uguale a 16
// while (mine.length != 16) {
// 	// genero numero random da 1 a 100
// 	let numeroRandom = Math.floor(Math.random() * 100 + 1);
// 	// se il numero random non è ancora incluso in array mine lo pusho
// 	if (!mine.includes(numeroRandom)) {
// 		mine.push(numeroRandom);
// 	}
// 	// incremento contatore
// 	i++;
// }
// console.log(mine);

// MILESTONE #2: CONTROLLARE LE CELLE
// Al click su una cella dovremmo controllare se QUELLA cella è inclusa nell'elenco di bombe. In baso al caso aggiungiamo coloriamo la cella di azzurro o di rosso.
