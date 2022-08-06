const removeP$$ = document.querySelectorAll('.fn-remove-me');
console.log(removeP$$);


for (let index = 0; index < removeP$$.length; index++) {
    const element = removeP$$[index];
    const eliminarP$$ = element.remove(index);
}
