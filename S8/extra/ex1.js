fetch("https://breakingbadapi.com/api/characters")
  .then((response) => {
    return response.json();
  })
  .then((elemento) => {
    galeria(elemento);
    console.log(elemento);
  });

function galeria(elementos) {
  for (let index = 0; index < elementos.length; index++) {
    const element = elementos[index];

    const nombre = element.name;
    const urlImg = element.img;
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h1 class="b-title">${nombre}</h1><img class="b-imagen" src=${urlImg}/>`;
    div$$.classList();
    document.body.appendChild(div$$);
    div;
  }
}
