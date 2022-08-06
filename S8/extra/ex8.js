const baseUrl ="https://ghibliapi.herokuapp.com/films";
const divFather$$ = document.createElement("div");
divFather$$.classList.add("b-gallery");
document.body.appendChild(divFather$$);


fetch(baseUrl)
.then((response) => response.json())
.then((data) => {
    printMovies(data);
    console.log(data);
});


function printMovies (movies){
    for (const movie of movies) {
        const div$$ = document.createElement("div");
        const img$$ = document.createElement("img");
        const h2$$ = document.createElement("h2");
        
        div$$.classList.add("b-gallery__item")
        h2$$.classList.add("b-gallery__title")

        img$$.setAttribute("src", movie.image);
        h2$$.textContent = movie.title;

        div$$.appendChild(img$$);
        div$$.appendChild(h2$$);
        divFather$$.appendChild(div$$);

    }
}