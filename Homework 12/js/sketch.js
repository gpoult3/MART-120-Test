var characterX = 100;
var characterY = 100;


var w = 87;
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeA = 200;
var shapeB = 50;
var shapeASpeed;
var shapeBSpeed;

var shapeC = 20;
var shapeD = 200;
var shapeCSpeed;
var shapeDSpeed;


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(120,450,150);
    stroke(0);
    fill(0);


    createBorders(7);

    textSize(16);
    text("EXIT", width-50,height-50)


    drawCharacter();
    characterMovement();




    fill(500,145,14);
    circle(shapeX, shapeY, 10);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
    {
        shapeX = 0;
    
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    fill(10,5,145);
    circle(shapeA, shapeB, 30);
    shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeA += shapeASpeed;
    shapeB += shapeBSpeed;
    if(shapeA > width)
    {
        shapeA = 0;
    }
    if(shapeA < 0)
    {
        shapeA = width;
    }
    if(shapeB > height)
    {
        shapeB = 0;
    }
    if(shapeB < 0)
    {
        shapeB = height;
    }

    fill(300,5,105);
    circle(shapeC, shapeD, 25);
    shapeCSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeDSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeC += shapeASpeed;
    shapeD += shapeBSpeed;
    if(shapeC > width)
    {
        shapeC = 0;
    }
    if(shapeC < 0)
    {
        shapeC = width;
    }
    if(shapeD > height)
    {
        shapeD = 0;
    }
    if(shapeD < 0)
    {
        shapeD = height;
    }




    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }




    fill(220,150,140)
    circle(mouseShapeX, mouseShapeY, 25);

}


function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }

}


function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}


function drawCharacter()
{
    fill(230,400,23);
    circle(characterX, characterY, 25);
}


function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}



function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}