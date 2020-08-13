
var movingobj, fixedobj

function setup(){
  createCanvas(800,800);
 
  movingobj =  createSprite(200,100,50,50)
  fixedobj = createSprite(300,200,50,50)
  movingobj.shapeColor = "green"
  fixedobj.shapeColor = "green"
  movingobj.debug = true;
  fixedobj.debug = true;
}

function draw(){
  background(0)

movingobj.x = mouseX;
movingobj.y = mouseY;

console.log(movingobj.width/2  +  fixedobj.width/2);
console.log ( movingobj.x - fixedobj.x )

isTouching();

  drawSprites();
}

function isTouching(){
  if(movingobj.x - fixedobj.x < movingobj.width/2  +  fixedobj.width/2
    && fixedobj.x - movingobj.x < movingobj.width/2  +  fixedobj.width/2
    && movingobj.y - fixedobj.y < movingobj.width/2  +  fixedobj.width/2
    && fixedobj.y - movingobj.y < movingobj.width/2  +  fixedobj.width/2)
  {
    movingobj.shapeColor = "red"
    fixedobj.shapeColor = "red"
  }
  else{
    movingobj.shapeColor = "green"
    fixedobj.shapeColor = "green"
  }
}