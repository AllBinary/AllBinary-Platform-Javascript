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
//not GWT import const NullImage
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
//not GWT import const AngleInfo
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
//not GWT import const ImageCopyUtil
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
//not GWT import const ImageModifierUtil
import { ImageRotationUtil } from '../../../../org/allbinary/media/image/ImageRotationUtil.js';
//not GWT import const ImageRotationUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
//not GWT import - same folder const ImageBaseRotationAnimation
import { ModifierBaseProcessor } from './ModifierBaseProcessor.js';
//not GWT import - same folder const ModifierBaseProcessor
import { ScaleProcessor } from './ScaleProcessor.js';
//not GWT import - same folder const ScaleBaseProcessor
import { SetColorProcessor } from './SetColorProcessor.js';
//not GWT import - same folder const SetColorProcessor
import { ChangeColorProcessor } from './ChangeColorProcessor.js';
//not GWT import - same folder const ChangeColorProcessor
import { AlphaProcessor } from './AlphaProcessor.js';
//not GWT import - same folder const AlphaProcessor
export class AllBinaryJ2SEImageRotationAnimation extends ImageBaseRotationAnimation {
    constructor(originalImage, image, angleInfo, totalAngle, animationBehavior) {
        super(image, angleInfo, totalAngle, animationBehavior);
        this.imageRotationUtil = ImageRotationUtil.getInstance();
        this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
        this.originalImageArray = new Array(1);
        this.twoImages = new Array(2);
        this.bufferedImageIndex = 0;
        this.lastScaleX = 1.0;
        this.lastScaleY = 1.0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.maxScaleX = 0.0;
        this.maxScaleY = 0.0;
        this.alphaProcessor = ModifierBaseProcessor.getInstance();
        this.setColorProcessor = ModifierBaseProcessor.getInstance();
        this.changeColorProcessor = ModifierBaseProcessor.getInstance();
        this.scaleProcessor = ScaleProcessor.getInstance();
        //For kotlin this is before the body of the constructor.
        this.realOriginalImage = originalImage;
        this.originalImageArray[0] = originalImage;
        this.imageToShow = image;
        this.twoImages[0] = image;
        this.twoImages[1] = ImageCopyUtil.getInstance().createImageForRotation(image);
    }
    setBasicColorP(basicColor) {
        var changed = false;
        ;
        if (this.getBasicColorP() ==
            null
            || this.getBasicColorP().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.setBasicColorP(basicColor);
        if (changed) {
            this.setColorProcessor = SetColorProcessor.getInstance();
            this.updateImage();
        }
    }
    changeBasicColor(basicColor) {
        var changed = false;
        ;
        if (this.getChangeBasicColor() ==
            null
            || this.getChangeBasicColor().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.changeBasicColor(basicColor);
        if (changed) {
            this.changeColorProcessor = ChangeColorProcessor.getInstance();
            this.updateImage();
        }
    }
    setAlpha(alpha) {
        var changed = false;
        ;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha);
        if (changed) {
            this.alphaProcessor = AlphaProcessor.getInstance();
            this.updateImage();
        }
    }
    setScale(scaleX, scaleY) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        if (this.scaleX != this.lastScaleX || this.scaleY != this.lastScaleY) {
            this.scaleProcessor.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY);
            this.updateImage();
        }
        this.lastScaleX = this.scaleX;
        this.lastScaleY = this.scaleY;
    }
    setMaxScale(maxScaleX, maxScaleY) {
        this.maxScaleX = maxScaleX;
        this.maxScaleY = maxScaleY;
        this.scaleProcessor.update(this.realOriginalImage, this.originalImageArray, this.twoImages, this.bufferedImageIndex, this.scaleX, this.scaleY, this.maxScaleX, this.maxScaleY);
        this.updateImage();
    }
    nextRotation() {
        super.nextRotation();
        this.updateImage();
    }
    previousRotation() {
        super.previousRotation();
        this.updateImage();
    }
    updateImage() {
        this.imageRotationUtil.rotateImage(this.originalImageArray[0], this.twoImages[this.bufferedImageIndex], this.angleInfo.getAngle() + 90);
        this.alphaProcessor.updateAlpha(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages[this.bufferedImageIndex], 0, this.alphaP);
        this.setColorProcessor.updateColor(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages[this.bufferedImageIndex], 0, this.basicColor);
        this.changeColorProcessor.updateColor(this.imageModifierUtil, NullImage.NULL_IMAGE, this.twoImages[this.bufferedImageIndex], 0, this.changeBasicColorP);
        this.swap();
    }
    setFrame(index) {
        super.setFrame(index);
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
    close() {
        super.close();
        var disposalUtil = DisposalUtil.getInstance();
        ;
        var size2 = this.twoImages.length;
        ;
        for (var index = 0; index < size2; index++) {
            disposalUtil.disposeImage(this.twoImages[index]);
        }
        var size = this.originalImageArray.length;
        ;
        for (var index = 0; index < size; index++) {
            disposalUtil.disposeImage(this.originalImageArray[index]);
        }
        disposalUtil.disposeImage(this.realOriginalImage);
        disposalUtil.disposeImage(this.imageToShow);
    }
    //@Throws(Throwable.constructor)
    finalize() {
        super.finalize();
        var disposalUtil = DisposalUtil.getInstance();
        ;
        var size2 = this.twoImages.length;
        ;
        for (var index = 0; index < size2; index++) {
            disposalUtil.disposeImage(this.twoImages[index]);
        }
        var size = this.originalImageArray.length;
        ;
        for (var index = 0; index < size; index++) {
            disposalUtil.disposeImage(this.originalImageArray[index]);
        }
        disposalUtil.disposeImage(this.realOriginalImage);
        disposalUtil.disposeImage(this.imageToShow);
    }
}
