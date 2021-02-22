var cam;
var rs,gs,bs;
var photo;
var fil;
var type = 1;
var flipColorButton;
var colorResetButton;
var takePhotoButton;
var canvas;
var photoName;

function setup() {
  canvas = createCanvas(600,450);

  cam = createCapture(VIDEO);
  cam.size(600,600);
  cam.hide();

  rs = createSlider(1,255,255);
  rs.position(650,100);  
  gs = createSlider(1,255,255);
  gs.position(650,150); 
  bs = createSlider(1,255,255);
  bs.position(650,200); 

  flipColorButton = createButton("FLIP COLORS");
  flipColorButton.position(650,250);

  colorResetButton = createButton("RESET COLORS");
  colorResetButton.position(650,300);

  takePhotoButton = createButton("TAKE PHOTO");
  takePhotoButton.position(650,350);

  photoName = createInput("PHOTO NAME");
  photoName.position(650,400);
}

function draw() {
  background(200);  
  
  tint(rs.value(),gs.value(),bs.value()); 

  photo = image(cam,0,0,600,450);
  fil = filter(INVERT);

  flipColorButton.mousePressed(()=>{type += 1});



  colorResetButton.mousePressed(()=>{
   rs.value(255); 
   gs.value(255);
   bs.value(255); 
   type = 1;
  });

  if(keyWentDown("F")){
    type += 1;  
  }

  if(type % 2 == 0){
  fil = filter(OPAQUE);
  }else{
  fil = filter(INVERT);
  }

  takePhotoButton.mousePressed(()=>{
    saveCanvas(canvas, photoName.value(), '');
  });

  
  drawSprites();

}

