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
import { Object } from '../../../../java/lang/Object.js';
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayAnimation } from './ImageArrayAnimation.js';
import { AdjustedImageArrayAnimation } from './AdjustedImageArrayAnimation.js';
export class ImageArrayAnimationFactory extends Object {
    constructor(imageArray, dx, dy, animationBehaviorFactory) {
        super();
        this.dx = 0;
        this.dy = 0;
        this.imageArray = imageArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.dx = dx;
        this.dy = dy;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        if (this.dx != 0 || this.dy != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedImageArrayAnimation(this.imageArray, this.dx, this.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ImageArrayAnimation(this.imageArray, AnimationBehavior.getInstance());
        }
    }
    setInitialScale(scaleProperties) {
    }
}
