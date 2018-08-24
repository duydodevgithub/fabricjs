const fabric = require("fabric").fabric;
const fs = require("fs");

var canvas = new fabric.Canvas();
// var jsonString = '{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0}],"background":"rgba(0, 0, 0, 0)"}';

var jsonString = '{"objects":[{"type":"image","originX":"left","originY":"top","left":228.81,"top":201.39,"width":500,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.26,"scaleY":0.6,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":228.8125,"original_top":201.38509656161,"original_scaleX":1.25875,"original_scaleY":0.60242973576949,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":false,"src":"https://nbpublic.s3.amazonaws.com/product_cliparts/most-popular/HfhlAohkgE55035309b9946_thumb.png?v=0.9847660759261536","filters":[{"type":"","color":"#ffffff","opacity":1}],"crossOrigin":"anonymous","alignX":"none","alignY":"none","meetOrSlice":"meet","imageType":"Stock","cloudinarySrc":"","filterType":"Tint","hexcodes":["#040708"],"removedBackground":false}],"background":"","zoom":1}';

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