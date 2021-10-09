function setup() {
  cnv = createCanvas(800, 800);
  cnv.parent('ellipse_test');
}


function draw() {
  background(0);
  ellipse(mouseX, mouseY, 50);
}