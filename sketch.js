var canvas, backgroundImage,space,map,neon,stars,test;
var gameState = "start";
var form;
var playerName,player,playerImage,attack,blue,green,orange,red;
var mapSelect = 1;

function preload(){
  backgroundImage = loadImage("images/Background1.jpg");
  space = loadImage("images/Background2.jpg");
  test = loadImage("images/Testing.jpg");
  stars = loadImage("images/Background4.jpg");
  playerImage = loadImage("images/Player.png");
  //blue = loadImage("images/blue.png");
  //green = loadImage("images/green.png");
  //orange = loadImage("images/orange.png");
  //red = loadImage("images/red.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  form = new Form();
  map = createSprite(width/2,height/2);
  player = createSprite(50,height/2,50,50);
  player.addImage(playerImage);
  player.scale= 0.3;
  attack = createSprite(player.x,player.y,80,5);
  attack.visible = false;
  
  if(mapSelect === 1){
    map.addImage(stars);
  }

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
  
    if(mapSelect === 2){
      map.addImage(test);
    }
  
  }
  if(gameState === "play"){
    form.displayPlayScreen();
    
    map.velocityX = -4;
    if(map.x < 150){
      map.x = width/2;
    }
    player.y = mouseY;

    if(keyDown("space")){
      attack.x = player.x + 50;
      attack.y = attack.y;
      attack.visible = true;
      var rand = Math.round(random(1,4));
      attack.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
/*       switch (rand) {
        case 1:
          attack.addImage(blue);
          break;
        case 2:
          attack.addImage(green);
          break;
        case 3:
          attack.addImage(orange);
          break;
        case 4:
          attack.addImage(red);
          break;

        default:
          break;
      } */
      attack.velocityX = 6;
    }

    drawSprites();
  }
}