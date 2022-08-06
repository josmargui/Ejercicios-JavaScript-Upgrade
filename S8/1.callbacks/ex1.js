const numbersList = [];

function sum(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function father(a, b, callback){
    const numFather = callback(a,b);
    numbersList.push(numFather);
}

father(4,5,sum);
father(3,2, substract);
father(8, 10, sum);

console.log(numbersList);