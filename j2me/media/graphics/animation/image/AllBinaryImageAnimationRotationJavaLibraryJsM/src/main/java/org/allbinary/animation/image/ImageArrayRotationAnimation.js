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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const AngleInfo
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayBaseRotationAnimation } from './ImageArrayBaseRotationAnimation.js';
//not GWT import - same folder const ImageArrayRotationAnimationInfo
export class ImageArrayRotationAnimation extends ImageArrayBaseRotationAnimation {
    //@Throws(Exception.constructor)
    static createAnimation(anyType = {}, animationBehavior) {
        var imageRotationAnimationInfo = anyType;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ImageArrayRotationAnimation(imageRotationAnimationInfo.getImageArray(), imageRotationAnimationInfo.getAngleInfoP(), imageRotationAnimationInfo.getTotalAngle(), animationBehavior);
    }
    constructor(imageArray, angleInfo, totalAngle, animationBehavior) {
        super(imageArray, angleInfo, animationBehavior);
        this.expectedTotalFrames = 0;
        //For kotlin this is before the body of the constructor.
        this.init(imageArray, angleInfo, totalAngle);
    }
    //@Throws(Exception.constructor)
    init(imageArray, angleInfo, totalAngle) {
        this.expectedTotalFrames = totalAngle / this.angleInfo.getAngleIncrementInfo().getAngleIncrement();
        this.angleInfo.adjustAngle(0);
        if (this.expectedTotalFrames != this.getSize()) {
            throw new Exception("Wrong Number of Frames");
        }
    }
    setImageArray(imageArray) {
        super.setImageArray(imageArray);
        this.angleInfo.adjustAngle(0);
    }
}
