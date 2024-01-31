//https://i.postimg.cc/3x3QzSGq/m.png
//https://i.postimg.cc/PxFvYgkv/l1.png
nosex = 0;
nosey = 0;

function preload() {
    mustage = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustage, nosex, nosey, 100,80);
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresults);
}

function take_snapshot() {
    save('sara.png');
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotresults(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x-50;
        nosey = results[0].pose.nose.y-20;
    }
}