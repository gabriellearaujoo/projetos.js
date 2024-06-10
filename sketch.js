function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
     circle(0, 0, 50);
  }
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 15;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
  }
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha = xBolinha + 1;
  }
  let xbolinha = 300;
  let ybolinha = 200;
  let diâmetro = 15;
  let Raio = diametro /2;
  
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;
  let raqueteComprimento = 10;
  let raqueteAltura = 90;
      
  //variaveis raquete
  let xRaquete = 5;
  let yRaquete = 150;
  
  //variáveis do oponente
  let xRaqueteOponente = 585;
  let yRaqueteOponente = 150;
  let velocidadeYOponente;
  
  
  
  let colidiu = false
  
  //placar do jogo
  let meusPontos = 0;
  let pontosDoOponente = 0;
  
  //sons do jogo
  let raquetada;
  let ponto;
  let trilha;
  
  function preload() {
      trilha = loadSound("trilha.mp3");
      ponto = loadSound("ponto.mp3");
      raquetada = loadSound("raquetada.mp3");
  }
  
  function setup() {
      createCanvas(600, 400);
      trilha.loop();
  }
  
  
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete,yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
    mostraRaquete(xRaqueteOponente,yRaqueteOponente);
    movimentaRaqueteOponente();
    colisaoRaqueteOponenteBiblioteca();
    rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
    incluiPlacar();
    marcaPonto();
  }
  
  function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro)
  }
  
  function movimentaBolinha(){
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
      if (xBolinha + Raio > width ||
          xBolinha - Raio < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha + Raio > height ||
          yBolinha - Raio < 0) {
          velocidadeYBolinha *= -1;
      }
  }
  
  function mostraRaquete(x,y) {
      rect(x,y, raqueteComprimento, raqueteAltura);
  }
    
   function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  
  function verificaColisaoRaquete() {
      if (xBolinha - Raio < xRaquete + raqueteComprimento
   && ybolinha - Raio < yRaquete +  raqueteAltura && ybolinha
    + Raio > yRaquete){
        velocidadeXBolinha *= -1;
        raquetada.plsy
    }
  }
  
  function colisaoMinhaRaqueteBiblioteca() {
    colidiu = 
      collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, Raio);
     if (colidiu){
          velocidadeXBolinha *= -1;
      }
  }
  
  function colisaoRaqueteOponenteBiblioteca() {
    colidiu = 
      collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, Raio);
     if (colidiu){
          velocidadeXBolinha *= -1;
       raquetada.play
      }
  }
  
  function movimentaRaqueteOponente() {
      velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
      yRaqueteOponente += velocidadeYOponente
  }
  
  function incluiPlacar() {
      stroke(255);
      textAlign(CENTER);
      textSize(16);
      fill(color(255, 140, 0));
      rect(150, 10, 40, 20);
      fill(255);
      text(meusPontos, 170, 26);
      fill(color(255, 140, 0));
      rect(450, 10, 40, 20);
      fill(255);
      text(pontosDoOponente, 470, 26);
  }
  
  
  function marcaPonto() {
      if (xBolinha > 600) {
          meusPontos += 1;
        ponto.play
      }
      if (xBolinha < 10) {
          pontosDoOponente += 1;
        ponto.play
      }
  }