var fs = require('fs'),
    fabric = require('fabric').fabric,
    out = fs.createWriteStream(__dirname + '/helloworld.png');

// var canvas = fabric.createCanvasForNode(200, 200);
// var text = new fabric.Text('Hello world', {
//   left: 100,
//   top: 100,
//   fill: '#f55',
//   angle: 15
// });
// canvas.add(text);

// var stream = canvas.createPNGStream();
// stream.on('data', function(chunk) {
//   out.write(chunk);
// });
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // reference canvas element (with id="c")
// var canvasEl = document.getElementById('paper');

// // get 2d context to draw on (the "bitmap" mentioned earlier)
// var ctx = canvasEl.getContext('2d');

// // set fill color of context
// ctx.fillStyle = 'red';

// // create rectangle at a 100,100 point, with 20x20 dimensions
// ctx.fillRect(100, 100, 20, 20);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('paper');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);