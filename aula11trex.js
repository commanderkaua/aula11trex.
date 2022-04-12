var trex, trex_correndo;
var chao, chao_imagem;
var chaoinvisivel
function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
  chao_imagem = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("correndo", trex_correndo);
  chaoinvisivel = createSprite(200,180,400,10);
  chaoinvisivel.visible = false;
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite chao (solo)
  chao = createSprite(200,168,400,20);
  chao.addImage("chao que mexe", chao_imagem);
  chao.x = chao.width/2;
  chao.velocityX = -3;
}

function draw() {
  background("white");
  corrige_chao();
  //pular quando a tecla espaço for pressionada
  pular();
  
 //impedir que o trex caia
  trex.collide(chaoinvisivel);
  drawSprites();
  
}

function pular(){
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
}

function corrige_chao(){
    if(chao.x<0){
        chao.x = chao.width/2;
    }

}