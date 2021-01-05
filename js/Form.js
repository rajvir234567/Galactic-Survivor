class Form {

  constructor() {
    
    //Menu Screen
    this.input = createInput("Enter your Name");
    this.button = createButton('Play');
    this.how = createButton('How to play');
    this.options = createButton("Select Map");
    this.title = createElement('h2');
    
    //How to Play Screen
    this.play = createElement('h2');
    this.space = createElement('h2');
    this.explain = createElement('h2');
    this.mouse = createElement('h2');
    this.explain2 = createElement('h2');
    
    //Select Map Screen
    this.mapTitle = createElement('h2');
    this.map1 = createButton('Neon System');
    this.map2 = createButton('Star Filled Void');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.how.hide();
    this.options.hide();
    this.title.hide();
    this.play.hide();
    this.space.hide();
    this.explain.hide();
    this.mouse.hide();
    this.explain2.hide();
    this.mapTitle.hide();
    this.map1.hide();
    this.map2.hide();
  }

  display(){
    background(backgroundImage);

    this.title.html("GALACTIC SURVIVOR");
    this.title.position(displayWidth/2 - 200, 0);
    this.title.style("color","#0CFFE1");
    this.title.style("font-size","38px");
    this.title.style("font-family","Comic Sans MS");
    this.title.style("font-weight","bold");

    this.input.position(displayWidth/2 - 140 , displayHeight/2 - 140);
    this.input.style("height","40px")
    this.input.style("weight","80px")
    this.input.style("font-size","28px");
    this.input.style("color","#0CFFE1");
    this.input.style("border-radius", "15px")
    this.input.style("border-color", "#0CFFE1")
    this.input.style("background-color", "#483C6E")

    this.button.position(displayWidth/2 + 70, displayHeight/2-40);
    this.button.style("font-size","38px");
    this.button.style("height","60px")
    this.button.style("weight","80px")
    this.button.style("font-family","Castellar");
    this.button.style("font-weight","2");
    this.button.style("border-radius","8px");
    this.button.style("border-color","#0CFFE1");
    this.button.style("background-color","#FF217C");

    this.how.position(displayWidth/2 - 155, displayHeight/2+100);
    this.how.style("font-size","30px");
    this.how.style("height","60px")
    this.how.style("weight","80px")
    this.how.style("font-family","MV Boli");
    this.how.style("font-weight","2");
    this.how.style("border-radius","8px");
    this.how.style("border-color","#0CFFE1");
    this.how.style("background-color","#483C6E");

    this.options.position(displayWidth/2 + 85, displayHeight/2+100);
    this.options.style("font-size","30px");
    this.options.style("height","60px")
    this.options.style("weight","80px")
    this.options.style("font-family","MV Boli");
    this.options.style("font-weight","2");
    this.options.style("border-radius","8px");
    this.options.style("border-color","#0CFFE1");
    this.options.style("background-color","#483C6E");
    
    this.button.mousePressed(()=>{
      playerName = this.input.value();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.how.hide();
      this.options.hide();
      this.play.hide();
      this.space.hide();
      this.explain.hide();
      this.mouse.hide();
      this.explain2.hide();
      this.mapTitle.hide();
      this.map1.hide();
      this.map2.hide();

      gameState = "play";
    });

    this.how.mousePressed(()=>{
      gameState = "how";
    });

    this.options.mousePressed(()=>{
      gameState = "map";
    });
  }

  displayHowScreen(){
    this.input.hide();
    this.title.hide();
    this.options.hide();
    this.how.hide();
    background(space);
    
    this.play.html("HOW TO PLAY");
    this.play.position(displayWidth/2 - 200, 0);
    this.play.style("color","#0CFFE1");
    this.play.style("font-size","38px");
    this.play.style("font-family","Comic Sans MS");
    this.play.style("font-weight","bold");

    this.explain.html("Attack Enemies = ");
    this.explain.position(displayWidth/2 - 250, displayHeight/2 - 150);
    this.explain.style("color","#00DFD4");
    this.explain.style("font-size","38px");
    this.explain.style("font-family","Comic Sans MS");
    this.explain.style("font-weight","bold");

    this.space.html("Space");
    this.space.position(displayWidth/2 + 80, displayHeight/2 - 150);
    this.space.style("color","#FF217C");
    this.space.style("font-size","38px");
    this.space.style("font-family","Comic Sans MS");
    this.space.style("font-weight","bold");
    
    this.mouse.html("Mouse");
    this.mouse.position(displayWidth/2 + 80, displayHeight/2 - 200);
    this.mouse.style("color","#FFFFFF");
    this.mouse.style("font-size","38px");
    this.mouse.style("font-family","Comic Sans MS");
    this.mouse.style("font-weight","bold");

    this.explain2.html("Move the Character =");
    this.explain2.position(displayWidth/2 - 350, displayHeight/2 - 200);
    this.explain2.style("color","#483C6E");
    this.explain2.style("font-size","38px");
    this.explain2.style("font-family","Comic Sans MS");
    this.explain2.style("font-weight","bold");
  }

  displayMapScreen(){
    this.input.hide();
    this.title.hide();
    this.options.hide();
    this.how.hide();
    background(space);
    
    this.mapTitle.html("Select Map");
    this.mapTitle.position(displayWidth/2 - 200, 0);
    this.mapTitle.style("color","#0CFFE1");
    this.mapTitle.style("font-size","38px");
    this.mapTitle.style("font-family","Comic Sans MS");
    this.mapTitle.style("font-weight","bold");

    this.map1.position(displayWidth/2 - 300, displayHeight/2 - 200);
    this.map1.style("font-size","30px");
    this.map1.style("height","60px")
    this.map1.style("weight","80px")
    this.map1.style("font-family","MV Boli");
    this.map1.style("font-weight","2");
    this.map1.style("border-radius","8px");
    this.map1.style("border-color","#0CFFE1");
    this.map1.style("background-color","#483C6E");

    this.map2.position(displayWidth/2 - 300, displayHeight - 325);
    this.map2.style("font-size","30px");
    this.map2.style("height","60px")
    this.map2.style("weight","80px")
    this.map2.style("font-family","MV Boli");
    this.map2.style("font-weight","2");
    this.map2.style("border-radius","8px");
    this.map2.style("border-color","#0CFFE1");
    this.map2.style("background-color","#483C6E");

    this.map1.mousePressed(()=>{
      mapSelect = 1;
      map.addImage(stars);
    })

    this.map2.mousePressed(()=>{
      mapSelect = 2;
      //neon.addImage();
    })
  }

    displayPlayScreen(){
    this.input.hide();
    this.button.hide();
    this.how.hide();
    this.options.hide();
    this.title.hide();
    this.play.hide();
    this.space.hide();
    this.explain.hide();
    this.mouse.hide();
    this.explain2.hide();
    this.mapTitle.hide();
    this.map1.hide();
    this.map2.hide();
  }
}