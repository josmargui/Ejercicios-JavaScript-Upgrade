/*En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.


```js*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name, race} = animalFunction();

console.log(name);
console.log(race);