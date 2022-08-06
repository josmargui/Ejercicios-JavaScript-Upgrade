let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + 60000;
car2.finalPrice = globalBasePrice + 80000;
console.log(car1);
console.log(car2);