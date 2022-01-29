const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var game;
var player, ground;

function preload() 
{

}

function setup() 
{
  createCanvas(1600, 900);
  eng = Engine.create();
  world = eng.world;

  var playerBodySettings = 
  {
    restitution: 0.4,
    friction: 0.2
  }

  player = Bodies.rectangle(800, 870, 10, 10, playerBodySettings);
  World.add(world, player);

  ground = Bodies.rectangle(800, 900, 1600, 30, {isStatic: true});
  World.add(world, ground);

  game = new Game();
}

function draw() 
{
  background(0);
  Engine.update(eng);
  if(game.state === 0)
  {
    game.Update();
  }
  else if(game.state === 1)
  {
    game.End();
  }
}