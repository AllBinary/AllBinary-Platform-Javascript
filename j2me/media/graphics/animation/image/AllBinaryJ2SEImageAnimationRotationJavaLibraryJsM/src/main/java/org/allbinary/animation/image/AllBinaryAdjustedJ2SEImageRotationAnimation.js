/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const AngleInfo
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryJ2SEImageRotationAnimation } from './AllBinaryJ2SEImageRotationAnimation.js';
//not GWT import - same folder const AllBinaryJ2SEImageRotationAnimation
export class AllBinaryAdjustedJ2SEImageRotationAnimation extends AllBinaryJ2SEImageRotationAnimation {
    constructor(originalImage, image, angleInfo, totalAngle, dx, dy, animationBehavior) {
        super(originalImage, image, angleInfo, totalAngle, animationBehavior);
        this.dx = 0;
        this.dy = 0;
        //For kotlin this is before the body of the constructor.
        this.init(dx, dy);
    }
    //@Throws(Exception.constructor)
    init(dx, dy) {
        this.dx = dx;
        this.dy = dy;
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
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x + this.dx, y + this.dy);
    }
}
