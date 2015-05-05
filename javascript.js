var canvas = $("#mainCanvas");
var c = canvas[0].getContext("2d");

var path = "http://wonderfl.net/images/icon/e/ec/ec3c/ec3c37ba9594a7b47f1126b2561efd35df2251bfm";

var image1 = new DragImage(path, 200, 100);
var image2 = new DragImage(path, 300, 100);

var loop = setInterval(function() {

    c.fillStyle = "gray";
    c.fillRect(0, 0, 500, 500);

    image1.update();
    image2.update();
}, 30);

var mouseX = 0,
    mouseY = 0;
var mousePressed = false;
var dragging = false;

var tester = "";

$(document).bind('touchstart', function(e) {

    mousePressed = true;
    $(document).bind('touchmove', touchMoving);
}).bind('touchend', function() {
    mousePressed = false;
    dragging = false;
    $(document).unbind('touchmove', touchMoving);
});

function touchMoving(e){
  e.preventDefault();
	tester = e.originalEvent.touches;
	mouseX = e.originalEvent.touches[0].pageX;
	mouseY = e.originalEvent.touches[0].pageY;
}

function DragImage(src, x, y) {
    var that = this;
    var startX = 0,
        startY = 0;
    var drag = false;

    this.x = x;
    this.y = y;
    var img = new Image();
    img.src = src;
    this.update = function() {
        if (mousePressed ) {

                var left = that.x;
                var right = that.x + img.width;
                var top = that.y;
                var bottom = that.y + img.height;
                if (!drag) {
                    startX = mouseX - that.x;
                    startY = mouseY - that.y;
                }
                if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top) {
                    if (!dragging){
                        dragging = true;
                        drag = true;
                    }

                }
                if (drag) {
                    that.x = mouseX - startX;
                    that.y = mouseY - startY;
                }
        } else {
            drag = false;
        }

        c.drawImage(img, that.x, that.y);
    }
}
