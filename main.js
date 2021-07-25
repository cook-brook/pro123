rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(450,450);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#808080');
    textSize(difference);
    fill('FFE787');
    text('khyati',50,400);


}
function modelLoaded(){
    console.log('pposenet inishelized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
 
        difference=floor(leftwristX-rightwristX);
        console.log("leftwrist ="+leftwristX+"rightwrist ="+rightwristX);
    }
}