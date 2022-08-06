/*Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const divP$$ = document.createElement('div');


 const divP6$$ = document.body.appendChild(divP$$);

for (let index = 0; index < 6; index++) {
    const p6$$ = document.createElement('p');
    divP6$$.appendChild(p6$$);
}

/*document.divP6$$.appendChild(p6$$);
/*document.body.div*/