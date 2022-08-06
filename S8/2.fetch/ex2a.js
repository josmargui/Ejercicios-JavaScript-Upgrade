const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');



function search() {
    fetch('https://api.nationalize.io?name='+ input$$.value)
    .then(response => response.json())
    .then((myJson) => {
        

        console.log(myJson);
    })
};
button$$.addEventListener('click', search);