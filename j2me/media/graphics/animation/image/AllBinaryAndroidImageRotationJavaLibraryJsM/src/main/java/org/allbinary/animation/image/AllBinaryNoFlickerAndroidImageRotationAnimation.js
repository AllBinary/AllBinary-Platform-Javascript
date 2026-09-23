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
//not GWT import const BasicColor
import { AndroidImageUtil } from '../../../../org/allbinary/media/image/AndroidImageUtil.js';
//not GWT import const AndroidImageUtil
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
//not GWT import const ImageCopyUtil
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
//not GWT import const ImageModifierUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
//not GWT import - same folder const ImageBaseRotationAnimation
export class AllBinaryNoFlickerAndroidImageRotationAnimation extends ImageBaseRotationAnimation {
    constructor(originalImage, image, angleInfo, totalAngle, animationBehavior) {
        super(image, angleInfo, totalAngle, animationBehavior);
        this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
        this.androidImageUtil = AndroidImageUtil.getInstance();
        this.matrix = new Matrix();
        this.twoImages = new Array(2);
        this.bufferedImageIndex = 0;
        //For kotlin this is before the body of the constructor.
        this.originalImage = originalImage;
        this.halfWidth = (image.getWidth() >> 1);
        this.halfHeight = (image.getHeight() >> 1);
        this.increment = (this.angleInfo.getAngleIncrementInfo().getAngleIncrement());
        this.imageToShow = image;
        this.twoImages[0] = image;
        this.twoImages[1] = ImageCopyUtil.getInstance().createImage(image);
    }
    setBasicColorP(basicColor) {
        var changed = false;
        ;
        if (this.getBasicColorP() ==
            null
            || this.getBasicColorP().intValue() != basicColor.intValue()) {
            this.imageModifierUtil.setColor(this.originalImage, this.imageToShow, 0, basicColor);
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
        this.imageModifierUtil.setAlpha(this.originalImage, this.imageToShow, 0, this.alphaP);
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
        this.androidImageUtil.rotate(this.twoImages[this.bufferedImageIndex], originalImage, matrix, imageModifierUtil.paint);
        this.swap();
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
    swap() {
        this.imageToShow = this.twoImages[this.bufferedImageIndex];
        if (this.bufferedImageIndex == 0) {
            this.bufferedImageIndex = 1;
        }
        else {
            this.bufferedImageIndex = 0;
        }
    }
    paintXY(graphics, x, y) {
        graphics.drawImage(this.imageToShow, x, y, this.anchor);
    }
}
