
var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;


var shapeX = 55;
var shapeY = 30;
var shapeXSpeed;
var shapeYSpeed;

var shapeA = 70;
var shapeB = 20;
var shapeASpeed;
var shapeBSpeed;

var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);

    rect(0,0,width,10);

    rect(0,0,10,height);

    rect(0, height-10, width, 10);

    rect(width-10,0,10,height-50);

    textSize(16);
    text("EXIT", width-50, height-50);


    fill (23,40,123);
    circle(characterX,characterY,25);


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
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }



    fill(13,145,500);
    circle(shapeX, shapeY, 50);


    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);

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
        shapeY = height;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    fill(250,20,36);
    circle(shapeA, shapeB, 25);


    shapeASpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);
    shapeBSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5))+1);

    shapeA += shapeASpeed;
    shapeY += shapeBSpeed;

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
        shapeB = height;
    }
    if(shapeB < 0)
    {
        shapeB = height;
    }




    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);

}

function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
