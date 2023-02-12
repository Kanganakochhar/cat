noseX=0;
noseY=0;

function preload() {
  bunny_face = loadImage('https://previews.123rf.com/images/remodesigner/remodesigner1906/remodesigner190601176/125871492-realistic-gold-crown-3d-golden-crown-isolated-on-transparent-background-vector-illustration-.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(bunny_face, noseX, noseY, 80, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}