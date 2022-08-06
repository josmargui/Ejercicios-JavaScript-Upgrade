/*Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

```js*/
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const user = users.map(function(nombres) 
{
    if(nombres.name[0].includes("A")){
        nombres.name = "Anacleto";
    /*console.log(user);  */
}
    return nombres.name;
}
)

console.log(user);


