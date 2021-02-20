var cam;
var rs,gs,bs;
var r,g,b;
var photo;
var fil;
var type = 1;
var flipColorButton;

function setup() {
  createCanvas(600,500);
  cam = createCapture(VIDEO);
  cam.size(600,600);
  cam.hide();

  rs = createSlider(0,255,255);
  rs.position(650,100);  
  gs = createSlider(0,255,255);
  gs.position(650,150); 
  bs = createSlider(0,255,255);
  bs.position(650,200); 

  flipColorButton = createButton("FLIP COLORS");
  flipColorButton.position(650,250);

}

function draw() {
  background(200);  
  
  tint(rs.value(),gs.value(),bs.value()); 

  photo = image(cam,0,0,600,450);
  fil = filter(INVERT);

  flipColorButton.mousePressed(()=>{type += 1});

  if(keyWentDown("F")){
    type += 1;  
  }

  if(type % 2 == 0){
  fil = filter(OPAQUE);
  }else{
  fil = filter(INVERT);
  }

  drawSprites();

}

