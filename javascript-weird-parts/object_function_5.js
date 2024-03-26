//object, fucntion and this
console.log(this); //global object in browser is window

function a() {
  console.log(this); //window
  this.newvar = 10; //create nwevar in global object
}

a();

var b = function () {
  console.log(this); // window
};

b();

var c = {
  name: "chandler",
  log: function () {
    var self = this;

    this.name = "updated name";
    console.log(this); //c object not window, because lexical position

    var setname = function (newname) {
      console.log(this); //window object, why?,  I think this is wrong, bad implementation
      //this.name = newname;
      self.name = newname;
    };

    setname("updated name again");
    console.log(this); //c object not window, because lexical position
  },
  //   log1() {
  //     console.log(this); // c object
  //   },
  //   log2: () => {
  //     console.log(this); //be careful, it's window
  //   },
};

c.log();
// c.log1();
// c.log2();
