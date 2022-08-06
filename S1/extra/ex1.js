const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (let index = 0; index < users.length; index++) {
    const usuario = users[index];
    if (usuario.years < 18) {
        console.log("Usuarios menores de edad: " + usuario.name);
    }else{
        console.log("Usuarios mayores de edad: " + usuario.name);

    }
    
}