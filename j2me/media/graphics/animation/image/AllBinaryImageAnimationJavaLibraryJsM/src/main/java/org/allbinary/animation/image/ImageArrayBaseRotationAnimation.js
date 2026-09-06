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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { DisposalUtil } from '../../../../org/allbinary/DisposalUtil.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
//not GWT import const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageArrayBaseRotationAnimation extends RotationAnimation {
    constructor(originalImageArray, angleInfo, animationBehavior) {
        super(angleInfo, CircularIndexUtil.createInstance(360 / angleInfo.getAngleIncrementInfo().getAngleIncrement()), animationBehavior);
        this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
        this.imageArray = NullImage.NULL_IMAGE_ARRAY;
        this.totalFrames = 0;
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.originalImageArray = originalImageArray;
        this.setImageArray(this.imageModifierUtil.getImageArray(originalImageArray));
        this.currentImage = this.imageArray[this.circularIndexUtil.getIndex()];
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    setAlpha(alpha) {
        if (this.alphaP != alpha) {
            super.setAlpha(alpha);
            this.imageModifierUtil.reset();
            var index = this.circularIndexUtil.getIndex();
            ;
            this.imageModifierUtil.setAlpha(this.originalImageArray[index], this.imageArray[index], index, this.alphaP);
        }
    }
    nextRotation() {
        super.nextRotation();
        var index = this.circularIndexUtil.getIndex();
        ;
        this.imageModifierUtil.setAlpha(this.originalImageArray[index], this.imageArray[index], index, this.alphaP);
        this.currentImage = this.imageArray[index];
    }
    previousRotation() {
        super.previousRotation();
        var index = this.circularIndexUtil.getIndex();
        ;
        this.imageModifierUtil.setAlpha(this.originalImageArray[index], this.imageArray[index], index, this.alphaP);
        this.currentImage = this.imageArray[index];
    }
    setFrame(index2) {
        super.setFrame(index2);
        var index = this.circularIndexUtil.getIndex();
        ;
        this.imageModifierUtil.setAlpha(this.originalImageArray[index], this.imageArray[index], index, this.alphaP);
        this.currentImage = this.imageArray[index];
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    setImageArray(imageArray) {
        this.imageArray = imageArray;
        this.totalFrames = imageArray.length;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.totalFrames);
    }
    paintXY(graphics, x, y) {
        graphics.drawImage(this.currentImage, x, y, this.anchor);
    }
    close() {
        var disposalUtil = DisposalUtil.getInstance();
        ;
        var size2 = this.imageArray.length;
        ;
        for (var index = 0; index < size2; index++) {
            disposalUtil.disposeImage(this.imageArray[index]);
        }
        var size = this.originalImageArray.length;
        ;
        for (var index = 0; index < size; index++) {
            disposalUtil.disposeImage(this.originalImageArray[index]);
        }
        disposalUtil.disposeImage(this.currentImage);
    }
    //@Throws(Throwable.constructor)
    finalize() {
        var disposalUtil = DisposalUtil.getInstance();
        ;
        var size2 = this.imageArray.length;
        ;
        for (var index = 0; index < size2; index++) {
            disposalUtil.disposeImage(this.imageArray[index]);
        }
        var size = this.originalImageArray.length;
        ;
        for (var index = 0; index < size; index++) {
            disposalUtil.disposeImage(this.originalImageArray[index]);
        }
        disposalUtil.disposeImage(this.currentImage);
    }
}
