/*Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
, usando spread operatos.

```js*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

let colors2 = [...colors];
colors2.splice(2,1);

console.log(colors2);
