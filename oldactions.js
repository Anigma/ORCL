var CELL_WIDTH = 19;
var CELL_HEIGHT = 19;

var CANVAS_WIDTH = 1200;
var CANVAS_HEIGHT = 540;

var map = [];
var tiles = [];
var tileSrc = [
  "images/grass1.png",
  "images/grass2.png"
];
var imagesReady = 0;

var mapLocation = {
  x: 0,
  y: 0
};

$(document).ready(function() {
  generateMap();
  prepareImages(function() {
    drawCells(document.getElementById('map'));
    //bindEvents();
    setInterval(scrollLeft, 50);
  });
});

function bindEvents() {
  $(document).keyup(function(e){
    switch (e.keyCode) {
      case 38: //up
        scrollDown();
        break;
      case 40: //down
        scrollUp();
        break;
      case 37: //left
        scrollRight();
        break;
      case 39: //right
        scrollLeft();
        break;      
    }
  });
}

function prepareImages(callback) {
  for (var i in tileSrc) {
    var src = tileSrc[i];
    
    var newImg = new Image();
    newImg.src = src;
    
    tiles.push(newImg);
    newImg.onload = function() {
      imagesReady++;
      if (imagesReady == 2) (callback)();
    }
  }
}

function generateMap() {
  map = new Array((CANVAS_HEIGHT / (CELL_HEIGHT+1)));
  
  for (var y = 0;y < (CANVAS_HEIGHT / (CELL_HEIGHT+1));y++) {
    map[y] = new Array((CANVAS_WIDTH / (CELL_WIDTH+1)));
    for (var x = 0;x < (CANVAS_WIDTH / (CELL_WIDTH+1));x++) {
      map[y][x] = Math.floor((Math.random() * 10) % 2);
    }
  }
}

function drawCells(canvas) {
  if (!canvas.getContext)
    return;
    
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#615B56';
  for (var y = 0;y < (CANVAS_HEIGHT / (CELL_HEIGHT+1));y++) {
    for (var x = 0;x < (CANVAS_WIDTH / (CELL_WIDTH+1));x++) {
      //console.log('drawing cell');
      
      var mapCell = map[ (y + mapLocation.y) % (CANVAS_HEIGHT / (CELL_HEIGHT+1)) ]
                 [ (x + mapLocation.x) % (CANVAS_WIDTH / (CELL_WIDTH+1))];
      switch (map[ (y + mapLocation.y) % (CANVAS_HEIGHT / (CELL_HEIGHT+1)) ]
                 [ (x + mapLocation.x) % (CANVAS_WIDTH / (CELL_WIDTH+1))])
      {
        case 0:
          ctx.fillStyle = '#C4182C';
          break;
        case 1:
          ctx.fillStyle = '#1A2687';
          break;
      }

      
      //ctx.fillRect( x * (CELL_WIDTH+1), y * (CELL_HEIGHT+1), CELL_WIDTH, CELL_HEIGHT );
      ctx.drawImage(tiles[mapCell], x * (CELL_WIDTH+1), y * (CELL_HEIGHT+1), CELL_WIDTH, CELL_HEIGHT );
    }
  }
}

function scrollUp() {
  mapLocation.y--;
  if (mapLocation.y < 0) mapLocation.y = (CANVAS_HEIGHT / (CELL_HEIGHT+1));
  drawCells(document.getElementById('map'));
}

function scrollDown() {
  mapLocation.y++;
  mapLocation.y = mapLocation.y % (CANVAS_HEIGHT / (CELL_HEIGHT+1));
  drawCells(document.getElementById('map'));
}

function scrollLeft() {
  mapLocation.x--;
  if (mapLocation.x < 0) mapLocation.x = (CANVAS_WIDTH / (CELL_WIDTH+1));
  drawCells(document.getElementById('map'));
}

function scrollRight() {
  mapLocation.x++;
  mapLocation.x = mapLocation.x % (CANVAS_WIDTH / (CELL_WIDTH+1));
  drawCells(document.getElementById('map'));
}