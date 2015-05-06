var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");
c.imageSmoothingEnabled = false;

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";
var stop = true;



$(document)
.ready(checkerBackground())
.resize(checkerBackground());


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
function addMisc(){
	var text = webpage({
		  "text" :
		  "<div id='text' class='first'><div>text</div><div><div class='edge'>files<div>hello</div></div><div class='center'>files<div>hello</div></div><div class='edge'>files<div>hello</div></div></div></div>"
		});
}

function addText(){

	$('#logging').append($.parseHTML("<div id='text' class='first container'><div><div style='display: inline-block;'>text</div><div style='display: inline-block;float: right; cursor: pointer;' onclick='deleteThis(this)'>X</div></div><div><div class='edge'><div>o</div></div><div class='center'><div style='padding-left: 5%;padding-right: 5%;'><input type='text'style='width: 100%;'></div></div><div class='edge'><div>o</div></div></div></div>"));
	  dragger();
}

function addPath(){
	$('#logging').append($.parseHTML("<div id='path' class='first container'><div><div style='display: inline-block;'>path</div><div style='display: inline-block;float: right; cursor: pointer;' onclick='deleteThis(this)'>X</div></div><div><div class='edge'><div>o</div></div><div class='center'><div style='padding-left: 5%;padding-right: 5%;'><input type='text'style='width: 100%;'></div></div><div class='edge'><div>o</div></div></div></div>"));
	  dragger();
}

function addMath(){
    $('#logging').append($.parseHTML("<div id='math' class='first container'><div><div style='display: inline-block;'>math</div><div style='display: inline-block;float: right; cursor: pointer;' onclick='deleteThis(this)'>X</div></div><div><div class='edge'><div>o</div><div>o</div></div><div class='center'><div><select><option value='Add'>Add</option><option value='Subtract'>Subtract</option><option value='Multiply'>Multiply</option><option value='Divide'>Divide</option><option value='Modulo'>Modulo</option><option value='Exponent'>Exponent</option></select></div></div><div class='edge'><div>o</div></div></div></div>"));
  	  dragger();
}

function addShader(){
  $('#logging').append($.parseHTML("<div id='shader' class='first container'><div><div style='display: inline-block;'>shader</div><div style='display: inline-block;float: right; cursor: pointer;' onclick='deleteThis(this)'>X</div></div><div><div class='edge'><div>o</div></div><div class='center'><div style='padding-left: 5%;padding-right: 5%;'><input type='text'style='width: 100%;'></div></div><div class='edge'><div>o</div></div></div></div>"));
	  dragger();
}

function dragger(){
	$('.first').draggabilly({
	    // options...
	  });
}

function checkerBackground(){
	console.log("checker");
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

var test;

function deleteThis(object){
  $(object).parent().parent().remove();
}

$(window).bind('resize', function () {
    checkerBackground();
}).trigger('resize');
