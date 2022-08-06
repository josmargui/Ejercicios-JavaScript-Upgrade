const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement('ul');
for (let index = 0; index < apps.length; index++) {
    const element = apps[index];
    const li$$ = document.createElement('li');
    li$$.textContent = element;
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);