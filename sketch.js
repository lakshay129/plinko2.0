const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine, world;
 var ground1;
 var plinko1=[];
 var division1=[];
 var particle1;
 var score =0;
 var turn=0;
 var PLAY=1;
 var END =0;
 var gameState=PLAY;
 var bd1,bd2,bd3,bd4;
  

function setup() {
 createCanvas(550,800);
 engine = Engine.create();
 world = engine.world;
 ground1=new ground(width/2,height,width,20);
 
 bd1=new red(1,400,1,800);
 bd2=new red(549,400,1,800);
 bd3=new red(275,1,550,1);
 bd4=new red(275,798,550,1);

 for (var i=7; i<=width;i=i+67){
    division1.push(new division(i,700,10,180));
  }

 for(var k=30;k<=width;k=k+70){
     plinko1.push(new plinko(k,200))
  }
  
 for(var k=17;k<=width;k=k+70){
    plinko1.push(new plinko(k,300))
 }
 
 for(var k=30;k<=width;k=k+60){
  plinko1.push(new plinko(k,400))
}

for(var k=20;k<=width;k=k+70){
  plinko1.push(new plinko(k,500))
}


}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();
  
  for (var r=0; r<division1.length;r++){
    division1[r].display();
  }
  for (var r=0; r<plinko1.length;r++){
    plinko1[r].display();
  }
  

  textSize(23)
  text ("200",19,637)

  textSize(23)
  text ("200",83,637)

  textSize(23)
  text ("2000",149,637)

  textSize(23)
  text ("2000",219,637)

  textSize(23)
  text ("2000",280,637)

  textSize(23)
  text ("500",347,637)

  textSize(23)
  text ("500",420,637)

  textSize(23)
  text ("500",480,637)

  textSize(25)
  text("TURN ="+turn,300,80);

  textSize(25)
  text("SCORE ="+score,100,80);

  bd1.display();
  bd2.display();
  bd3.display();
  bd4.display();

  if(particle1!=null){
    particle1.display();
    if(particle1.body.position.y>630 && particle1.body.position.x<141){
      score = score +200;
      particle1=null;
      console.log("lakshay")  
    }
    else{
    if(particle1.body.position.y>630 && particle1.body.position.x>345){
       score=score+500;
       particle1=null;
       console.log("lakshay1")
    }
  }
 
}
if(particle1!=null){
if(particle1.body.position.y>630 && particle1.body.position.x>141 && particle1.body.position.x<345){
  score=score+2000;
  particle1=null;
  console.log("lakshay2")
}
}

if(turn>=5){
  gameState=END;
}
if(gameState===END){
  textSize(60)
  text("GAME OVER",100,400)
}
  

  stroke ("yellow");
  line (0,600,550,600);
  
  
}

function mouseClicked(){
  console.log("mousePressed1");
 if(gameState!==END){
  console.log("mousePressed");
   turn++;
   particle1=new particle(mouseX,40);
  
 }

}