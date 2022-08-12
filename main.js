video = "";
status = "";


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(400,400)
}

function draw(){
    image(video,0,0,400,400);
}

function start(){
    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
    document.getElementById("Id_Of_The_Input_Box).value");
}

function modelLoaded(){
    console.log("moadel is loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}