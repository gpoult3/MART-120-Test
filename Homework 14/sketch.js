
var characterX = 560;
var characterY = 650;
var characterM = 570;
var characterN = 635;

var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


function setup()
{
    createCanvas(1500,750)

    for (var i = 0; i < 30; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(1000);
        shapeYs[i] = getRandomNumber(900);
        diameters[i] = getRandomNumber(5);
    }
}

function draw()
{
    background(50,10,75);
    
    fill(255, 255, 255);
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
    
    fill(0,0,0)
    rect(0,550,1500,750)

    fill(230,255,200)
    circle(330,90,125)
    
    
    fill(0,0,0)
    rect(0,150,100,750)

    fill(0,0,0)
    rect(180,100,75,750)

    fill(0,0,0);
    rect(400,160,100,750)

    fill(0,0,0)
    rect(400,350,300,750)

    fill(0,0,0)
    rect(650,75,175,750)

    fill(0,0,0)
    rect(850,50,50,750)

    fill(0,0,0)
    rect(920,75,200,750)

    fill(0,0,0)
    rect(1200,150,275,750)




    fill(110,0,220)
    rect(1225,170,25,25)
    fill(110,0,220)
    rect(1275,170,25,25)
    fill(110,0,220)
    rect(1325,170,25,25)
    fill(110,0,220)
    rect(1375,170,25,25)
    fill(110,0,220)
    rect(1425,170,25,25)
    fill(110,0,220)
    rect(1225,220,25,25)
    fill(110,0,220)
    rect(1275,220,25,25)
    fill(110,0,220)
    rect(1325,220,25,25)
    fill(110,0,220)
    rect(1375,220,25,25)
    fill(110,0,220)
    rect(1425,220,25,25)
    fill(110,0,220)
    rect(1425,270,25,25)
    fill(110,0,220)
    rect(1425,320,25,25)

    fill(190,0,220)
    rect(695,95,20,20)
    fill(190,0,220)
    rect(725,95,20,20)
    fill(190,0,220)
    rect(785,95,20,20)
    fill(190,0,220)
    rect(665,125,20,20)
    fill(190,0,220)
    rect(725,125,20,20)
    fill(190,0,220)
    rect(785,125,20,20)
    fill(190,0,220)
    rect(665,155,20,20)
    fill(190,0,220)
    rect(665,185,20,20)
    fill(190,0,220)
    rect(695,185,20,20)
    fill(190,0,220)
    rect(785,185,20,20)
    fill(190,0,220)
    rect(665,215,20,20)
    fill(190,0,220)
    rect(695,215,20,20)
    fill(190,0,220)
    rect(785,215,20,20)
    fill(190,0,220)
    rect(665,245,20,20)
    fill(190,0,220)
    rect(695,245,20,20)
    fill(190,0,220)
    rect(785,245,20,20)
    fill(190,0,220)
    rect(665,275,20,20)
    fill(190,0,220)
    rect(695,275,20,20)
    fill(190,0,220)
    rect(785,275,20,20)
    fill(190,0,220)
    rect(665,305,20,20)
    fill(190,0,220)
    rect(695,305,20,20)



    fill(25,0,50)
    rect(65,250,160,750)

    fill(25,0,50)
    rect(65,300,300,750)

    fill(25,0,50)
    rect(525,200,150,750)

    fill(25,0,50)
    rect(700,150,100,750)

    fill(25,0,50)
    rect(700,300,250,750)

    fill(25,0,50)
    rect(850,200,200,750)

    fill(25,0,50)
    rect(1180,250,100,750)

    fill(25,0,50)
    rect(1150,250,150,750)

    fill(25,0,50)
    rect(1300,180,100,750)

    fill(25,0,50)
    rect(1400,350,300,750)


    
    


    fill(25,0,75)
    rect(0,350,100,750)

    fill(25,0,75)
    rect(100,330,80,750)

    fill(25,0,75)
    rect(350,450,150,750)

    fill(25,0,75)
    rect(475,230,75,750)

    fill(25,0,75)
    rect(725,250,250,750)

    fill(25,0,75)
    rect(950,150,100,750)

    fill(25,0,75)
    rect(1050,450,175,750)

    fill(25,0,75)
    rect(1350,425,100,750)
    
    fill(25,0,75)
    rect(1450,500,50,750)


    fill(110,0,220)
    rect(960,170,20,20)
    fill(110,0,220)
    rect(1020,170,20,20)
    fill(110,0,220)
    rect(960,200,20,20)
    fill(110,0,220)
    rect(1020,230,20,20)
    fill(110,0,220)
    rect(960,260,20,20)
    fill(110,0,220)
    rect(1020,260,20,20)
    fill(110,0,220)
    rect(960,290,20,20)
    fill(110,0,220)
    rect(990,290,20,20)
    fill(110,0,220)
    rect(1020,290,20,20)
    fill(110,0,220)
    rect(990,320,20,20)
    fill(110,0,220)
    rect(960,350,20,20)
    fill(110,0,220)
    rect(990,380,20,20)
    fill(110,0,220)
    rect(960,410,20,20)
    fill(110,0,220)
    rect(990,440,20,20)
    fill(110,0,220)
    rect(990,470,20,20)
    fill(110,0,220)
    rect(990,500,20,20)
    fill(110,0,220)
    rect(960,530,20,20)


    fill(50,0,100)
    rect(150,550,175,750)

    fill(50,0,100)
    rect(350,400,300,750)

    fill(50,0,100)
    rect(650,500,175,750)

    fill(50,0,100)
    rect(1000,300,140,750)

    fill(50,0,100)
    rect(1400,550,300,750)



    fill(230,255,200)
    rect(10,160,15,15)
    fill(230,255,200)
    rect(70,160,15,15)
    fill(230,255,200)
    rect(40,190,15,15)
    fill(230,255,200)
    rect(70,190,15,15)
    fill(230,255,200)
    rect(10,220,15,15)
    fill(230,255,200)
    rect(40,220,15,15)
    fill(230,255,200)
    rect(10,250,15,15)
    fill(230,255,200)
    rect(10,280,15,15)
    fill(230,255,200)
    rect(40,310,15,15)




    fill(230,255,200)
    rect(1160,270,20,20)
    
    fill(230,255,200)
    rect(1230,270,20,20)
    
    fill(230,255,200)
    rect(1195,305,20,20)
    
    fill(220,255,200)
    rect(1265,305,20,20)
    
    fill(230,255,200)
    rect(1195,340,20,20)
    fill(230,255,200)
    rect(1230,340,20,20)
    fill(220,255,200)
    rect(1265,340,20,20)
    fill(230,255,200)
    rect(1160,375,20,20)
    
    fill(230,255,200)
    rect(1230,375,20,20)
    
    fill(230,255,200)
    rect(1195,410,20,20)
    fill(220,255,200)
    rect(1265,410,20,20)
    fill(230,255,200)
    rect(1230,445,20,20)
    fill(230,255,200)
    rect(1230,480,20,20)
    fill(230,255,200)
    rect(1230,515,20,20)
    fill(220,255,200)
    rect(1265,550,20,20)

    fill(220,255,200)
    rect(750,275,25,25)
    
    fill(220,255,200)
    rect(850,275,25,25)

   fill(220,255,200)
   rect(800,325,25,25)
   

    
    
   
    fill(220,255,200)
    rect(900,325,25,25)

    fill(220,255,200)
    rect(750,375,25,25)
   
    fill(220,255,200)
    rect(900,375,25,25)

    
    fill(220,255,200)
    rect(800,425,25,25)
    fill(220,255,200)
    rect(850,425,25,25)
    

    fill(220,255,200)
    rect(750,475,25,25)
    
    fill(220,255,200)
    rect(850,475,25,25)
    fill(220,255,200)
    rect(900,475,25,25)

    fill(220,255,200)
    rect(850,525,25,25)
    fill(220,255,200)
    rect(900,525,25,25)

    fill(220,225,200)
    rect(825,625,50,75)
    fill(110,0,190)
    rect(450,625,100,75)
    fill(110,0,190)
    rect(500,625,50,75)
    
    fill(110,0,190)
    rect(370,425,40,40)
    
    fill(110,0,190)
    rect(510,425,40,40)
    
    fill(110,0,190)
    rect(440,495,40,40)
    
    fill(110,0,190)
    rect(580,495,40,40)
    
    fill(110,0,190)
    rect(510,565,40,40)
    fill(110,0,190)
    rect(580,565,40,40)
    fill(110,0,190)
    rect(370,635,40,40)
    
    fill(110,0,220)
    rect(580,635,40,40)






    fill(190,0,220)
    rect(5,370,20,20)
    
    fill(190,0,220)
    rect(65,370,20,20)

    
    fill(190,0,220)
    rect(35,400,20,20)
    

    fill(190,0,220)
    rect(5,430,20,20)
    
    fill(190,0,220)
    rect(65,430,20,20)

    
    fill(190,0,220)
    rect(35,460,20,20)
    

    
    fill(190,0,220)
    rect(35,490,20,20)
    fill(190,0,220)
    rect(65,490,20,20)

    
    
    fill(190,0,220)
    rect(65,520,20,20)

    fill(190,0,220)
    rect(5,550,20,20)
    
    fill(190,0,220)
    rect(65,580,20,20)
    fill(190,0,220)
    rect(65,610,20,20)

    



    
    fill(0,0,0)
    rect(0,700,1500,750)

    fill(0,0,0);
    rect(characterX,characterY,25,50);
    fill(0,0,0);
    rect(characterM,characterN,15);

    if(keyIsDown(a))
    {
        characterX -= 10;
        characterM -=10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
        characterM += 10;
    }

}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) +10;
}


