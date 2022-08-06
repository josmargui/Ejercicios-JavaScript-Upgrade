const baseUrl = "http://localhost:3000/characters?_page=1&_limit=5"

const divFather$$ = document.createElement("div");
const button$$ = document.createElement("button");

button$$.textContent ="Cargar más";
document.body.appendChild(divFather$$);
document.body.appendChild(button$$);

let sumID = 1;

function sumaID (button){
    if(sumID < 4){
        sumID++;
    }else{
        button$$.remove();
    }
    llamadaApi()    
    
}

function llamadaApi() {
    
    fetch(baseUrl + "?_page=" +sumID + "&_limit=5") 
        .then((response) => response.json())
        .then((data) => {
            printGallery(data);
            
            console.log(data);
        })
}

const printGallery = (characters) => {
    for (const character of characters) {
        const div$$ = document.createElement("div")
        const h2$$ = document.createElement("h2")
        const img$$ = document.createElement ("img")
        
        h2$$.textContent = character.name;
        img$$.setAttribute ("src", character.image);

        div$$.appendChild(h2$$);
        div$$.appendChild(img$$);
        divFather$$.appendChild(div$$);
    }
    
}

const printBoton = (sumID) => {
    button$$.addEventListener("click", () => sumaID(button$$));
}
printBoton();
llamadaApi();