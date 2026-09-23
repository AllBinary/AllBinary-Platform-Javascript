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
//not GWT import const AnimationBehaviorFactory
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory
import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
//not GWT import const BasicColorUtil
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
//not GWT import const AnimationFactorySpriteScaleUtil
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import - same folder const SpriteIndexedAnimation
import { AdjustedSpriteIndexedAnimation } from './AdjustedSpriteIndexedAnimation.js';
//not GWT import - same folder const AdjustedSpriteIndexedAnimation
export class OneRowSpriteIndexedAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createFactoryDX(image, dx, animationBehaviorFactory) {
        var oneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        ;
        oneRowSpriteIndexedAnimationFactory.initW(dx);
        //if statement needs to be on the same line and ternary does not work the same way.
        return oneRowSpriteIndexedAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createFactoryDXY(image, dx, dy, animationBehaviorFactory) {
        var oneRowSpriteIndexedAnimationFactory = new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
        ;
        oneRowSpriteIndexedAnimationFactory.init(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return oneRowSpriteIndexedAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createFactoryWH(image, width, height, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    }
    //@Throws(Exception.constructor)
    static createFactory(image, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OneRowSpriteIndexedAnimationFactory(image, PrimitiveIntUtil.getArrayInstance(), image.getHeight(), image.getHeight(), 0, 0, animationBehaviorFactory);
    }
    constructor(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory) {
        super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    init(dx, dy) {
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
    }
    initW(dx) {
        this.init(dx, 0);
        this.animationFactoryInitializationVisitor.dx += -(this.animationFactoryInitializationVisitor.width >> 2);
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var sprite = this.animationFactorySpriteScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedSpriteIndexedAnimation(sprite, this.getImage(), BasicColorUtil.getInstance().ZERO_ARRAY, this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new SpriteIndexedAnimation(sprite, this.getImage(), BasicColorUtil.getInstance().ZERO_ARRAY, this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
}
