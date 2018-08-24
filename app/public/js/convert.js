fabric = require('fabric').fabric;
const fs = require("fs");

var canvas = new fabric.StaticCanvas(null,{width: "500", heigh: "500"});
var jsonString = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}';

jsonString = jsonString.replace(/\'/g,'"');
console.log(jsonString);

canvas.loadFromJSON(jsonString, function(){
    var image = canvas.toDataURL({
        format: 'png',
        quality: 0.3
    })
    image = image.replace(/^data:image\/png;base64,/, "");
    // console.log(image);
    fs.writeFile("./out.png", image, 'base64', function() {
        console.log("saved");
      });
})