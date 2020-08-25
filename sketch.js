var dog,dogHappy,database,foodS,foodStock;

function preload()
{
  dog=loadImage("dogImg.png");
  dogHappy=("dogIMg1.png")
}

function setup() {
	createCanvas(800, 700);
  foodStock=database.ref('food');
  foodStock.on("value",readstock);

  dog.createSprite(350,650,75,75);

  if(keyWentdown(UP_ARROW)){
    foodStock.value=foodStock.value-1;
  }

  if(keyWentdown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy); 
  } 
}


function readStock(data) {  
  foodS=data.val();
}

function writeStock(x){

  if (x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


