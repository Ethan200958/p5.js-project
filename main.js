function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 0, 0, 600, 600);

    fill('blue');
    stroke('blue');
    rect(60, 45, 500, 35); //1

    rect(45, 60, 35, 500); //2

    rect(525, 60, 35, 500); //3

    rect(60, 525, 500, 35); //4


//above: rectangles. under: circles/ellipses

    fill('green');
    stroke('green');
    ellipse(60, 60, 70, 70); //1

    ellipse(540, 60, 70, 70); //2

    ellipse(60, 540, 70, 70); //3

    ellipse(540, 540, 70, 70); //4
}

function snap() {
    save('project.png');
}