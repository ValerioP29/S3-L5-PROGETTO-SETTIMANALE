/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Valerio",
  surname: "Persiani",
  age: "31",
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const newSkills = "FrontEnd";
me.skills.push(newSkills);
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  const randomIndex = Math.floor(Math.random() * 6 + 1);
  return randomIndex;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(whoIsBigger(8, 12));
console.log(whoIsBigger(29, 12));
console.log(whoIsBigger(1234, 2546));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  const str = string.split(" ");
  const newStr = str.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return newStr;
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string, boolean) {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
console.log(deleteOne("hello", true));
console.log(deleteOne("hello", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  return string.replace(/[0-9]/g, "");
}
console.log(onlyLetters("4 giorni fa ho vinto 1000 euro"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(string) {
  const chiocciola = string.indexOf("@");
  if (chiocciola === -1 || chiocciola === 0 || chiocciola === string.lenght - 1) {
    return false;
  }
  const punto = string.indexOf(".", chiocciola);
  if (punto === -1 || punto === +1 || punto === string.lenght - 1) {
    return false;
  } else {
    return true;
  }
}
console.log(isThisAnEmail("persianivalerio0@gmail.com"));
console.log(isThisAnEmail("persianivalerio0gmail.com"));
console.log(isThisAnEmail("persianivalerio0@gmailcom"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const currentDay = new Date();
  nameOfTheDays = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
  const today = currentDay.getDay() - 1;
  return nameOfTheDays[today];
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(number) {
  const value = [];
  for (let i = 0; i < number; i++) {
    value.push(dice());
  }
  const sum = value.reduce((total, accumulator) => total + accumulator, 0);
  return { sum: sum, value: value };
}
console.log(rollTheDices(6));

/* ESERCIZIO 
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(Dates) {
  const today = new Date();
  const pastDay = new Date(Dates);
  const today2 = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const pastDay2 = Math.floor(pastDay.getTime() / (1000 * 60 * 60 * 24));
  const differenceDays = today2 - pastDay2;
  return differenceDays;
}
console.log(howManyDays("1993-01-17"));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const myBirthday = "01-17";
  const today2 = new Date();
  const month = String(today2.getMonth() + 1);
  const day = String(today2.getDate());
  const todayDate = "${month}-${day}";
  return todayDate === myBirthday;
}

console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
  
*/
function deleteProp(object, string) {
  const keysOfObject = Object.keys(object);
  const lastKeysElement = keysOfObject[keysOfObject.length - 1];
  delete object[lastKeysElement];
  return object;
}
const myFavouriteJuvePlayer = { Attaccante: "Vlahovic", Centrocampista: "Koopmeiners", Difensore: "Bremer", Portiere: "Di Gregorio" };

console.log(deleteProp(myFavouriteJuvePlayer));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let latestFilmYear = 0;
  let latestFilm = null;
  for (let i = 0; i < movies.length; i++) {
    const year = parseInt(movies[i].Year);
    if (year > latestFilmYear) {
      latestFilmYear = year;
      latestFilm = movies[i];
    }
  }
  return latestFilm;
}
console.log(newestMovie());
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  return movies.length;
}
console.log(countMovies());
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  const yearsOnly = [];
  for (let i = 0; i < movies.length; i++) {
    yearsOnly.push(movies[i].Year);
  }
  return yearsOnly;
}
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/ function onlyInLastMillennium() {
  const lastMilleniumFilm = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < 2000) {
      lastMilleniumFilm.push(movies[i]);
    }
  }
  return lastMilleniumFilm;
}
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let yearNumbersSum = 0;
  for (let i = 0; i < movies.length; i++) {
    yearNumbersSum += parseInt(movies[i].Year);
  }
  return yearNumbersSum;
}
console.log(sumAllTheYears());
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(string) {
  const filmSelected = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(string.toLowerCase())) {
      filmSelected.push(movies[i]);
    }
  }
  return filmSelected;
}
console.log(searchByTitle("lord"));
console.log(searchByTitle("avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(string) {
  let matchAndUnmatch = { match: [], unmatch: [] };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(string.toLowerCase())) {
      matchAndUnmatch.match.push(movies[i]);
    } else {
      matchAndUnmatch.unmatch.push(movies[i]);
    }
  }
  return matchAndUnmatch;
}
console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(number) {
  {
    if (number >= 0 && number < movies.length) {
      movies.splice(number, 1);
    }
  }
  return movies;
}
console.log(removeIndex(6));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tdSelector = document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function tdText() {
  const tdSelector = document.querySelectorAll("td");
  tdSelector.forEach((td) => {
    console.log(td.textContent);
  });
}
tdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function bgColor() {
  const background = document.querySelectorAll("a");
  background.forEach((a) => {
    a.style.backgroundColor = "red";
  });
}
console.log(bgColor());

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addListItem() {
  const ulSelector = document.getElementById("my-list");
  const newLi = document.createElement("li");
  newLi.textContent = "nuovo elemento";
  ulSelector.appendChild(newLi);
}
console.log(addListItem());
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  const ulSelector = document.getElementById("my-list");
  ulSelector.innerHTML = "";
}
console.log(clearList());

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function tRow() {
  tRowSelection = document.querySelectorAll("tr");
  tRowSelection.forEach((tr) => {
    tr.classList.add("test");
  });
}
console.log(tRow());
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(number) {
  for (let i = 1; i <= number; i++) {
    let asterisco = "*".repeat(i);
    console.log(asterisco);
  }
}
halfTree(7);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
