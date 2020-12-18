const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var world, engine;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;


    var bobPosX, bobPosY;
    bobPosX = width/5;
    bobPosY = height/1.75;

    roof = new Roof(250, 100, 300, 20);

    bob1 = new Bob(bobPosX, bobPosY, 40);
    bob2 = new Bob(bobPosX + 40, bobPosY, 40);
    bob3 = new Bob(bobPosX + 80, bobPosY, 40);
    bob4 = new Bob(bobPosX + 120, bobPosY, 40);
    bob5 = new Bob(bobPosX + 160, bobPosY, 40);

    rope1 = new Rope(bob1.body, roof.body, -80, 0);
    rope2 = new Rope(bob2.body, roof.body, -40, 0);
    rope3 = new Rope(bob3.body, roof.body,   0, 0);
    rope4 = new Rope(bob4.body, roof.body,  40, 0);
    rope5 = new Rope(bob5.body, roof.body,  80, 0);



     var render = Render.create({
        element : document.body,
        engine : engine,
        options : {
        width : 600,
        height :600,
        wireframes : false
        }
        });
    Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    background(255);
  
  drawSprites();
    roof.display();

    bob1.display();
    bob2.display();
    bob4.display();
    bob3.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    keyPressed();

}
function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -10, y : -10});
    }
}


