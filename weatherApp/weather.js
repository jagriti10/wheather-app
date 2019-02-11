const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const data = require('./datajs/data')

const argv = yargs
    .options(
    {
    a: {
        demand: true,
        alias: 'address',
        describe: 'adress for weather',
        string: true
    }
    })
    .help()
    .argv;
geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        console.log(JSON.stringify(results,undefined,2));
        data.getWeather(results.latitide,results.longitute,(errorMessage,weatherResults)=>{
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults,undefined,2));
            }
        });
    }
});
