const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(400, 200, 20, {restitution: 1});
    World.add(world, ball);

    box = Bodies.rectangle(200, 200, 50, 50, {restitution: 1});
    World.add(world, box);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,800,20);
    fill("blue");
    rect(box.position.x,box.position.y,50,50);
    ellipseMode(RADIUS);
    fill("green");
    circle(ball.position.x, ball.position.y, 20);
}