const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    const textFather = callback(description);
    userAnwsers.push(textFather);

}

father("texto prueba", promptExample);
father("texto prueba", confirmExample);
console.log(userAnwsers);