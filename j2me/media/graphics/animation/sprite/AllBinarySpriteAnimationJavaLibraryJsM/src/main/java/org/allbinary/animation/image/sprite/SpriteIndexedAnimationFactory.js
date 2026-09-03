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
//not plain js import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;
import { BaseImageAnimationFactory } from '../../../../../org/allbinary/animation/image/BaseImageAnimationFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
//not GWT import const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
//not GWT import const AnimationFactorySpriteScaleUtil = globalThis.org.allbinary.image.sprite.AnimationFactorySpriteScaleUtil;
//not plain js import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import const SpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.SpriteIndexedAnimation;
import { AdjustedSpriteIndexedAnimation } from './AdjustedSpriteIndexedAnimation.js';
//not GWT import const AdjustedSpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.AdjustedSpriteIndexedAnimation;
export class SpriteIndexedAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createCWHDXY(image, basicColorArray, width, height, dx, dy, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SpriteIndexedAnimationFactory(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, dx, dy, animationBehaviorFactory);
    }
    //@Throws(Exception.constructor)
    static createCWH(image, basicColorArray, width, height, animationBehaviorFactory) {
        var spriteIndexedAnimationFactory = new SpriteIndexedAnimationFactory(image, basicColorArray, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        ;
        spriteIndexedAnimationFactory.initHWH();
        //if statement needs to be on the same line and ternary does not work the same way.
        return spriteIndexedAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createWH(image, width, height, animationBehaviorFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SpriteIndexedAnimationFactory(image, BasicColorUtil.getInstance().ZERO_ARRAY, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
    }
    constructor(image, basicColorArray, sequenceArray, width, height, dx, dy, animationBehaviorFactory) {
        super(image, sequenceArray, width, height, dx, dy, animationBehaviorFactory);
        this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
        this.basicColorArray = BasicColorUtil.getInstance().ZERO_ARRAY;
        //For kotlin this is before the body of the constructor.
        this.basicColorArray = basicColorArray;
    }
    initHWH() {
        this.animationFactoryInitializationVisitor.dx = -(this.animationFactoryInitializationVisitor.width >> 2);
        this.animationFactoryInitializationVisitor.dy = -(this.animationFactoryInitializationVisitor.height >> 2);
        if (AndroidUtil.isAndroid()) {
            this.animationFactoryInitializationVisitor.dx += 3;
        }
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var sprite = this.animationFactorySpriteScaleUtil.createImage(this.getImage(), this.animationFactoryInitializationVisitor.width, this.animationFactoryInitializationVisitor.height, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedSpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new SpriteIndexedAnimation(sprite, this.getImage(), this.basicColorArray, this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstance(0);
        ;
    }
}
