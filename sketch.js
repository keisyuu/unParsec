var canvas;
var startAngle;
var angleVel = 0.02;
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background('#eee');
  noStroke();
  startAngle = random(TAU);
}

function draw() {
  background('#eee');
  startAngle += 0.01;
  var angle = startAngle;
  
  //wave1
  angleVel = 0.02;
  fill('#0058A6');
  beginShape();
  vertex(0,height);
  for (var x = 0; x <= width+5; x += 5) {
    var y = map(-sin(angle/5)*sin(angle),-1,1, height/4,height/1.5);
    vertex(x,y);
    angle +=angleVel;
  }
  vertex(width, height);
  endShape();
  
  //wave2
  angleVel = -0.01;
  fill('rgba(81,145,202, 0.8)');
  beginShape();
  vertex(0,height);
  for (var x = 0; x <= width+5; x += 5) {
    var y =  map(sin(-angle/3)*cos(angle),-1,1, height/3,height/1.2);
    vertex(x,y);
    angle +=angleVel;
  } 
  vertex(width,height);
  endShape();
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  resizeCanvas(w,h);
  width = w;
  height = h;
};