/* Generated Code Do Not Modify */
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RectangleFilledAnimation } from './RectangleFilledAnimation.js';
export class ARectangleFilledAnimation extends RectangleFilledAnimation {
    constructor() {
        super(0, 0, BasicColorFactory.getInstance().BLACK);
        this.x = 0;
        this.y = 0;
        //For kotlin this is before the body of the constructor.
    }
    nextFrame() {
    }
    paintXY(graphics, unusedX, unusedY) {
        super.paintXY(graphics, this.x, this.y);
    }
}
