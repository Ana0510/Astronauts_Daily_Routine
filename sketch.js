var astronaut, bg;
var bg1, sleep, bath, brush, gym, eat, drink, move;

function preload() 
{
bg1 = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
bath = loadAnimation("images/bath1.png", "images/bath2.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png", "images/gym2.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png", "images/move1.png");
}

function setup() 
{
  createCanvas(800,400);
  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bg1);

  //creating the astronaut
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() 
{
  background(255,255,255);  
  if (keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut. y = 260;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 290;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 270;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 270;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  //astronaut sleeping
  if (keyDown("ENTER"))
  {
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 230;
  }

  if (keyDown("m"))
  {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}