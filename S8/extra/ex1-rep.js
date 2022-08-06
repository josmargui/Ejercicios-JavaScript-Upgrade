const baseUrl = "https://breakingbadapi.com/api/characters";
const divFather$$ = document.createElement("div");
document.body.appendChild(divFather$$);


function llamada (){
    fetch(baseUrl)
    .then ((response) => response.json())
    .then((data) => {
        charactersGallery(data);
        console.log(data);
    })
}

function charactersGallery (personajes){

    for (const personaje of personajes) {
        const div$$ = document.createElement("div");
        const img$$ = document.createElement("img");
        const h2$$ = document.createElement("h2");

        img$$.setAttribute("src", personaje.img);
        h2$$.textContent = personaje.name;

        div$$.appendChild(img$$);
        div$$.appendChild(h2$$);

        divFather$$.appendChild(div$$);
    }

}
llamada();