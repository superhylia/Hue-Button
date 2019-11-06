// To run:
// $ node turnAllOff.js

"use strict";

var HOSTNAME = "192.168.0.101";
var USERNAME = "82bf6d045f12856fa06cb642cbff0e";
// Hostname is filled in with your Phillips Hue Bridge's IP address, which can be found at https://www.meethue.com/api/nupnp under the "internalipaddress"
// Username is filled in with your Phillips Hue Bridge's ID, which can be found at https://www.meethue.com/api/nupnp under the "id"

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    hue: { adaptor: "hue", host: HOSTNAME, username: USERNAME }
  },

  devices: {
    bulb1: { driver: "hue-light", lightId: 1 },
  },

  work: function(my) {
    for (var d in my.devices) {
      my.devices[d].turnOff();
    }
  }
}).start();
