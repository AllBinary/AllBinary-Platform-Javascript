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
//not GWT import const AnimationBehavior
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinarySpriteRotationAnimation } from './AllBinarySpriteRotationAnimation.js';
//not GWT import - same folder const AllBinarySpriteRotationAnimation
export class AllBinaryAdjustedSpriteRotationAnimation extends AllBinarySpriteRotationAnimation {
    constructor(sprite, image, dx, dy, animationBehavior) {
        super(sprite, image, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.dx = dx;
        this.dy = dy;
    }
    paintXY(g, x, y) {
        this.sprite.setPosition(x + this.dx, y + this.dy);
        this.paint(g);
    }
}
