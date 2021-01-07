var canvas, backgroundImage,space,map,neon,stars,test;
var gameState = "start";
var form;
var playerName,player,playerImage,attack,blue,green,orange,red;
var mapSelect = 1;
var score = 0;
var life = 3,lifeImage;
var enemy1Group, enemy2Group, enemy1, enemy1Img,enemy2, enemy2Img;


var shootingSound,expolsionSound;

function preload(){
  backgroundImage = loadImage("images/Background1.jpg");
  space = loadImage("images/Background2.jpg");
  test = loadImage("images/Testing.jpg");
  stars = loadImage("images/Background4.jpg");
  playerImage = loadImage("images/Player1.png");
  //blue = loadImage("images/blue.png");
  //green = loadImage("images/green.png");
  //orange = loadImage("images/orange.png");
  //red = loadImage("images/red.png");
  lifeImage = loadImage("images/Heart1.png");
  enemy1Img = loadImage("images/enemy1.png");
  enemy2Img = loadImage("images/enemy2.png");

  shootingSound = loadSound("sounds/bullet.mp3");
  expolsionSound = loadSound("sounds/expolsion.mp3");
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

  enemy2Group = new Group();
  enemy1Group = new Group();

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
  if(gameState === "end"){
    background(0)
    textSize(30)
    fill("white")
    text("GAME OVER",width/2 - 50, height/2);
    text("Better Luck Next Time "+playerName,width/2 - 100, height/2 + 50);
  }
  if(gameState === "play"){
    form.displayPlayScreen();
    
    map.velocityX = -(6+score/4)
    if(map.x < 150){
      map.x = width/2;
    }
    player.y = mouseY;

    spawnEnemies1();

    spawnEnemies2();

    firingBullets()

    if(attack.isTouching(enemy1Group)){
      expolsionSound.play();
      enemy1Group.destroyEach();
      score = score + 10;
      attack.visible = false;
    }

    if(attack.isTouching(enemy2Group)){
      expolsionSound.play();
      enemy2Group.destroyEach();
      score = score + 20;
      attack.visible = false;
    }

    if(enemy1Group.isTouching(player)){
      expolsionSound.play();
      life = life - 1;
    }

    if(life === 0){
      gameState = "end"

    }

    drawSprites();
    textSize(28)
    fill("yellow")
    text(playerName + " score : "+score, width-500, 40);

    for (var i = 0; i < life; i++) {
      image(lifeImage, 30 + (i * 70),40,50,50);
    }
  }
}

function spawnEnemies1(){
  if(frameCount % 70 === 0){
    enemy1 = createSprite(width, random(30, height-30), 40,40)
    enemy1.addImage(enemy1Img)
    enemy1.shapeColor = "red"
    enemy1.velocityX = -(6+score/4);
    enemy1.lifetime = width/enemy1.velocityX;
    enemy1Group.add(enemy1)
    
  }
}

function spawnEnemies2(){
  if(frameCount % 100 === 0){
    enemy2 = createSprite(width, random(30, height-30), 40,40);
    enemy2.addImage(enemy2Img)
    enemy2.shapeColor = "black"
    enemy2.velocityX = -(6+score/4);
    enemy2.lifetime =  width/enemy2.velocityX;
    enemy2Group.add(enemy2);
  }
}

function firingBullets(){
  if(keyDown("space")){
    attack.x = player.x + 50;
    attack.y = player.y;
    attack.visible = true;
    var rand = Math.round(random(1,4));
    attack.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
    attack.velocityX = 6;

    shootingSound.play();

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
    
  }
}