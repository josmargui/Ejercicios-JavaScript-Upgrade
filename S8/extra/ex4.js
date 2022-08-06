fetch("http://localhost:3000/planets")
    .then ((response) => response.json())
    .then ((data) => {
        planetsGallery(data);
        console.log(data);
    });
const planetas$$ = document.querySelector('[data-function = "planets"]');
const personajes$$ = document.querySelector('[data-function = "characters"]');
const buscador$$ = document.querySelector('[data-function = "search"]');


const planetsGallery = (planets) => {
    for (const planet of planets) {
        
        const div$$ = document.createElement("div");
        //const img$$ = document.createElement("img")
        //imagenPersonaje$$.textContent = `src="{planet.image}`
        div$$.innerHTML = `<img height = 300 src="${planet.image}"/>
        <h2>${planet.name}</h2>`
        
        planetas$$.appendChild(div$$);
        console.log(planet);
        //const img$$ =document.getElementById(`${planet.id}`);
        //const imagenPersonaje$$ =div$$.getElementsByTagName("img");
        
        
        div$$.addEventListener('click', () => personajesFiltradosIdPlanet (planet.id));
        
    }
    
    

}


function personajesFiltradosIdPlanet (idPlanet){
    personajes$$.innerHTML ="";
    console.log(idPlanet);
    fetch("http://localhost:3000/characters?idPlanet=" + idPlanet )
    .then ((response) => response.json())
    .then ((personajes) => {
        for (const personaje of personajes) {
            
            const divPersonaje$$ = document.createElement("div");
            //const h2$$ = document.createElement("h2");
    
            divPersonaje$$.innerHTML =`<img src="${personaje.avatar}"/>
            <h2>${personaje.name}</h2>`

            personajes$$.appendChild(divPersonaje$$);

         }
         
    });
     
}

function personajesFiltradosNombre (valorInput){
    personajes$$.innerHTML ="";
    fetch("http://localhost:3000/characters")
    .then ((response) => response.json())
    .then ((data) => {
        for (const personaje of data) {
                if(personaje.name.toLowerCase() === valorInput.toLowerCase()){
                    const divPersonajeInput$$ = document.createElement("div");
                    const imgInput$$ = document.createElement("img");
                    imgInput$$.setAttribute("src", personaje.avatar);
                    divPersonajeInput$$.appendChild(imgInput$$);
                    personajes$$.appendChild(divPersonajeInput$$);
                    //console.log(valorInput)
                }
                
        
        }
        console.log(data);
    });

    
}


function search (inputValue){
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "Filtrar personajes";
    buscador$$.appendChild(input$$);
    buscador$$.appendChild(button$$);
    button$$.addEventListener('click', () => personajesFiltradosNombre(input$$.value))
    
} 
search();

