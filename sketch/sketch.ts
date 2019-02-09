var sketch = (p: p5) => {

    const morph = new Morph();
    let clickCount = 0;
    const events: p5.Vector[] = [];
    const drawDot = (v: p5.Vector) => {
        p.translate(0, 0);
        p.strokeWeight(4);
        p.fill(204, 101, 192, 127);
        p.stroke(127, 63, 120);
        p.ellipse(v.x, v.y, 100);
    }

    p.preload = () => {
        
    }
    
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        morph.setup(p);
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
        p.background(100);
        morph.draw(p);
        events.forEach(drawDot);
    }

    p.mouseClicked = (e: MouseEvent) => {
        console.log('click', e);
        clickCount++;
        events.push(p.createVector(p.mouseX, p.mouseY));
        
        if (clickCount === 5) {
            morph.changeShape();
            clickCount = 0;
        }

        
    }
}

var sketchP = new p5(sketch);