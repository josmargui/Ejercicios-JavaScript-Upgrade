
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamerLegend = streamers.filter( streamer => {
    if((streamer.age > 35 ) && (streamer.gameMorePlayed.includes("Legends"))){
    const streamerLegendMayus = streamer.gameMorePlayed.toUpperCase();
    }
    return streamerLegendMayus;
});

console.log(streamerLegendMayus); 