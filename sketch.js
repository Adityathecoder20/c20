var mr,fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(400, 100, 80, 80);          
}
function draw() {
  background(255,255,255);
  mr.x = mouseX;
  mr.y = mouseY;
  if (mr.x - fr.x <= mr.width/2 + fr.width/2 &&
    fr.x - mr.x <= mr.width/2 + fr.width/2 &&
    fr.y - mr.y <= mr.height/2 + fr.width/2 &&
    mr.y - fr.y <= fr.width/2 + mr.height/2 ){
   mr.shapeColor = "red";
   fr.shapeColor = "red";
  }
  else {
   mr.shapeColor = "green";
   fr.shapeColor = "green";
  }
  drawSprites();
}
