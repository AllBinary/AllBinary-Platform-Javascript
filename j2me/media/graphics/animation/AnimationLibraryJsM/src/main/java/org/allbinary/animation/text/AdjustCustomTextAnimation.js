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
//not GWT import const AnimationBehavior
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomTextAnimation } from './CustomTextAnimation.js';
//not GWT import - same folder const CustomTextAnimation
export class AdjustCustomTextAnimation extends CustomTextAnimation {
    constructor(text, fontSize, dx, dy, animationBehavior) {
        super(text, fontSize, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.dx = dx;
        this.dy = dy;
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dx;
    }
    setDx(dx) {
        this.dx = dx;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dy;
    }
    setDy(dy) {
        this.dy = dy;
    }
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x + this.dx, y + this.dy);
    }
}
