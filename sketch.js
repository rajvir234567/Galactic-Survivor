var canvas, backgroundImage,space;
var gameState = "start";
var form;
var playerName;
var neon;

function preload(){
  backgroundImage = loadImage("images/Background1.jpg");
  space = loadImage("images/Background2.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  form = new Form();
  neon = createSprite(width/2,height/2);
}

function draw(){
  if(gameState === "start"){
    form.display();
  }
  if(gameState === "how"){
    form.displayHowScreen();
  }
  if(gameState ===  "map"){
    form.displayMapScreen();
  }
  if(gameState === "play"){
    drawSprites();
  }
}