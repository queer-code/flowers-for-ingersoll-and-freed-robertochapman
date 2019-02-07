import * as p5 from 'p5';

const sketch = (p5: p5) => {
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.colorMode('hsb');
    }

    p5.draw = () => {
        p5.background(p5.noise(p5.frameCount / 100) * 255, 255, 255);
        p5.textSize(69);
        p5.textAlign('center');
        p5.textFont('monospace')
        p5.text('queer.code()', p5.width / 2, p5.height / 2);
    }
    
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

var instance = new p5(sketch);
