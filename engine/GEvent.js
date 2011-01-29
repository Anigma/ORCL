GEvent = Class.create({
  initialize: function(args, name) {
    if (args.name == undefined) {
      args.name = name;
    }

    this.args = args;
  }
});
