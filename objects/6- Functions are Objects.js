function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

Circle.call({});

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
this.draw = function(){
  console.log('draw');
}`
);

const circle = new Circle(1);

const another = new Circle(1);
