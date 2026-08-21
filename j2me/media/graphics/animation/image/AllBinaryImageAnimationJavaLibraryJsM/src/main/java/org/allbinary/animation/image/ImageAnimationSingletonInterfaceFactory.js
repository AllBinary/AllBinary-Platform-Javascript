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
import { AnimationFrameToImageUtil } from '../../../../org/allbinary/image/AnimationFrameToImageUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageAnimation } from './ImageAnimation.js';
export class ImageAnimationSingletonInterfaceFactory extends SingletonAnimationInterfaceFactory {
    constructor(animationInterface, width, height) {
        super(new ImageAnimation(AnimationFrameToImageUtil.getInstance().getInstanceWH(width, height, animationInterface), AnimationBehavior.getInstance()));
        //For kotlin this is before the body of the constructor.
    }
}
