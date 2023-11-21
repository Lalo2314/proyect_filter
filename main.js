noseX = 0;
noseY = 0;


function preload() {
  nose_img = loadImage("mostacho.png");
  
  fondo = loadImage("background.jpg")
}



function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();


  poseNet = ml5.poseNet(video, ModelLoaded);
  poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
  console.log("Modelo cargado :)");

}

function gotPoses(results){
  if(results.length > 0){
    noseX = results[0].pose.nose.x-230;
    noseY = results[0].pose.nose.y-150;
  }

  console.log(results)
}


function draw() {
  image(video, 0, 0, 300, 300);
  image(nose_img, noseX, noseY, 80, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}