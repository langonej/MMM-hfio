/* Magic Mirror
 * Module: Aviation Weather
 *
 * By Stuart Loh https://github.com/stuloh
 * Licensed under Apache v2 license
 */

var NodeHelper = require("node_helper");
var request = require("request");

module.exports = NodeHelper.create({
  start: function () {
    console.log("who the fuck is this...");
  },

  getOH2: function (options,recbody) {
    var headers = {
     'Content-Type': 'text/plain',
    'Accept': 'application/json'
}

// Configure the request
var recoptions = {
   url: 'http://192.168.1.19:8080/rest/items/sim_JLOfficeSwitch',
    method: 'POST',
    headers: headers,
    body: 'ON'
}
      console.log("in the morning");
    var self = this;
//var recoptions = options;
      console.log("recoptions : " + recoptions.url);
      
      var recbody = options.body;
      console.log("recbody : " + recbody);
      request(recoptions, function (error, response, recbody) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(recbody)
    }
})
      
    var airportData = new Object();

    // Convert to US ICAO codes
  
    },
    
    // Track number of HTTP requests to be made
   

  //  request({ url: metarUrl, method: "GET" }, function (error, response, body) {
    //  if (!error && response.statusCode == 200) {
    //    var metarData = JSON.parse(body).features;
    //    airports.forEach(function(airport) {
      //    metarData.forEach(function(metar) {
    //        if (airport === metar.properties.id) {
    //          console.log("METAR data found for " + airport);
    //          airportData[airport] = metar.properties;
    //          return; // check next airport in list
      //      }
     //     });
       
   
  

  //Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, options,body) {
    if (notification === "FLIP_SWITCH") {
       
        this.getOH2(options,body);
        console.log("paging me at 546");
    }
  }

});

