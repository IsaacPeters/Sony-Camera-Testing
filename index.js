var SonyCamera = require('sony-camera');

var cam = new SonyCamera();

cam.on('update', function(param, data) {
    console.log("updated: " + param  + " = " + data.current);
});

cam.connect();