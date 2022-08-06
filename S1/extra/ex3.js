/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
```js*/
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const peliculaPequenia = [];
const peliculaMediana = [];
const peliculaLarga = [];

for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    if (element.durationInMinutes < 100) {
        peliculaPequenia.push(element);
    } else if (element.durationInMinutes >= 100 && element.durationInMinutes < 200) {
        peliculaMediana.push(element);
    } else {
        peliculaLarga.push(element);
    }
}

console.log(peliculaPequenia, peliculaMediana, peliculaLarga);