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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
import { ImageToRotationImageArrayUtil } from '../../../../org/allbinary/media/image/ImageToRotationImageArrayUtil.js';
//not GWT import const ImageToRotationImageArrayUtil = globalThis.org.allbinary.media.image.ImageToRotationImageArrayUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
//not GWT import const ImageArrayRotationAnimationInfo = globalThis.org.allbinary.animation.image.ImageArrayRotationAnimationInfo;
import { AdjustedImageArrayRotationAnimation } from './AdjustedImageArrayRotationAnimation.js';
//not GWT import const AdjustedImageArrayRotationAnimation = globalThis.org.allbinary.animation.image.AdjustedImageArrayRotationAnimation;
//TWB - Adjustments should be done in the resource creation and not at the animation level
export class PooledImageArrayRotationAnimationFactory extends Object {
    //@Throws(Exception.constructor)
    static createFactory(image, animationBehaviorFactory) {
        var totalAngle = Math.round(AngleFactory.getInstance().TOTAL_ANGLE);
        ;
        var angleIncrement = (totalAngle / GameConfigurationCentral.getInstance().getGameControlFidelity());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(), -(image.getWidth() >> 2), -(image.getHeight() >> 2), angleIncrement, animationBehaviorFactory);
    }
    //@Throws(Exception.constructor)
    static createDXY(image, dx, dy, animationBehaviorFactory) {
        var totalAngle = Math.round(AngleFactory.getInstance().TOTAL_ANGLE);
        ;
        var angleIncrement = (totalAngle / GameConfigurationCentral.getInstance().getGameControlFidelity());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new PooledImageArrayRotationAnimationFactory(image, image.getWidth(), image.getHeight(), dx, dy, angleIncrement, animationBehaviorFactory);
    }
    constructor(image, width, height, dx, dy, angleIncrement, animationBehaviorFactory) {
        super();
        this.allBinaryImageRotationAnimationInfo = NullUtil.getInstance().NULL_OBJECT;
        this.animationBehaviorFactory = animationBehaviorFactory;
        var totalAngle = Math.round(AngleFactory.getInstance().TOTAL_ANGLE);
        ;
        var imageArray = ImageToRotationImageArrayUtil.getInstance().generate(image, angleIncrement, totalAngle);
        ;
        this.allBinaryImageRotationAnimationInfo = new ImageArrayRotationAnimationInfo(imageArray, angleIncrement, totalAngle, dx, dy);
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AdjustedImageArrayRotationAnimation.createAdjustedImageArrayRotationAnimationInfo(this.allBinaryImageRotationAnimationInfo, this.animationBehaviorFactory.getOrCreateInstance());
        ;
    }
    setInitialScale(scaleProperties) {
    }
}
