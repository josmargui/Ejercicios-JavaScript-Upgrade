const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const button$$ =document.createElement("button");

for (let index = 0; index < countries.length; index++) {
    const div$$ = document.createElement("div");
    const element = countries[index];
    
    div$$.innerHTML = `<h4>${element.title}</h4><img src="${element.imgUrl}"/>`;
    document.body.appendChild(div$$);
}

document.body.appendChild(button$$);

var handleButton = function (event){
    const allDiv$$ = document.querySelectorAll("div");
    const ultimoDiv$$ = allDiv$$.length -1;
    allDiv$$[ultimoDiv$$].remove();
}
button$$.addEventListener('click', handleButton);