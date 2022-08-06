const baseUrl = "http://localhost:3000/characters";
let id = 1;
const divPersonajes$$ = document.createElement("div");
document.body.appendChild(divPersonajes$$);

function sumIds(button) {
  if (id < 4) {
    id++;
  }else{
    button.remove();

  }
  llamadaApi();
}

function llamadaApi() {
  fetch(baseUrl + "?_page=" + id + "&_limit=5")
    .then((response) => response.json())
    .then((data) => {
      personajes(data);
      console.log(data);
    });
}

const personajes = (personajes) => {

  for (const personaje of personajes) {
    const divFather$$ = document.createElement("div");
    const h2$$ = document.createElement("h2");
    const img$$ = document.createElement("img");

    h2$$.textContent = personaje.name;
    img$$.setAttribute("src", personaje.image);

    divFather$$.appendChild(img$$);
    divFather$$.appendChild(h2$$);
    divPersonajes$$.appendChild(divFather$$);
  }
 
};

function printBoton (){
    const button$$ = document.createElement("button");
    button$$.textContent = "Cargar más";
    document.body.appendChild(button$$);
    button$$.addEventListener("click", () => sumIds(button$$));
}
printBoton();
llamadaApi();