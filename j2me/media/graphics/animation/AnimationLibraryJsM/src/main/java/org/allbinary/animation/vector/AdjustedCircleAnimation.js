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
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CircleAnimation } from './CircleAnimation.js';
//not GWT import const CircleAnimation = globalThis.org.allbinary.animation.vector.CircleAnimation;
export class AdjustedCircleAnimation extends CircleAnimation {
    static createAnimation(width, height, xAdjustment, yAdjustment, basicColor) {
        var adjustedCircleAnimation = new AdjustedCircleAnimation(width, height, basicColor);
        ;
        adjustedCircleAnimation.initXY(xAdjustment, yAdjustment);
        //if statement needs to be on the same line and ternary does not work the same way.
        return adjustedCircleAnimation;
    }
    static createW(width, height, innerWidth, basicColor) {
        var adjustedCircleAnimation = new AdjustedCircleAnimation(width, height, basicColor);
        ;
        adjustedCircleAnimation.init(innerWidth);
        //if statement needs to be on the same line and ternary does not work the same way.
        return adjustedCircleAnimation;
    }
    constructor(width, height, basicColor) {
        super(width, height, basicColor);
        this.xAdjustment = 0;
        this.yAdjustment = 0;
        //For kotlin this is before the body of the constructor.
    }
    initXY(xAdjustment, yAdjustment) {
        this.xAdjustment = xAdjustment;
        this.yAdjustment = yAdjustment;
    }
    init(innerWidth) {
        if (AndroidUtil.isAndroid()) {
            var widthPortion = (((innerWidth / 3) * 10) / 7);
            ;
            this.xAdjustment = -((this.width >> 1) - widthPortion);
            this.yAdjustment = this.xAdjustment;
        }
        else {
            this.xAdjustment = -((this.width >> 1) - innerWidth);
            this.yAdjustment = this.xAdjustment;
        }
    }
    paintXY(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
        graphics.drawArc(x + this.xAdjustment, y + this.yAdjustment, this.width, this.height, 0, this.TOTAL_ANGLE);
    }
}
