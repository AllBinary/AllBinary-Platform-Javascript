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
/* Generated Code Do Not Modify */
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const ColorCompositeInterface = globalThis.org.allbinary.graphics.color.ColorCompositeInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RectangleFilledAnimation } from './RectangleFilledAnimation.js';
//not GWT import const RectangleFilledAnimation = globalThis.org.allbinary.animation.vector.RectangleFilledAnimation;
export class RectangleFilledAdjustedAnimation extends RectangleFilledAnimation {
    constructor(width, height, offsetX, offsetY, basicColor) {
        super(width, height, basicColor);
        //For kotlin this is before the body of the constructor.
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.setBasicColorP(basicColor);
    }
    nextFrame() {
    }
    paintXY(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
        super.paintXY(graphics, x + this.offsetX, y + this.offsetY);
    }
    setOffsetX(offsetX) {
        this.offsetX = offsetX;
    }
    setOffsetY(offsetY) {
        this.offsetY = offsetY;
    }
}
