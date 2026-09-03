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
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;
//not plain js import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryFlickerAndroidImageRotationAnimation } from './AllBinaryFlickerAndroidImageRotationAnimation.js';
//not GWT import const AllBinaryFlickerAndroidImageRotationAnimation = globalThis.org.allbinary.animation.image.AllBinaryFlickerAndroidImageRotationAnimation;
export class AllBinaryFlickerAndroidImageRotationAnimationFactory extends Object {
    constructor(image, width, height, angleIncrement, animationBehaviorFactory) {
        super();
        this.image = NullImage.NULL_IMAGE;
        this.setImage(image);
        this.angleIncrement = angleIncrement;
        this.animationBehaviorFactory = animationBehaviorFactory;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var image = ImageCopyUtil.getInstance().createImage(this.getImage());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AllBinaryFlickerAndroidImageRotationAnimation(this.getImage(), image, AngleInfo.getInstance(this.angleIncrement), AngleFactory.getInstance().TOTAL_ANGLE, this.animationBehaviorFactory.getOrCreateInstance());
    }
    getAngleIncrement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrement;
    }
    setImage(image) {
        this.image = image;
    }
    getImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.image;
    }
    setInitialScale(scaleProperties) {
    }
}
