var enemy1,enemy2,enemy3;
var shootor1,shootor2;
var ss1,ss2;
var ene1,ene2,ene3
var backgroundg,do01
var score=0

function preload(){
enemy1=loadImage("images/purplevirus.png")
enemy2=loadImage("images/enemy22.png")
//shootor1 = loadImage("images/noobspace2.png")
shootor2 = loadImage("images/sanitiger.png")
backgroundg = loadImage("images/bgg.jpg")
do01 = loadImage ("images/2soek.jpg")
enemy3=loadImage("images/reddyvirus.png")

}

function setup(){
createCanvas(displayWidth,displayHeight);
ss1 = createSprite(200,200);
ss1.addImage(shootor2)
ss1.scale=0.5; 

enemies=createGroup()

///ene1 = createSprite(200,200)
///ene1.addImage(enemy1)
////ene1.scale=0.2;
}

function draw(){
background(backgroundg)
ss1.x=mouseX;
ss1.y=mouseY;

enemy()




for (var i = 0; i < enemies.length; i++)
 {
      if(ss1.isTouching(enemies.get(i)))
    {
         score = score + 8; 
         enemies.get(i).destroy();
      } 
    }




drawSprites();
textSize(30)
fill("yellow")
text("score = "+score,displayWidth-200,50)

}

function enemy(){

if (score>=30 && score<500){
    if(World.frameCount % 50 === 0) {
 
        //random y positions for top obstacles
        
        
        
        ene2 = createSprite(200,200)
        ene2.addImage(enemy1)
        ene2.scale=0.3;
        
        ene2.y = Math.round(random(10,displayHeight-10))
        ene2.x = Math.round(random(10,displayWidth-10))
        
        ene3 = createSprite(200,200)
        ene3.addImage(enemy3)
        ene3.scale=0.2;
        
        ene3.y = Math.round(random(20,displayHeight-20))
        ene3.x = Math.round(random(20,displayWidth-20))
        
        
        enemies.add(ene2)

        enemies.add(ene3)
        
        }   
}    
else if(score>=200) {
    if(World.frameCount % 50 === 0) {
 
        //random y positions for top obstacles
        
        
        
        ene2 = createSprite(200,200)
        ene2.addImage(enemy2)
        ene2.scale=0.3;
        
        ene2.y = Math.round(random(10,displayHeight-10))
        ene2.x = Math.round(random(10,displayWidth-10))
        
        
        
        enemies.add(ene2)
        
        }


}
else {
if(World.frameCount % 50 === 0) {
 
//random y positions for top obstacles



ene2 = createSprite(200,200)
ene2.addImage(enemy2)
ene2.scale=0.3;

ene2.y = Math.round(random(10,displayHeight-10))
ene2.x = Math.round(random(10,displayWidth-10))



enemies.add(ene2)
//enemies.add(ene3)
}
}

//if (score>=60){

    //background(do01)



//}


}