var fs = require('fs'),
    fabric = require('fabric').fabric,
    canvas = fabric.createCanvasForNode(300, 250);

var font = new canvas.Font('Ubuntu', __dirname + '/fonts/Ubuntu-Regular.ttf');
font.addFace(__dirname + '/fonts/Ubuntu-Bold.ttf', 'bold');
font.addFace(__dirname + '/fonts/Ubuntu-Italic.ttf', 'normal', 'italic');
font.addFace(__dirname + '/fonts/Ubuntu-BoldItalic.ttf', 'bold', 'italic');

canvas.contextContainer.addFont(font);  // when using createPNGStream or createJPEGStream
//canvas.contextTop.addFont(font);      // when using toDataURL or toDataURLWithMultiplier

var text = new fabric.Text('regular', {
    left: 150,
    top: 50,
    fontFamily: 'Ubuntu'
});
canvas.add(text);

text = new fabric.Text('bold', {
    left: 150,
    top: 100,
    fontFamily: 'Ubuntu',
    fontWeight: 'bold'
});
canvas.add(text);

text = new fabric.Text('italic', {
    left: 150,
    top: 150,
    fontFamily: 'Ubuntu',
    fontStyle: 'italic'
});
canvas.add(text);

text = new fabric.Text('bold italic', {
    left: 150,
    top: 200,
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontStyle: 'italic'
});
canvas.add(text);

var out = fs.createWriteStream(__dirname + '/customfont.png');
var stream = canvas.createPNGStream();
stream.on('data', function(chunk) {
    out.write(chunk);
});