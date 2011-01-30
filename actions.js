var canvas = null;
var core = null;
var dataSource = null;
var tileLayer = null;
var scrollLayer = null;
var input = null;

function init() {
  canvas = document.getElementById('map');
  buffer = document.getElementById('buffer');

  core = new GGraphicsCore(canvas.getContext('2d'), buffer.getContext('2d'));
  //dataSource = new GTileLayerDataSource();
  //dataSource = new CMTileLayerRandomDataSource({width: 100, height: 100}, ['images/grass1.png', 'images/grass2.png']);
  dataSource = new CMScrollLayerRandomDataSource({width: 5000, height: 500}, ['images/grass1.png', 'images/grass2.png']);

  //tileLayer = new GTileLayer(dataSource);
  //core.addLayer(tileLayer);
  scrollLayer = new GScrollLayer(dataSource);
  core.addLayer(scrollLayer);
  
  core.timer.events.addListener('tick', function() {
    scrollLayer.scroll({x: 1, y: 0});
  });
  
  core.timer.start();

  input = new GInputController();
  input.events.addListener('keyup', function(e) {
    console.log(e);
    switch (e.args.keyCode) {
    case 37:
      scrollLayer.scroll({x: -1, y: 0});
      break;
    case 38:
      scrollLayer.scroll({x: 0, y: 1});
      break;
    case 39:
      scrollLayer.scroll({x: 1, y: 0});
      break;
    case 40:
      scrollLayer.scroll({x: 0, y: -1});
    }
  });
}
