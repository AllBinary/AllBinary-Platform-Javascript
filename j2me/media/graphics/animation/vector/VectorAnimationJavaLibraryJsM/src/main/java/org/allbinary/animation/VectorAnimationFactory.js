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
//not GWT import - same folder const VectorAnimationFactoryInterface = globalThis.org.allbinary.animation.VectorAnimationFactoryInterface;
import { VectorAnimation } from './VectorAnimation.js';
//not GWT import - same folder const VectorAnimation = globalThis.org.allbinary.animation.VectorAnimation;
import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class VectorAnimationFactory extends Object {
    getInstance(points, basicColor) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VectorAnimation(points, basicColor, AnimationBehavior.getInstance());
    }
}
