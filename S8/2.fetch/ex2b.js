const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');



function search() {
    fetch('https://api.nationalize.io?name='+ input$$.value)
    .then(response => response.json())
    .then((myJson) => {
        crearTexto(myJson);
        console.log(myJson);
    })
};

function crearTexto(dato){
    
    const pText =`El nombre ${input$$.value} tiene un `;
    for (const pais of dato.country) {
        const p$$ = document.createElement("p");
        const probabilidad = Math.floor(pais.probability * 100);
        const id = pais.country_id;
        p$$.textContent = pText + `${probabilidad} porciento de ser ${id}`
        document.body.appendChild(p$$);
    //p$$ = p$$ + `${probabilidad} porciento de ser ${id}`;
    //document.body.appendChild(p$$);
}
    
    }
button$$.addEventListener('click', search);