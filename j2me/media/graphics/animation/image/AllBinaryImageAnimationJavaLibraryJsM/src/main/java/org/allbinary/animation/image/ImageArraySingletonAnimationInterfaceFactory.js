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
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
import { SingletonAnimationInterfaceFactory } from '../../../../org/allbinary/animation/SingletonAnimationInterfaceFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayAnimation } from './ImageArrayAnimation.js';
export class ImageArraySingletonAnimationInterfaceFactory extends SingletonAnimationInterfaceFactory {
    constructor(imageArray) {
        super(new ImageArrayAnimation(imageArray, AnimationBehavior.getInstance()));
        //For kotlin this is before the body of the constructor.
    }
}
