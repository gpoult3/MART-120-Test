var eyeX = 250;
var eyeY = 75;
var eyeDirection = 2;

var bodyX = 200;
var bodyY = 75;
var bodyDirection = 3;

var pointX = 205;
var pointY = 75;
var pointDirection = 1;

var decorX = 220;
var decorY = 200;
var decorDirection = 4;


var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("Portrait", 10,80);

    fill('rgba(255, 220, 215, 10)');
    circle(250,100,175);
    

    fill(255);
    circle(eyeX,eyeY,25);
    eyeX+=eyeDirection;
    if(eyeX >= 500 || eyeX <= 0)
    {
        eyeDirection *= -1;
    }
        


    fill(255);
    circle(285,75,25);
  

    strokeWeight(5);
    fill(0);
    point(pointX,pointY);
    pointX+=pointDirection;
    if(pointX >= 500 || pointX <= 0 )
    {
        pointDirection *= -1;
    }
    point(290,75);

    fill(255);
    triangle(245,95,240,85,250,85)

    line(240,150,260,150);

    fill(51);
    ellipse(250,25,175,75);

    fill(51);
    triangle(130,175,175,50,190,175);

    fill(51);
    triangle(325,50,360,175,325,175);

    line(130,175,175,50);
    line(325,50,360,175);

    fill(10,24,120);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450)
    {
        bodyDirection *= -1;
    }


    fill(255);
    rect(220,decorY,50,100);
    decorY += decorDirection;
    if(decorY <= 0 || decorY >= 450)
    {
        decorDirection *= -1;
    }


    fill('rgba(255, 220, 215, 10)');
    rect(300,185,20,100);

    fill('rgba(255, 220, 215, 10)');
    rect(180,185,20,100);

    fill(51);
    rect(200,335,20,100);

    fill(51);
    rect(280,335,20,100);

    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Grace Poulton", 270,500);
}   