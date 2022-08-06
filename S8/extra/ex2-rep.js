const baseUrl ="http://localhost:3000/diary"
const divFather$$ = document.createElement("div");
document.body.appendChild(divFather$$);
const button$$ = document.createElement("button");
button$$.textContent ="Eliminar notas";
divFather$$.appendChild(button$$);
const div$$ = document.createElement("div");


function llamada() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
        orderedNotes(data);
        notesDiary(data);// por qué si pongo en el parámetro notasOrdenadas no me funciona ¿debo cambiarlo en la función notesDiary
        console.log(data);
    })
    
}

function orderedNotes (notes){
    notes.sort((a,b)=>{
        if(a.date > b.date){
            return -1;
        }else if(a.date < b.date){
            return 1;
        }else{
            return  0;
        }
    });
}

function notesDiary(notes) {
    for (const note of notes) {
        
        const h3$$ = document.createElement("h3");
        const h5$$ = document.createElement("h5");
        const p$$ = document.createElement("p");

        h3$$.textContent = note.title;
        h5$$.textContent = note.date;
        p$$.textContent = note.description;


        div$$.appendChild(h3$$)
        div$$.appendChild(h5$$)
        div$$.appendChild(p$$)
        divFather$$.appendChild(div$$);
        
    }
    button$$.addEventListener("click", () => eliminarNotasBoton (div$$));
}



const eliminarNotasBoton = (notes) => {
    notes.remove();

}

llamada();