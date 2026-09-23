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
import { Matrix } from '../../../../android/graphics/Matrix.js';
//not GWT import const AngleInfo
import { AndroidImageUtil } from '../../../../org/allbinary/media/image/AndroidImageUtil.js';
//not GWT import const AndroidImageUtil
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
//not GWT import const ImageModifierUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
//not GWT import - same folder const ImageBaseRotationAnimation
export class AllBinaryFlickerAndroidImageRotationAnimation extends ImageBaseRotationAnimation {
    constructor(originalImage, image, angleInfo, totalAngle, animationBehavior) {
        super(image, angleInfo, totalAngle, animationBehavior);
        this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
        this.androidImageUtil = AndroidImageUtil.getInstance();
        this.matrix = new Matrix();
        //For kotlin this is before the body of the constructor.
        this.originalImage = originalImage;
        this.halfWidth = (image.getWidth() >> 1);
        this.halfHeight = (image.getHeight() >> 1);
        this.increment = (this.angleInfo.getAngleIncrementInfo().getAngleIncrement());
    }
    setBasicColorP(basicColor) {
        var changed = false;
        ;
        if (this.getBasicColorP() ==
            null
            || this.getBasicColorP().intValue() != basicColor.intValue()) {
            this.imageModifierUtil.setColor(this.originalImage, this.getImage(), 0, basicColor);
            changed = true;
        }
        super.setBasicColorP(basicColor);
        if (changed) {
            this.matrix.setRotate(0.0, this.halfWidth, this.halfHeight);
            this.updateImage();
        }
    }
    changeBasicColor(basicColor) {
        this.setBasicColorP(basicColor);
    }
    setAlpha(alpha) {
        var changed = false;
        ;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha);
        this.imageModifierUtil.setAlpha(this.originalImage, this.getImage(), 0, this.alphaP);
        if (changed) {
            this.matrix.setRotate(0.0, this.halfWidth, this.halfHeight);
            this.updateImage();
        }
    }
    nextRotation() {
        super.nextRotation();
        this.matrix.setRotate(this.increment, this.halfWidth, this.halfHeight);
        this.updateImage();
    }
    previousRotation() {
        super.previousRotation();
        this.matrix.setRotate(-this.increment, this.halfWidth, this.halfHeight);
        this.updateImage();
    }
    updateImage() {
        this.androidImageUtil.rotate(this.getImage(), originalImage, matrix, imageModifierUtil.paint);
    }
    setFrame(index) {
        var currentFrame = this.circularIndexUtil.getIndex();
        ;
        this.circularIndexUtil.setIndex(index);
        var newFrame = this.circularIndexUtil.getIndex();
        ;
        this.angleInfo.adjustAngle(newFrame);
        this.matrix.setRotate((newFrame - currentFrame) * this.increment, this.halfWidth, this.halfHeight);
        this.updateImage();
    }
}
