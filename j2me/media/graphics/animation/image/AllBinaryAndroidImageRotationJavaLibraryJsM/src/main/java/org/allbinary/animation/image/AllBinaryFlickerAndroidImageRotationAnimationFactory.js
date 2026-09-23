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
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const AnimationInterfaceFactoryInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
//not GWT import const ImageCopyUtil
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
//not GWT import const ScaleProperties
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryFlickerAndroidImageRotationAnimation } from './AllBinaryFlickerAndroidImageRotationAnimation.js';
//not GWT import - same folder const AllBinaryFlickerAndroidImageRotationAnimation
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
