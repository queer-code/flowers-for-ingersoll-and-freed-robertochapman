import * as p5 from 'p5';
import { love } from './ball';

const sketch = (p5: p5) => {
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.draw = () => {
        p5.stroke(love());
        p5.strokeWeight(200)
        p5.point(p5.width / 2, p5.height / 2);
    }
    
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

var instance = new p5(sketch);
