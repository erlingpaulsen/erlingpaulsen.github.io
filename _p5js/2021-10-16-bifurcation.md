---
title: "Bifurcation"
date: 2021-10-16
---

<style type="text/css">
   div {border-radius:4px;}
</style>

<div id="bifurcation">
    <script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.min.js"></script>
    <script language="javascript" type="text/javascript" src="/assets/p5js/bifurcation.js"></script>
</div>

The above sketch shows the bifurcation diagram for the logistic map
<div>
$$
x_{n+1} = Rx_n(1-x_n)
$$
</div>
for <span>$3.4 \leq R \leq 4.0$</span> using <span>n=500</span> iterations for each value <span>R_i</span>, with increments of <span>R_{step}=0.0001</span>. To only plot the steady-state values of <span>x_n</span> whenever the equation is non-chaotic, only the last <span>k=200</span> iterations are plotted for each <span>R_i</span>. The initial value of the logistic map is set to <span>x_0=0.5</span> for each <span>R_i</span>.

### Source code

```javascript
// Parameters
let x_0 = 0.5;
let R_min = 3.4;
let R_max = 4.0;
let R_step = 0.0001;
let R_i;
let n = 500;
let k = 200;
let alpha = 10;

function setup() {
  createCanvas(800, 600);
  frameRate(24);
  colorMode(HSB, height, 100, 100, 100);
  background(0);
  strokeWeight(0);
  noFill();
  R_i = R_min;
}

function draw() {
  if (R_i <= R_max) {
    for (let j = 0; j < 15; j++) {
      let bifurcation = log_map(x_0, R_i, n).slice(k);
      
      for(let i = 0; i < bifurcation.length; i++) {
        xi = map(R_i, R_min, R_max, 0, width);
        yi = map(bifurcation[i], 0, 1, 0, height);
        stroke(yi, 100, 100, alpha);
        point(xi, yi);
      }
      
      R_i += R_step;
    }
  }
}

// Logistic map function
function log_map(x_0, R, n) {
  let xs = [];

  let x_n = x_0;
  for(i = 0; i < n + 1; i++) {
    xs.push(x_n);
    x_n = float(R) * float(x_n) * (1 - float(x_n));
  }

  return xs;
}
```
