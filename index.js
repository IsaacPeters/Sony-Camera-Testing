var SonyCamera = require('sony-camera');

var cam = new SonyCamera();

cam.on('update', function(param, data) {
    console.log("updated: " + param  + " = " + data.current);
});

cam.on('liveviewJpeg', function(jpegBuffer) {
    console.log(jpegBuffer);
})

cam.connect();
cam.startViewfinder();