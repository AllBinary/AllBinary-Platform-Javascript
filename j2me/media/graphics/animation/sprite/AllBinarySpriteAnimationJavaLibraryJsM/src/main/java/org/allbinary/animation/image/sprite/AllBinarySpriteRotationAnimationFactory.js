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
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinarySpriteRotationAnimation } from './AllBinarySpriteRotationAnimation.js';
import { AllBinaryAdjustedSpriteRotationAnimation } from './AllBinaryAdjustedSpriteRotationAnimation.js';
export class AllBinarySpriteRotationAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createWHDY(image, dx, dy, animationBehaviorFactory) {
        var spriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight() >> 2), (image.getHeight() >> 2), 0, 0, animationBehaviorFactory);
        ;
        spriteRotationAnimationFactory.initWH(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return spriteRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createWH(image, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinarySpriteRotationAnimationFactory.createWHDY(image, 0, 0, animationBehaviorFactory);
        ;
    }
    //@Throws(Exception.constructor)
    static createDXY(image, dx, dy, animationBehaviorFactory) {
        var spriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        ;
        spriteRotationAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return spriteRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createDXYQ(image, dx, dy, animationBehaviorFactory) {
        var spriteRotationAnimationFactory = new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight() >> 2), (image.getHeight() >> 2), 0, 0, animationBehaviorFactory);
        ;
        spriteRotationAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return spriteRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createQ(image, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), (image.getHeight() >> 2), (image.getHeight() >> 2), 0, 0, animationBehaviorFactory);
    }
    //@Throws(Exception.constructor)
    static createWHF(image, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinarySpriteRotationAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    }
    constructor(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory) {
        super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
        }
    }
    init(dx, dy) {
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
    }
    initWH(dx, dy) {
        this.init(dx, dy);
        this.animationFactoryInitializationVisitor.dx += -this.animationFactoryInitializationVisitor.width / 5;
        this.animationFactoryInitializationVisitor.dy += -this.animationFactoryInitializationVisitor.height / 5;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var sprite = this.animationFactorySpriteScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinaryAdjustedSpriteRotationAnimation(sprite, this.getImage(), this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AllBinarySpriteRotationAnimation(sprite, this.getImage(), this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstance(0);
        ;
    }
}
