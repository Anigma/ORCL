CMScrollLayerRandomDataSource = Class.create(GScrollLayerDataSource, {
  initialize: function($super, size, images) {
    $super();
    
    this.images = [];
    this.imageSrc = images;

    this.size = size;
    
    this.prepareImages();
    this.generateData(size, 5000);
  },
  prepareImages: function() {
    for (var i = 0;i < this.imageSrc.length;i++) {
      var img = new Image();
      img.src = this.imageSrc[i];

      this.images.push(img);
    }
    this.imageSrc = [];
  },
  generateData: function(size, num) {
    for (var i = 0;i < num;i++) {
      var x = Math.floor((Math.random() * 10000) % size.width);
      var y = Math.floor((Math.random() * 10000) % size.height);
      
      if (x > 1200) console.log('yes');
      var item = {
        position: {x: x, y: y},
        image: this.images[Math.floor(Math.random() * 1000) % this.images.length]
      };
      
      this.data.push(item);
    }
  }
});
