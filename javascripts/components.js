var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");

var $draggable = $('.draggable').draggabilly({
  // options...
})

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";
var image1 = new Image(path);
var image2 = new Image(path);

function Element(path){
  var that = this;
  var img = new Image();
  img.src = path;


}

function loader(){
  console.log("loading");
  $.ajax({
    type: 'GET',
    url:"http://raw.githubusercontent.com/Andrew-College/HTMLDragTester/master/webpage.html",
    data: null,
    dataType: 'text',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    }
  }).done(function( data ) {
    if ( console && console.log ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
    }
  }).fail(function(x,h,r){
    console.log("error");
    console.log(x.responseText);
    console.log("========");
  });
}
