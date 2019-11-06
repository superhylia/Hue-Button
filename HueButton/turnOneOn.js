// To run:
// $ node turnOneOn.js

// This is for those that want the script to work with one Phillips Hue light.

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
    // You can change the lightId to whatever the light you want correlates to it. Visit https://support.intuiface.com/hc/en-us/articles/360016409212-Interface-Asset-Philips-hue-Lights for more information.
  },

  work: function(my) {
    for (var d in my.devices) {
      my.devices[d].turnOn();
      my.devices[d].brightness(100);
    }
    my.bulb1.rgb(255,255,255); //white
    // You can place whatever color you want in that space with the RGB code for those using Phillips Hue lights that support color.
  }
}).start();
