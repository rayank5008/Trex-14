var box
function setup() {
  createCanvas(800,800);
  box=createSprite(300,300,100,100)
  box.shapeColor='white';
}

function draw() 
{
  
if(keyDown("right")){
  background('red');
}
if(keyDown("left")){
  background('green');
}
  if(keyDown("up")){
  background('yellow')
}
if(keyDown("down")){
  background('blue')
}
  
drawSprites()
}




