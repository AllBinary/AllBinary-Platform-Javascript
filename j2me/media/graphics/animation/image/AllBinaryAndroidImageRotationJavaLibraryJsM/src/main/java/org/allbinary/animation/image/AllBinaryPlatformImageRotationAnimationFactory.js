/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryAndroidImageRotationAnimationFactory } from './AllBinaryAndroidImageRotationAnimationFactory.js';
//not GWT import - same folder const AllBinaryAndroidImageRotationAnimationFactory = globalThis.org.allbinary.animation.image.AllBinaryAndroidImageRotationAnimationFactory;
export class AllBinaryPlatformImageRotationAnimationFactory extends AllBinaryAndroidImageRotationAnimationFactory {
    constructor(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation) {
        super(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation);
        //For kotlin this is before the body of the constructor.
    }
}
