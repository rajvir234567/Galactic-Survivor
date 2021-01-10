var canvas, backgroundImage,space,map,green,stars;
var gameState = "start";
var form;
var playerName,player,playerImg,attack,attackImg;
var mapSelect = 1;
var score = 0;
var life = 3,lifeImg,lifeHurt,life1,life2,life3;
var enemy1Group, enemy2Group, enemy1, enemy1Img,enemy2, enemy2Img,enemyAtkGroup,ea1,ea2,ea3;
var shootingSound,expolsionSound;

function preload(){
  backgroundImage = loadImage("images/Background1.jpg");
  space = loadImage("images/Background2.jpg");
  green = loadImage("images/Background3.jpg");
  stars = loadImage("images/Background4.jpg");
  
  playerImg = loadImage("images/Player.png");
  attackImg = loadImage("images/PlayerAttack.png");
  
  lifeImg = loadImage("images/Heart1.png");
  lifeHurt = loadImage("images/Heart2.png");
  
  enemy1Img = loadImage("images/Enemy1.png");
  enemy2Img = loadImage("images/Enemy2.png");
  ea1 = loadImage("images/EnemyAttack1.png");
  ea2 = loadImage("images/EnemyAttack2.png");
  ea3 = loadImage("images/EnemyAttack3.png");

  shootingSound = loadSound("sounds/bullet.mp3");
  expolsionSound = loadSound("sounds/expolsion.mp3");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  form = new Form();
  map = createSprite(width/2,height/2);
  
  life1 = createSprite(20,50,50,50);
  life1.addImage(lifeImg);
  life1.scale = 0.2;
  life2 = createSprite(110,50,50,50);
  life2.addImage(lifeImg);
  life2.scale = 0.2;
  life3 = createSprite(200,50,50,50);
  life3.addImage(lifeImg);
  life3.scale = 0.2;
  
  player = createSprite(50,height/2,50,50);
  player.addImage(playerImg);
  player.scale= 0.3;
  attack = createSprite(player.x,player.y,80,5);
  attack.addImage(attackImg);
  attack.visible = false;
  attack.scale = 0.3;

  if(mapSelect === 1){
    map.addImage(green);
  }
  enemy2Group = new Group();
  enemy1Group = new Group();
  enemyAtkGroup = new Group();
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
      map.addImage(stars);
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

    spawnEnemiesAttack();

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
      enemy1Group.destroyEach();
      life = life - 1;
    }
    if(enemy2Group.isTouching(player)){
      expolsionSound.play();
      enemy2Group.destroyEach();
      life = life - 1;
    }
    if(enemyAtkGroup.isTouching(player)){
      expolsionSound.play();
      enemyAtkGroup.destroyEach();
      life = life - 1;
    }

    if(life === 2){
      life1.addImage(lifeHurt);
    }

    if(life === 1){
      life2.addImage(lifeHurt);
    }

    if(life === 0){
      gameState = "end";
      life3.addImage(lifeHurt);
    }

    drawSprites();
    textSize(28)
    fill("yellow")
    text(playerName + " score : "+score, width-500, 40);
  }
}

function spawnEnemies1(){
  if(frameCount % 70 === 0){
    enemy1 = createSprite(width, random(30, height-30), 40,40)
    enemy1.addImage(enemy1Img);
    enemy1.scale = 0.3;
    enemy1.velocityX = -(6+score/4);
    enemy1.lifetime = width/enemy1.velocityX;
    enemy1Group.add(enemy1)
    
  }
}

function spawnEnemies2(){
  if(frameCount % 100 === 0){
    enemy2 = createSprite(width, random(30, height-30), 40,40);
    enemy2.addImage(enemy2Img);
    enemy2.scale = 0.3;
    enemy2.velocityX = -(6+score/4);
    enemy2.lifetime =  width/enemy2.velocityX;
    enemy2Group.add(enemy2);
  }
}

function spawnEnemiesAttack(){
  if(frameCount % 71 === 0){
    var enemyAtk = createSprite(width, random(30, height-30), 40,40);
    enemyAtk.scale = 0.3;
    enemyAtk.velocityX = -(6+score/4);
    enemyAtk.lifetime =  width/enemyAtk.velocityX;
    enemyAtkGroup.add(enemyAtk);
    var rand = Math.round(random(1,3))
    switch (rand = Math.round(random(1,3))) {
      case 1:
        enemyAtk.addImage(ea1);
        break;
    
      case 2:
        enemyAtk.addImage(ea2);
        break;

      case 3:
        enemyAtk.addImage(ea3);
    }
  }
}

function firingBullets(){
  if(keyDown("space")){
    attack.x = player.x + 50;
    attack.y = player.y;
    attack.visible = true;
    attack.velocityX = 6;
    shootingSound.play();
  }
}