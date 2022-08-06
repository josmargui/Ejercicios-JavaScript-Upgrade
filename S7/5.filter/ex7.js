const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input$$ = document.querySelector("[data-function = 'toFilterStreamers']");


//const streamersInput = streamers.filter(streamer => streamer.name.includes(input$$));



var handleInput = function (event) {
    console.log(event);
    const streamersInput = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$));
    console.log(streamersInput);
}

input$$.addEventListener("input", handleInput);