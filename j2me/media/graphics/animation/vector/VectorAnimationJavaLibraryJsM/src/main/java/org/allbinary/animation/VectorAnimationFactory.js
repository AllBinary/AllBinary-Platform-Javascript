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
import { VectorAnimation } from './VectorAnimation.js';
import { AnimationBehavior } from './AnimationBehavior.js';
export class VectorAnimationFactory extends Object {
    getInstance(points, basicColor) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VectorAnimation(points, basicColor, AnimationBehavior.getInstance());
    }
}
