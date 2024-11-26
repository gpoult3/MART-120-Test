var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);

    for (var i = 0; i < 20; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(1000);
        shapeYs[i] = getRandomNumber(900);
        diameters[i] = getRandomNumber(15);
    }

    createCharacter(200, 350);
}

function draw() {
    background(120, 645, 78);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(16);
    text("EXIT", width - 50, height - 50)

    drawCharacter();
    characterMovement();


    fill(13, 145, 540);

    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);



        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(520, 30, 240);
    circle(mouseShapeX, mouseShapeY, 35);
}


function characterMovement() {

    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}



function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}


function drawCharacter() {
    fill(823, 40, 23);
    circle(characterX, characterY, 15);
}


function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}


function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 25;
}