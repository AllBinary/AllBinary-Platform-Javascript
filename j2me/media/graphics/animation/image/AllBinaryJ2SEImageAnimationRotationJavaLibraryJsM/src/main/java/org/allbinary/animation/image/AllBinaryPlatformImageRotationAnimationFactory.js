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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryJ2SEImageRotationAnimationFactory } from './AllBinaryJ2SEImageRotationAnimationFactory.js';
//not GWT import const AllBinaryJ2SEImageRotationAnimationFactory = globalThis.org.allbinary.animation.image.AllBinaryJ2SEImageRotationAnimationFactory;
export class AllBinaryPlatformImageRotationAnimationFactory extends AllBinaryJ2SEImageRotationAnimationFactory {
    constructor(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation) {
        super(image, width, height, angleIncrement, animationBehaviorFactory, resizeCanvasForRotation);
        //For kotlin this is before the body of the constructor.
    }
}
