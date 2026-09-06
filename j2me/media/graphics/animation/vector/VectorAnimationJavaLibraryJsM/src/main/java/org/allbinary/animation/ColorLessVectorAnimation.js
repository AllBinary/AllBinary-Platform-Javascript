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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimation } from './VectorAnimation.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class ColorLessVectorAnimation extends VectorAnimation {
    constructor(currentPoints, animationBehavior) {
        super(currentPoints, BasicColorFactory.getInstance().WHITE, animationBehavior);
        //For kotlin this is before the body of the constructor.
    }
    paintXY(graphics, x, y) {
        this.paintVectors(graphics, x, y);
    }
}
