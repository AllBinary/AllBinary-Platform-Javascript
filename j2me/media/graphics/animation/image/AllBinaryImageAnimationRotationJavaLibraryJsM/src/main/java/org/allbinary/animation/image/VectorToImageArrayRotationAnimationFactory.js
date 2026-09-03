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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;
import { VectorAnimation } from '../../../../org/allbinary/animation/VectorAnimation.js';
//not GWT import const VectorAnimation = globalThis.org.allbinary.animation.VectorAnimation;
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { AnimationFrameToImageUtil } from '../../../../org/allbinary/image/AnimationFrameToImageUtil.js';
//not GWT import const AnimationFrameToImageUtil = globalThis.org.allbinary.image.AnimationFrameToImageUtil;
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
//not GWT import const VectorInfo = globalThis.org.allbinary.vector.VectorInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;
import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import const AdjustedImageArrayRotationAnimation = globalThis.org.allbinary.animation.image.AdjustedImageArrayRotationAnimation;
export class VectorToImageArrayRotationAnimationFactory extends BaseImageAnimationFactory {
    constructor(vectorInfo, basicColor, animationBehaviorFactory) {
        super(AnimationFrameToImageUtil.getInstance().getInstanceTranslate(vectorInfo.getWidth(), vectorInfo.getHeight(), VectorAnimation.createVectorAnimation(vectorInfo.getPoints(), basicColor, animationBehaviorFactory.getOrCreateInstance())), PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
        this.imageArray = NullImage.NULL_IMAGE_ARRAY;
        this.angleIncrement = 0;
        //For kotlin this is before the body of the constructor.
        this.init();
    }
    //@Throws(Exception.constructor)
    init() {
        var angleFactory = AngleFactory.getInstance();
        ;
        this.angleIncrement = angleFactory.TOTAL_ANGLE / GameConfigurationCentral.getInstance().getGameControlFidelity();
        this.imageArray = ImageToRotationImageArrayUtil.getInstance().generate(this.getImage(), this.getAngleIncrement(), Math.round(angleFactory.TOTAL_ANGLE));
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        if (this.animationFactoryInitializationVisitor.dx != 0 || this.animationFactoryInitializationVisitor.dy != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AdjustedImageArrayRotationAnimation(this.imageArray, AngleInfo.getInstance(this.getAngleIncrement()), Math.round(AngleFactory.getInstance().TOTAL_ANGLE), this.animationFactoryInitializationVisitor.dx, this.animationFactoryInitializationVisitor.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return AdjustedImageArrayRotationAnimation.createAnimation(this.imageArray, AngleInfo.getInstance(this.angleIncrement), Math.round(AngleFactory.getInstance().TOTAL_ANGLE), this.animationBehaviorFactory.getOrCreateInstance());
            ;
        }
    }
    getAngleIncrement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrement;
    }
    setInitialScale(scaleProperties) {
    }
}
