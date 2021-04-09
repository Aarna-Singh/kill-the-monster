const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var b1,b2,b3,b4,b5,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var ball;
var bgj
var rope;

function preload() {
    bg=loadImage("images/GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,600,1200,20);
    b1=new Box(900,100,70,70);
    b2=new Box(900,100,70,70);
    b3=new Box(900,100,70,70);
    b4=new Box(900,100,70,70);
    b5=new Box(900,100,70,70);
    b6=new Box(900,100,70,70);
    b7=new Box(800,100,70,70);
    b8=new Box(800,100,70,70);
    b9=new Box(800,100,70,70);
    b10=new Box(800,100,70,70);
    b11=new Box(800,100,70,70);
    b12=new Box(800,100,70,70);
    b13=new Box(800,100,70,70);
    b14=new Box(700,100,70,70);
    b15=new Box(700,100,70,70);
    b16=new Box(700,100,70,70);
    b17=new Box(700,100,70,70);
    b18=new Box(700,100,70,70);
    b19=new Box(700,100,70,70);
    b20=new Box(700,100,70,70);
    b21=new Box(600,100,70,70);
    b22=new Box(600,100,70,70);
    b23=new Box(600,100,70,70);
    b24=new Box(600,100,70,70);
    b25=new Box(600,100,70,70);
    b26=new Box(600,100,70,70);
    
    ball=new Ball(400,800,250);
    rope=new Rope(ball.body,{x:500,y:50})
    monster = new Monster(1100,550,300);
}

function draw(){
   background(bg);
   Engine.update(engine);
   ground.display()
   b1.display()
   b2.display()
   b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   b17.display();
   b18.display();
   b19.display();
   b20.display();
   b21.display();
   b22.display();
   b23.display();
   b24.display();
   b25.display();
   b26.display();
    ball.display();
   rope.display();
   monster.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}