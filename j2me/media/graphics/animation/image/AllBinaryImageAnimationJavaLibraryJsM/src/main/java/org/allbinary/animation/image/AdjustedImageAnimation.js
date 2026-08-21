/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageAnimation } from './ImageAnimation.js';
export class AdjustedImageAnimation extends ImageAnimation {
    constructor(image, dx, dy, animationBehavior) {
        super(image, animationBehavior);
        this.dx = 0;
        this.dy = 0;
        //For kotlin this is before the body of the constructor.
        this.init(dx, dy);
    }
    //@Throws(Exception.constructor)
    init(dx, dy) {
        this.setDx(dx);
        this.setDy(dy);
    }
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x + this.dx, y + this.dy);
    }
    setDx(dx) {
        this.dx = dx;
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dx;
    }
    setDy(dy) {
        this.dy = dy;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dy;
    }
}
