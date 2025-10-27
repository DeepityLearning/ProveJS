console.log("Porca troia, molto bene!");

var nome="Daniel";
console.log("Bella " + nome);

nome="Babbo"
console.log("Figa, chi sei? " + nome + "? Perchè menti sulla tua identià?" );

let eta=30;
console.log(nome +" ha " + eta +" anni. Ed è in ritardo per imparare queste cose.");

eta=30;
console.log("Ma oggi è il compleanno di " + nome +". Ora, quindi, ha " + eta + " anni, belin.");

const PIcreco=3.14159;
console.log("TRICHECO è un numero che vale " + PIcreco +" ed è costante, non cambia mai, serve per fare dei calcoli ed essere più sicuri di se stessi.");

let String = "Questo è un testo, detto anche Sringa.";
console.log(String);
let numeroIntero = 100;
console.log(numeroIntero + " è un numero intero");
let numeroDecimale = 10.5;
console.log(numeroDecimale + " è un numero decimale.");
let booleanoVero = true;
console.log(booleanoVero + " questo boolean è vero.");
let booleanoFalso = false;
console.log(booleanoFalso + " questo boolean è falso, evitatelo, come i napoletani.");
let nullo=null;
console.log(nullo +" questo è una nullità, ma è definita quanto tale.");
let indefinito;
console.log(indefinito + " questa variabile non è definita in nessun modo, ma non vuol dire che sia inutile.")

console.log("Tipo di stringa:" +String );


let a = 10;
let b = 5;
let c = 3;

console.log("a + b = " + (a +b ) );
console.log("a - b = " + (a - b));
console.log("a : b = " + (a / b));
console.log("a % b = " + (a % b));
console.log("a % c = " + (a % c));

let x = 7;
x++;
console.log("++ aggiunge valore 1 alla variabile x, dunque x = " + x + " perchè la variabile x ha come valore dichiarato '7'");

let y = 7;
y--;
console.log("-- sottrae il valore 1 dalla variabile numerica, in questo caso 'y', che ha valore dichiarato: 7, diventa: y = " + y);

let d = 20;
d += 5; 
console.log(" il segno '+' prima dell'uguale aggiunge direttamente il valore della variabile al nuovo valore dichiarato, in questo caso, d (valore dichiarato: 20) viene sommato al nuovo valore aggiunto da '+=', in questo caso: 5, dunque si ha 20+5 = " + (d));

let num1 = 10;
let num2 = "10";

console.log("num1==num2: "+ (num1 == num2) );
console.log("num1====num2: "+ (num1===num2));

let temperatura = 10;

if (temperatura < 10) {
    console.log("Belin, che freddo, e siamo a inizio autunno.");
} else if (temperatura >=10 && temperatura <=20) {
    console.log("Questa è una temperatura palesemente autunnale.");
} else if (temperatura >=20 && temperatura <=28) {
    console.log("C'è troppo caldo in questo autunno.");
} else {
    console.log ("Non ci sono più le mezze stagioni.");
}

eta 
let patente = true;

if (eta >= 18 && patente) {
    console.log("Maggiorenne patentato, ma probabile spacciatore.")
} else if (eta >= 18 && !patente) {
    console.log("Maggiorenne che vuole fire in galera per guida senza patente.")
} else {
    console.log("Incarcerare tutori legali.")
}

let GiornoDellaSettimana = 3;

switch (GiornoDellaSettimana) {
    case 1:
        console.log ("Lunedì");
    break

    case 2: 
    console.log("Martedì");
    break

    case 3:
        console.log("Mercoledì");
    break
    
    case 4: 
    console.log("Giovedì");
    break
    
    case 5:
        console.log("Venerdì");
    break
    
    case 6: 
    console.log("Sabato");
    break
    case 7: 
    console.log("Domenica")
    break

}

let frutto = "banana";

switch (frutto) {
    case "mela":
        console.log("Questa è una Mela belinda melinda");
        break
    case "banana":
    case "arancia":
        console.log("E' un dildo giallo o un bell'agrume");
        break
    default:
        console.log("Non sappiamo cosa sia, non inserirla.")    

}

// Ciclo FOR per contare da 0 a 4

for (let i=0; i <5; i++) {
    console.log("Iterazione FOR numero: " + i);
}

for (let j=10; j >= 0; j--){
    console.log("Conto alla rovescia: " + j);
}

let parola = "Ciao figgeu";
for (let k=0; k < parola.length; k++){
    console.log("Questo è l'ordine dei caratteri contenuti nella frase " + k + ":" + parola [k]);

}

let contatore = 0;

while (contatore <3) {
    console.log("Conto: " + contatore)
    contatore++;
}

let numeroCasuale = Math.random();
let tentativi = 0;

while (numeroCasuale < 0.9) {
    console.log("Numero casuale: " +numeroCasuale + numeroCasuale.toFixed(2))
}