// var canvas = new fabric.Canvas("mycanvas");
// canvas.selection = true;

// var rect = new fabric.Rect({
//     left: 100,
//     top:100,
//     fill: "red",
//     width: 100,
//     height: 100
// });

// var circle = new fabric.Circle({
//     left: 100,
//     top: 100,
//     radius: 50,
//     fill: 'green'
// });

// var line = new fabric.Line([0, 0, 80, 60], {
//     left: 100,
//     top: 100,
//     stroke: 'rgba(0,0,0,1)',
//     strokeWidth: 5
// });

// var triangle = new fabric.Triangle({
//     left: 100,
//     top: 100,
//     width: 70,
//     height: 70,
//     angle: 0,
//     fill: "blue"
// })

// var src = "http://fabricjs.com/assets/pug.jpg";
// fabric.util.loadImage(src, function(img) {
//     var oImg = new fabric.Image(img);
//     oImg.scale(0.2).set({
//         left: 300,
//         top: 300
//     });
//     canvas.add(oImg);
//     // proceed();
// });

// var json = '{"objects":[{"type":"path","left":104,"top":96,"width":99,"height":115,"fill":"#00274D","overlayFill":null,"stroke":null,"strokeWidth":1,"scaleX":1.04,"scaleY":1.04,"angle":-25.8,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"path":[["M",67.39,22.39],["c",2.59,-0.43,5.11,1.44,5.54,4.18],["c",0.43,2.66,-1.3,5.26,-3.89,5.69],["c",-1.8,0.29,-3.6,-0.58,-4.61,-2.02],["L",44.5,34.56],["l",10.87,59.62],["c",17.42,-4.46,26.06,-14.18,27.5,-29.02],["l",-10.01,-0.72],["L",88.7,51.91],["l",9.43,21.24],["c",-3.38,-1.95,-5.9,-5.11,-9.29,-7.06],["c",-0.29,25.06,-27.14,32.76,-33.77,47.95],["C",44.42,100.08,26.5,114.77,6.91,82.8],["L",0,92.45],["l",1.51,-21.6],["l",19.66,4.68],["l",-9.43,3.67],["c",7.49,11.59,17.57,19.87,36.43,16.42],["L",36.22,36.57],["l",-18.65,2.38],["c",-0.14,2.16,-1.73,4.03,-3.89,4.39],["c",-2.59,0.43,-5.04,-1.44,-5.54,-4.1],["c",-0.43,-2.74,1.3,-5.26,3.89,-5.69],["c",1.94,-0.36,3.89,0.65,4.9,2.3],["l",17.93,-4.82],["l",-1.37,-6.84],["c",-4.82,-0.79,-8.93,-4.75,-9.79,-10.08],["c",-1.15,-6.62,3.1,-12.89,9.43,-13.97],["c",6.41,-1.01,12.46,3.46,13.54,10.08],["c",0.86,5.18,-1.58,10.15,-5.69,12.6],["l",1.87,6.12],["l",20.74,-2.88],["C",64.01,24.26,65.52,22.75,67.39,22.39],["L",67.39,22.39],["z"],["M",33.91,5.18],["c",-3.46,0.58,-5.76,3.96,-5.11,7.56],["c",0.58,3.6,3.89,6.05,7.27,5.47],["c",3.46,-0.58,5.76,-3.96,5.18,-7.56],["C",40.61,7.05,37.37,4.61,33.91,5.18],["z"]]}],"background":"rgba(0, 0, 0, 0)"}';

// canvas.loadFromDatalessJSON(json, proceed);

// fabric.loadSVGFromURL('http://fabricjs.com/assets/15.svg', function(ob,op){
//   canvas.add(new fabric.PathGroup(ob, op).set({ left: 100, top: 100 }).scale(0.4));
//   proceed();
// });

// canvas.add(rect);
// canvas.add(circle);
// canvas.add(line);
// canvas.add(triangle);

//code for canvas2

var canvas2 = new fabric.Canvas("mycanvas2");

//draw a line
// var line = new fabric.Line([0, 0, 120, 60], {
//     left: 100,
//     top: 100,
//     stroke: 'rgba(255,0,0, 0.5)',
//     fill: 'red'
// })

var rect = new fabric.Rect({
    left: 200,
    top: 100,
    width: 100,
    height: 100,
    fill: "blue"
})

var triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    fill: "red"
})


//add to canvas area
// canvas2.add(line);
canvas2.add(rect);
canvas2.add(triangle);

//function to change color
$("#changeColor").on("click", function(){
    rect.set("fill", () => rect.get("fill") === "red" ? "blue" : "red");
    triangle.set("fill", () => triangle.get("fill") === "red" ? "blue" : "red" )
    canvas2.add(rect);
    canvas2.add(triangle);
})

$("#getPos").on("click", () => {
    $("#triangle_left").text(triangle.get("left"))
});

$("#animate").on("click", () => {
    rect.animate("angle", rect.get("angle") + 45, {
        onChange: canvas2.renderAll.bind(canvas2)
    })
});

$("#randomPos").on("click", () => {
    rect.set("top", () => Math.random()*20 + Math.random()* 50);
    rect.set("left", () => Math.random()*300 + Math.random()*100 + Math.random()*20 + Math.random()*100);
    triangle.set("top", () => Math.random()*40 + 50 + Math.random()*20 + Math.random()*100)
    triangle.set("left", () => Math.random()*40 + 50)

    canvas2.add(rect);
    canvas2.add(triangle);
})

//disable canvas2 selection
canvas2.selection = true;
rect.selectable = true;

//image

