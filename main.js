video = "";
status = "";
objects = [];


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(400,400)
}

function draw(){
    image(video,0,0,400,400);

    if(status != ""){
        object_detector.detect(video , gotResults);

        for(i = 0;i < objects.length;i++){
            document.getElementById("status").innerHTML = "status : Detecting objects";
            fill("seagreen");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " "+ percent + "%" , objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            if(objects[i].label == input_text){
                video.stop();
                object_detector.detect(gotResults);
                document.getElementById("object_found").innerHTML= input_text + "found";
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(input_text + "found");
                synth.speak(utterThis);
            }
            else{
                document.getElementById("object_found").innerHTML = input_text + "not found";
            }
        }
    }
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

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}