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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RightToLeftImageAnimation } from './RightToLeftImageAnimation.js';
//not GWT import const RightToLeftImageAnimation = globalThis.org.allbinary.animation.image.RightToLeftImageAnimation;
export class AdjustedRightToLeftImageAnimation extends RightToLeftImageAnimation {
    constructor(image, dx, dy, animationBehavior) {
        super(image, animationBehavior);
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
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x + this.dx, y + this.dy);
    }
}