src = "https://res.cloudinary.com/nbfiles/image/fetch/q_auto,f_auto,fl_lossy/https://imprint.com/templates/mobile2015/images/logo.png?v=2";
var imageCanvas = new fabric.Canvas("my_image_canvas");
fabric.Image.fromURL(src, (oImg) => {
    imageCanvas.add(oImg);

    $("#my_image_canvas_right").on("click", () => {
        let coord = oImg.get("left");
        oImg.set("left", coord + 10);
        imageCanvas.add(oImg);
    });

    $("#my_image_canvas_left").on("click", () => {
        let coord = oImg.get("left");
        oImg.set("left", coord - 10);
        imageCanvas.add(oImg);
    });

    $("#my_image_canvas_rotate_right").on("click", () => {
        let angle = oImg.get("angle");
        oImg.set("angle", angle + 10);
        imageCanvas.add(oImg);
        
    });

    $("#my_image_canvas_rotate_left").on("click", () => {
        let angle = oImg.get("angle");
        oImg.set("angle", angle - 10);
        imageCanvas.add(oImg);
    });

    $("#my_image_canvas_zoom_in").on("click", () => {
        let scaleX = oImg.get("scaleX");
        let scaleY = oImg.get("scaleY");
        oImg.set("scaleX", scaleX + 0.1);
        oImg.set("scaleY", scaleY + 0.1);
        imageCanvas.add(oImg);
    });

    $("#my_image_canvas_zoom_out").on("click", () => {
        let scaleX = oImg.get("scaleX");
        let scaleY = oImg.get("scaleY");
        oImg.set("scaleX", scaleX - 0.1);
        oImg.set("scaleY", scaleY - 0.1);
        imageCanvas.add(oImg);
    });

    $("#my_image_canvas_reset").on("click", () => {
        oImg.set({left: 160, top: 50, angle: 0, scaleX: 1, scaleY: 1});
        imageCanvas.add(oImg);
    });
},{
    left: 160,
    top: 50
})

//path

var pathCanvas = new fabric.Canvas("my_path");
var path = new fabric.Path("M 0 0 L 100 100 L 0 100 z");

path.set({fill: "red"})
pathCanvas.add(path);


//loadFromJson

const jsonCanvas = new fabric.Canvas("my_json");
const jsonString = '{"objects":[{"type":"image","originX":"left","originY":"top","left":5.09,"top":46.7,"width":500,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.23,"scaleY":1.23,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":5.0873845786413,"original_top":46.699513972483,"original_scaleX":1.2276377938858,"original_scaleY":1.2276377938858,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":true,"src":"https://nbpublic.s3.amazonaws.com/product_cliparts/nature/flower/bDnBmeDhyc55378342bf7da_thumb.png?v=1533620484","filters":[],"crossOrigin":"anonymous","alignX":"none","alignY":"none","meetOrSlice":"meet","imageType":"Stock","cloudinarySrc":"","filterType":"Tint","hexcodes":["#FFFDFD","#FF73A3","#D1D878","#FABA72"],"removedBackground":false},{"type":"image","originX":"left","originY":"top","left":596,"top":46.59,"width":500,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.23,"scaleY":1.23,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":595.99768340351,"original_top":46.593654080146,"original_scaleX":1.2276377938858,"original_scaleY":1.2276377938858,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":true,"src":"https://nbpublic.s3.amazonaws.com/product_cliparts/nature/flower/bDnBmeDhyc55378342bf7da_thumb.png?v=1533620484","filters":[],"crossOrigin":"anonymous","alignX":"none","alignY":"none","meetOrSlice":"meet","imageType":"Stock","cloudinarySrc":"","filterType":"Tint","hexcodes":["#FFFDFD","#FF73A3","#D1D878","#FABA72"],"removedBackground":false},{"type":"image","originX":"left","originY":"top","left":228.81,"top":201.39,"width":500,"height":500,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1.26,"scaleY":0.6,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":228.8125,"original_top":201.38509656161,"original_scaleX":1.25875,"original_scaleY":0.60242973576949,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":false,"src":"https://nbpublic.s3.amazonaws.com/product_cliparts/most-popular/HfhlAohkgE55035309b9946_thumb.png?v=0.9847660759261536","filters":[{"type":"Tint","color":"#ffffff","opacity":1}],"crossOrigin":"anonymous","alignX":"none","alignY":"none","meetOrSlice":"meet","imageType":"Stock","cloudinarySrc":"","filterType":"Tint","hexcodes":["#040708"],"removedBackground":false},{"type":"text","originX":"left","originY":"top","left":333.67,"top":270.86,"width":169.47,"height":30,"fill":"#7d0042","stroke":null,"strokeWidth":0.5,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":2.48,"scaleY":2.48,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":333.66509187246,"original_top":270.85848276041,"original_scaleX":2.4763989503282,"original_scaleY":2.4763989503282,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":true,"text":"BABY SHOWER","fontSize":30,"fontWeight":"normal","fontFamily":"impactregular","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"left","path":null,"textBackgroundColor":"","useNative":true},{"type":"text","originX":"left","originY":"top","left":374.76,"top":343.77,"width":71.64,"height":30,"fill":"#b0006d","stroke":null,"strokeWidth":0.5,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":4.46,"scaleY":4.46,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","original_left":374.75811738516,"original_top":343.77,"original_scaleX":4.46,"original_scaleY":4.46,"original_zoom":1,"original_init":0,"objectType":"","objectShape":"","lockUniScaling":true,"text":" SOPHIA","fontSize":30,"fontWeight":"normal","fontFamily":"eccentricstd","fontStyle":"","lineHeight":1,"textDecoration":"","textAlign":"left","path":null,"textBackgroundColor":"","useNative":true}],"background":"","zoom":1}';
