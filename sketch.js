let popups = [];
let popUp = [];

function preload() {
  gif_loadImg = loadImage("BgGradient.gif");
  impact = loadFont("Impact.ttf");
  
  for (let i = 0; i < 8; i++){
  popUp[i] = loadImage("Popup" + i + ".png");
  }
}

function setup() {
  createCanvas(595, 842);
  
  for (let i = 0; i < 5; i++){
    let x = random(35, 235);
    let y = random(50, 650);
    let r = floor(random(0, 7));
    let sx = 345;
    let sy = 150;
    let message = random(popUp);
    //let img = random(popUp)
    popups[i] = new Popup(x, y,r,sx,sy,message);
   
  }
  
} 
  
function mousePressed() {
  for (let i = 0; i < popups.length; i++) {
    if (popups[i].clicked(mouseX, mouseY)) {
      popups.splice(i, 1);
    }
  }
}

function draw() {
  image(gif_loadImg, 0, 0);
  textFont(impact);
  textSize(120);
  text('Fight\nto stay\nfocused', 98, 330);
  
  for (let i = 0; i < popups.length; i++){
    popups[i].show();
  }
  let x = random(35, 235)
  let y = random(50, 650)
  let r = floor(random(0, 7));
  let sx = 345;
  let sy = 150;
  let message = random(popUp);
  if (random(1) < 0.05){
     popups.push(new Popup(x, y, r, sx, sy, message))
   }
  
}


