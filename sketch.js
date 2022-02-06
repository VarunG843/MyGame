function preload(){

bg = loadImage("Background.jpg");
killua = loadImage("20876.png");

}

function setup(){

createCanvas(400,400);

// ground = createSprite(960,850,1920,40);

player = createSprite(200,780,100,100);

player.x = 200;

player.y = 780;
}

function draw(){
  
//    background("white")

//     if (keyDown(RIGHT_ARROW)) {
//         player.x += 10;
//       } 

//     if (keyDown(LEFT_ARROW)) {
//         player.x -= 10;
//       } 

//     if (keyDown(UP_ARROW)) {
//         player.y += 10;
//       } 

//     if (keyDown(DOWN_ARROW)) {
//         player.y -= 10;
//       } 

//       console.log(player.x, player.y);
    
//       camera.x = player.x 
//       camera.y = player.y

         player.x += 10
          
    
        drawSprites()
}