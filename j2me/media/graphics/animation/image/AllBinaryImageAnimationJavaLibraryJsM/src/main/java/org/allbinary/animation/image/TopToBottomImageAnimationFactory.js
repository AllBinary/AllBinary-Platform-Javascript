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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { TopToBottomImageAnimation } from './TopToBottomImageAnimation.js';
export class TopToBottomImageAnimationFactory extends BaseImageAnimationFactory {
    constructor(image, sequenceArray, animationBehaviorFactory) {
        super(image, sequenceArray, image.getWidth(), image.getHeight(), 0, 0, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var scaledImage = this.animationFactoryImageScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TopToBottomImageAnimation(scaledImage, this.getSequenceArray(), this.animationBehaviorFactory.getOrCreateInstance());
    }
}
