const numbers = [32, 21, 63, 95, 100, 67, 43];

const num=numbers.find(function (element){
    return element===100;
});
console.log(num);