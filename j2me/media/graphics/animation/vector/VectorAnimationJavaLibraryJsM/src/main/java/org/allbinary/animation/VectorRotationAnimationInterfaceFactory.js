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
import { Object } from '../../../java/lang/Object.js';
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { VectorRotationAnimation } from './VectorRotationAnimation.js';
export class VectorRotationAnimationInterfaceFactory extends Object {
    constructor(currentPoints, basicColor, animationBehaviorFactory) {
        super();
        this.currentPoints = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.currentPoints = currentPoints;
        this.setBasicColorP(basicColor);
        this.animationBehaviorFactory = animationBehaviorFactory;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VectorRotationAnimation(this.currentPoints, this.getBasicColorP(), this.animationBehaviorFactory.getOrCreateInstance());
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setInitialScale(scaleProperties) {
    }
}
