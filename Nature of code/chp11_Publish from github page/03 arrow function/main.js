const s = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(600, 400);
    sketch.background(150);
  };

  sketch.draw = () => {
    sketch.noStroke();
    sketch.fill(255);
    sketch.ellipse(200, 200, 50, 50);
  };
};

new p5(s, "container");
