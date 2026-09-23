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
//not GWT import const BasicColorUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import - same folder const SpriteIndexedAnimation
export class AdjustedSpriteIndexedAnimation extends SpriteIndexedAnimation {
    constructor(sprite, image, basicColorArray, dx, dy, animationBehavior) {
        super(sprite, image, basicColorArray, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.dx = dx;
        this.dy = dy;
    }
    paintFrame(graphics, frame, x, y) {
        this.setFrame(frame);
        this.sprite.setPosition(x + this.dx, y + this.dy);
        super.paint(graphics);
    }
    paintXY(g, x, y) {
        this.sprite.setPosition(x + this.dx, y + this.dy);
        super.paint(g);
    }
    paint(g) {
        this.sprite.setPosition(this.dx, this.dy);
        super.paint(g);
    }
}
