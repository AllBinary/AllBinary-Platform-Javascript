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
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
//not GWT import const ImageToRotationImageArrayUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import - same folder const BaseImageAnimationFactory
import { ImageArrayRotationAnimation } from './ImageArrayRotationAnimation.js';
//not GWT import - same folder const ImageArrayRotationAnimation
import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import - same folder const AdjustedImageArrayRotationAnimation
export class AllBinaryArrayImageRotationAnimationFactory extends BaseImageAnimationFactory {
    //@Throws(Exception.constructor)
    static createFactory(image, dx, dy) {
        var arrayImageRotationAnimationFactory = new AllBinaryArrayImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), AngleFactory.getInstance().TOTAL_ANGLE / GameConfigurationCentral.getInstance().getGameControlFidelity(), AnimationBehaviorFactory.getInstance());
        ;
        arrayImageRotationAnimationFactory.initDXY(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return arrayImageRotationAnimationFactory;
    }
    //@Throws(Exception.constructor)
    static createFactoryA(image, dx, dy, angleIncrement) {
        var arrayImageRotationAnimationFactory = new AllBinaryArrayImageRotationAnimationFactory(image, image.getWidth(), image.getHeight(), angleIncrement, AnimationBehaviorFactory.getInstance());
        ;
        arrayImageRotationAnimationFactory.initDXY(dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return arrayImageRotationAnimationFactory;
    }
    constructor(image, width, height, angleIncrement, animationBehaviorFactory) {
        super(image, PrimitiveIntUtil.getArrayInstance(), width, height, 0, 0, animationBehaviorFactory);
        this.imageArray = NullImage.NULL_IMAGE_ARRAY;
        //For kotlin this is before the body of the constructor.
        this.angleIncrement = angleIncrement;
        this.init();
    }
    //@Throws(Exception.constructor)
    init() {
        this.setImageArray(ImageToRotationImageArrayUtil.getInstance().generate(this.getImage(), this.getAngleIncrement(), Math.round(AngleFactory.getInstance().TOTAL_ANGLE)));
    }
    initDXY(dx, dy) {
        this.animationFactoryInitializationVisitor.dx = dx;
        this.animationFactoryInitializationVisitor.dy = dy;
        this.animationFactoryInitializationVisitor.originalDx = dx;
        this.animationFactoryInitializationVisitor.originalDy = dy;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var scaledImageArray = new Array(this.imageArray.length);
        ;
        var size = scaledImageArray.length;
        ;
        var image = this.getImage();
        ;
        for (var index = 0; index < size; index++) {
            scaledImageArray[index] = this.animationFactoryImageScaleUtil.createImage(image, image.getWidth(), image.getHeight(), this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        }
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            this.animationFactoryImageScaleUtil.processAdjust(this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.getAngleIncrement()), Math.round(AngleFactory.getInstance().TOTAL_ANGLE), this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ImageArrayRotationAnimation(scaledImageArray, AngleInfo.getInstance(this.getAngleIncrement()), Math.round(AngleFactory.getInstance().TOTAL_ANGLE), this.animationBehaviorFactory.getOrCreateInstance());
        }
    }
    setImageArray(imageArray) {
        this.imageArray = imageArray;
    }
    getAngleIncrement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrement;
    }
}
