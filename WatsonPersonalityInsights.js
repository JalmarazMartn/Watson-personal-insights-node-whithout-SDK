var request = require("request");
auth = require('./ApiKey.json');
var transUrl = "https://gateway-lon.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13"
var data2 = {};
var data2 = require('./profile.json');
request.post(
    {     
        url: transUrl,        
        auth,
        headers:{
        content_type: 'application/json',        
},
        body: JSON.stringify(data2)
      }          
, function (err, response, body) {
    console.log(body);
});