function setup() {
    createCanvas(900, 550);
    fill('black');
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 25);
}