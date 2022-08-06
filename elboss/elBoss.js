const elBoss = {

    nombre: "Jose Luis",
    edad: 194,
    poderes: [
        {
            nombre: "Paranoia",
            description: "intentandome escapar de esta paranoia",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la paranoia"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la paranoia"
                    }
                }
            ]
        },
        {
            nombre: "Petrificasió",
            description: "Te mira y te petrifica",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la petrificasió"
                    },
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la petrificasió"
                    }
                }   
            ]
        },
        {
            nombre: "Fuego",
            description: "Pues eso, fuego",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen del fueguito"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen del fueguito"
                    }
                } 
            ]
        }
    ],
    familiares: [
        {
            nombre: "Julian",
            edad: 342,
            parentesco: "Primo"
        },
        {
            nombre: "Paquito",
            edad: 312,
            parentesco: "Tío"
        },
        {
            nombre: "Emma",
            edad: 13,
            parentesco: "Sobrina"
        },
        {
            nombre: "Julia",
            edad: 100,
            parentesco: "Hermana"
        }
    ],
    reto: [
        [
            {
                sigueElReto: [
                    {
                        sigueElReto2: {
                            sigueElReto3: {
                                pareceQueSabesBucearEntreObjetos: {
                                    definitivamenteSabes: [
                                        "Jose",
                                        "Luis,",
                                        "te",
                                        "miro",
                                        "y",
                                        23121,
                                        "te",
                                        "destruyo",
                                        {
                                            mensajeFinal: "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}


// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
const mensaje = elBoss.nombre + ", te conozco y no me das ningún miedo!";
console.log(mensaje);
// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log("conozco tus poderes y lo que hacen!");
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
const poderes = elBoss.poderes;
for (let index = 0; index < poderes.length; index++) {
    const element = poderes[index];
    let mensaje2 = "tu " + (index+1) + " poder es " + element.nombre + " y hace " + element.description;
    console.log(mensaje2);
}

//const poder = "tu primer poder es " + elBoss.poderes[0].nombre + " y estoy " + elBoss.poderes[0].description;
//console.log(poder);
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//const poder2 = "tu segundo poder es " + elBoss.poderes[1].nombre + " y " + elBoss.poderes[1].description;
//console.log(poder2);

//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
//const poder3 = "tu tercer poder es " + elBoss.poderes[2].nombre + " y " + elBoss.poderes[2].description;
//console.log(poder3);
// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
const mensaje3 = "También se tu punto más debil, tus familiares, y les conozco..."
console.log(mensaje3);
let familiares = elBoss.familiares;
for (const familiar of familiares) {
    let mensaje4 = "Conozco a tu " + familiar.parentesco + " " + familiar.nombre;
    console.log(mensaje4)
    
}
//const mensaje2 = "También se tu punto más debil, tus familiares, y les conozco...";
//console.log(mensaje2);
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
//const mensaje3 = "conozco a tu " + elBoss.familiares[0].parentesco + " " + elBoss.familiares[0].nombre;
//console.log(mensaje3);
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
//const mensaje4 = "conozco a tu " + elBoss.familiares[1].parentesco + " " + elBoss.familiares[1].nombre;
//console.log(mensaje4);
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
//const mensaje5 = "conozco a tu " + elBoss.familiares[2].parentesco + " " + elBoss.familiares[2].nombre;
//console.log(mensaje5);
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
//const mensaje6 = "conozco a tu " + elBoss.familiares[3].parentesco + " " + elBoss.familiares[3].nombre;
//console.log(mensaje6);
// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".
let mensaje5 = ""
let reto = elBoss.reto[0];
let reto2 = reto.map(function(array){
    return array.sigueElReto[0].sigueElReto2;
});


console.log(reto);
console.log(reto2);






// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.

// haremos la media de las edades de los familiares de elBoss.

// y mostraremos por pantalla el mensajeFinal.