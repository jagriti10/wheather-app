const req =require('request');
//const geocode = require('playground/weatherApp/geocode/geocode.js');
var getWeather =(lat,lng)=>{
    req(
    {
    url: `https://api.darksky.net/forecast/95ff922703a0d8ed8416a2089270ee2c/${lat},${lng}`,
    json: true
},(error,response,body)=>{
    if (!error&&response.statusCode=== 200) {
        console.log(body.currently);}
    else { console.log('unable to fetch weather.')}})
    }
    module.exports.getWeather= getWeather;