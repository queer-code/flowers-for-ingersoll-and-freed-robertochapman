import * as p5 from 'p5';

const sketch = (p5: p5) => {
    const arrayclicks = []


    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.colorMode('hsb');
    }

    p5.draw = () => {
        p5.background(p5.noise(p5.frameCount / 100) * 255, 255, 255);
        p5.textSize(69);
        p5.textAlign('center');
        p5.textFont('monospace')
        p5.text('Animal', p5.width / 9.5, p5.height / 10);
        p5.fill("Blue");
        p5.ellipse(220, 400, 50, 75);
        p5.fill("Red")
        p5.triangle(50, 100, 100, 100, 25, 50)

        const drawPetal = (rotation) => {
            p5.ellipseMode(p5.CORNER);
            p5.rotate(rotation);
            p5.ellipse(0, 0, 75, 20)
            p5.ellipseMode(p5.CENTER);

        }
        const drawFlower = (x, y: number) => {
            p5.fill("Red")
            p5.rect(x,y,10,700)
            p5.ellipse(x, y, 50);
            p5.push();
            p5.translate(x, y);
            const numPetals = 25;
            for (let i = 0; i < numPetals; i++){
                p5.fill("Green")
                drawPetal(p5.TWO_PI/numPetals)
            }
            p5.pop();
        }

        for (const click of arrayclicks) {
            p5.fill("Green")
            drawFlower(click.x, click.y)

        }
        for (let i = 0; i < arrayclicks.length; i++) {
            arrayclicks[i]

        }


    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
    p5.touchStarted = () => {
        arrayclicks.push(p5.createVector(p5.mouseX, p5.mouseY));
        p5.print(arrayclicks);
    }

}

var instance = new p5(sketch);
