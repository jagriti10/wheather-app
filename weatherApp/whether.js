const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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
    .argv
   
 geocode.geocodeAddress(argv.address);