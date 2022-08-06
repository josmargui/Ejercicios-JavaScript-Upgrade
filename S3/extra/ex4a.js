const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

/*for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    h4$$.textContent = element.title;
    img$$.textContent = "<img src="+ element.imgUrl + "/>"; //añadir setAtributte para 
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    document.body.appendChild(div$$);    
}*/

for (let index = 0; index < countries.length; index++) {
    const div$$ = document.createElement("div");
    const element = countries[index];
    div$$.innerHTML = `<h4>${element.title}</h4><img src="${element.imgUrl}"/>`;
    document.body.appendChild(div$$);
}