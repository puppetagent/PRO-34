var dog, happyDog, database, foodS, foodStock;

var dog1Img, dog2Img;

function preload()
{
  dog1Img = loadImage("images/dogImg.png");
  dog2Img = loadImage("images/dogImg1.png");

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}

function setup() {
  createCanvas(900,900);
  dog = createSprite(300,300,10,10);
  dog.addImage(dog1Img);
}


function draw() {  
  background("green")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2Img);
  }

  text("Note: press UP_ARROW key to feed Mark milk",100,100);
  text("Stock; "+ foodStock);

  drawSprites();
  
  textSize(50);
  fill("black");
  

}

function readStock (data) {
  foodS=data.val();
}

function writeStock (x) {
  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }
   database.ref('/').update({
     food:x
   })

}



