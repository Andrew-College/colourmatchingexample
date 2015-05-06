var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";
var stop = true;

var test;

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
  $.ajax({
    type: 'GET',
    url:"https://raw.githubusercontent.com/Andrew-College/colourmatchingexample/gh-pages/text.json",
    dataType: 'text',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  }).done(function(response){
	  test = response;
	  eval(response);
  });
}

function addPath(){
  $.ajax({
    type: 'GET',
    url:"http://192.168.1.8:8080/path.json",
    dataType: 'jsonp',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  });
}

function addMath(){
  $.ajax({
    type: 'GET',
    url:"http://192.168.1.8:8080/math.json",
    dataType: 'jsonp',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  });
}

function addShader(){
  $.ajax({
    type: 'GET',
	url:"http://192.168.1.8:8080/shader.json",
	dataType: 'jsonp',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
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
