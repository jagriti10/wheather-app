const request= require('request');

var geocodeAddress= (address)=>{
    var enc =encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${enc}&key=%20AIzaSyDpo0_AWcnQTgTm0p0ISXX7RjwIRyMZHt4`,
       json: true
    },(error,response,body)=>{
        if (error) {
            console.log('cannot connect to gooogle servers');
        } 
        else if(body.status!='OK') {
            console.log('plese enter a valid address')
        }
        else{
           console.log(`Address: ${body.results[0].formatted_address}`)
           console.log(`latitide ${body.results[0].geometry.location.lat}`)
           console.log(`longitute ${body.results[0].geometry.location.lng}`)
      
        }
        }
    )
}
    module.exports.geocodeAddress = geocodeAddress;
    

