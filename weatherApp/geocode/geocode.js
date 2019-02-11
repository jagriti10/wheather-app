const request= require('request');

var geocodeAddress= (address,callback)=>{
    var enc =encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${enc}&key=%20AIzaSyDpo0_AWcnQTgTm0p0ISXX7RjwIRyMZHt4`,
       json: true
    },(error,response,body)=>{
        if (error) {
            callback('cannot connect to gooogle servers');
        } 
        else if(body.status!='OK') {
            callback('plese enter a valid address')
        }
        else{
           callback(undefined,{
               address: body.results[0].formatted_address,
           latitide: body.results[0].geometry.location.lat,
          longitute: body.results[0].geometry.location.lng
           });
        }}
    )};
    module.exports.geocodeAddress = geocodeAddress;
    

