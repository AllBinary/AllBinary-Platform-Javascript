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
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimation } from './VectorAnimation.js';
export class ColorLessVectorAnimation extends VectorAnimation {
    constructor(currentPoints, animationBehavior) {
        super(currentPoints, BasicColorFactory.getInstance().WHITE, animationBehavior);
        //For kotlin this is before the body of the constructor.
    }
    paintXY(graphics, x, y) {
        this.paintVectors(graphics, x, y);
    }
}
