const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},
{title: 'Origen', stars: 5, date: 2010},
{title: 'Your Name', stars: 5, date: 2016}];

const peli= movies.find(function (element){
    return element.date === 2010;
});

console.log(peli);