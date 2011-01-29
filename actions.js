var canvas = null;
var core = null;
var dataSource = null;
var tileLayer = null;
var input = null;

function init() {
  canvas = document.getElementById('map');

  core = new GGraphicsCore(canvas.getContext('2d'));
  //dataSource = new GTileLayerDataSource();
  dataSource = new CMTileLayerRandomDataSource({width: 100, height: 100}, ['images/grass1.png', 'images/grass2.png']);

  tileLayer = new GTileLayer(dataSource);
  core.addLayer(tileLayer);
  core.timer.start();

  input = new GInputController();
  input.events.addListener('keyup', function(e) {
    console.log(e);
    switch (e.args.keyCode) {
    case 37:
      tileLayer.scroll({x: -1, y: 0});
      break;
    case 38:
      tileLayer.scroll({x: 0, y: 1});
      break;
    case 39:
      tileLayer.scroll({x: 1, y: 0});
      break;
    case 40:
      tileLayer.scroll({x: 0, y: -1});
    }
  });
}
