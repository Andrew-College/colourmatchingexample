var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";
var stop = true;










$(document).resize(checkerBackground());

function Element(path){
  var that = this;
  var img = new Image();
  img.src = path;
}

function webpage(json){
  var newElement = $.parseHTML(json.text);
  $('#logging').append(newElement);
  $('.first').draggabilly({
    // options...
  });
}

function addText(){
	var text = webpage({
		  "text" :
		  "<div id='text' class='first'><div></div><div><div class='edge'>files<div>hello</div></div><div class='center'>files<div>hello</div></div><div class='edge'>files<div>hello</div></div></div></div>"
		});
}

function addPath(){
	var path = webpage({
		  "text" :
		  "<div id='path' class='first'><div></div><div><div class='edge'>files<div>goodbye</div></div><div class='center'>files<div>hello</div></div><div class='edge'>files<div>hello</div></div></div></div>"
		});
}

function addMath(){
	var math = webpage({
		  "text" :
		  "<div id='math' class='first'><div></div><div><div class='edge'>files<div>goodbye</div></div><div class='center'><div><select><option value='Add'>Add</option><option value='Subtract'>Subtract</option><option value='Multiply'>Multiply</option><option value='Divide'>Divide</option><option value='Modulo'>Modulo</option><option value='Exponent'>Exponent</option></select></div></div><div class='edge'>files<div>hello</div></div></div></div>"
		});
}

function addShader(){
	var shader = webpage({
		  "text" :
		  "<div id='shader' class='first'><div></div><div><div class='edge'>files<div>goodbye</div></div><div class='center'>files<div>hello</div></div><div class='edge'>files<div>hello</div></div></div></div>"
		});
}

function checkerBackground(){
  var blockSize = 10;
  var flipflop = true;
  for(var i = 0; i < $('#mainCanvas').width(); i += blockSize){
    for(var j = 0; j < $('#mainCanvas').height(); j += blockSize){
      c.fillStyle = (flipflop ? "grey":"white");
      c.fillRect(i,j,i+blockSize,j+blockSize);
      flipflop = !flipflop;
    }
    flipflop = !flipflop;
  }
}
