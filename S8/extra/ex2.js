fetch("http://localhost:3000/diary")
  .then((response) => response.json())
  .then((data) => {
    notasOrdenadas(data);
    crearNotasDiarias(notasOrdenadas);
    console.log(data)}
    );

const notasOrdenadas = (notas) => {
   return notas.sort(function (a, b){
    if(a.date > b.date){
      return -1;
    }else if(a.date < b.date){
      return 1;
    }else{
      return 0;
    }
    });
}

const crearNotasDiarias = (notas) => {
  for (const nota of notas) {
    const fecha = nota.date;
    const nombre = nota.name;
 
    const div$$ = document.createElement("div");
    div$$.innerHTML =`<h3>${nombre}</h3><h5>${fecha}</h5><p>${descripcion}</p>`
  }
    const button$$ = document.createElement('button');
        button$$.textContent = 'Remove';
        button$$.addEventListener('click', () => removeDiaryNote(div$$))
        div$$.appendChild(button$$);
        document.body.appendChild(div$$);
  }


const removeDiaryNote = (diaryNote$$) => {
  diaryNote$$.remove();
}