const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement('ul');

for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    const li$$ = document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);