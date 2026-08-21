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
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
import { RightToLeftImageAnimation } from './RightToLeftImageAnimation.js';
import { AdjustedRightToLeftImageAnimation } from './AdjustedRightToLeftImageAnimation.js';
export class RightToLeftImageAnimationFactory extends BaseImageAnimationFactory {
    constructor(image, dx, dy, animationBehaviorFactory) {
        super(image, PrimitiveIntUtil.getArrayInstance(), image.getWidth(), image.getHeight(), dx, dy, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var scaledImage = this.animationFactoryImageScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            this.animationFactoryImageScaleUtil.processAdjust(this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedRightToLeftImageAnimation(scaledImage, this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new RightToLeftImageAnimation(scaledImage, this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
}
