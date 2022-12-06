//crie as variaveis dos seus personagens aqui
var player;
var escrivaninha;
var escriIMG
var cama
var camaIMG
var spriescri

function preload(){
  //carregue as imagens dos personagens aqui
  escriIMG = loadImage('../assets/pixil-frame-0 (1).png');
  camaIMG = loadImage('../assets/cama.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //crie os sprites aqui
  
  escrivaninha = createSprite(160,90,);
  escrivaninha.addImage('escrivan',escriIMG)
  escrivaninha.scale = 0.06
  spriescri = createSprite(161,40,320,90)
  spriescri.shapeColor = 'green'
  spriescri.visible = false

  cama = createSprite(width/2+1400,650);
  cama.addImage('imagecama',camaIMG)
  cama.scale = 0.08
  
  player = createSprite(width/2,height/2,150,250);
  player.shapeColor = "green";
  
  
  
  
  

}

function draw() {
  background('gray'); 

  if(keyDown('w')){
    player.y -=20
  }
  if(keyDown('s')){
    player.y +=20
  }
  if(keyDown('a')){
    player.x -=20
  }
  if(keyDown('d')){
    player.x +=20
  }
  
  edges = createEdgeSprites()
  player.bounceOff(edges)
  player.bounceOff(spriescri)
  

  drawSprites();
}
