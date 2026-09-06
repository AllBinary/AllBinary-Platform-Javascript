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
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { ImageCopyUtil } from '../../../../org/allbinary/media/image/ImageCopyUtil.js';
//not GWT import const ImageCopyUtil = globalThis.org.allbinary.media.image.ImageCopyUtil;
import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
//not GWT import const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;
import { ImageRotationUtil } from '../../../../org/allbinary/media/image/ImageRotationUtil.js';
//not GWT import const ImageRotationUtil = globalThis.org.allbinary.media.image.ImageRotationUtil;
//not plain js import { PlaynMutableImage } 
const PlaynMutableImage = globalThis.org.microemu.device.playn.PlaynMutableImage;
//not plain js import { CanvasImage } 
const CanvasImage = globalThis.playn.core.CanvasImage;
//not plain js import { CanvasSurface } 
const CanvasSurface = globalThis.playn.core.CanvasSurface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageBaseRotationAnimation } from './ImageBaseRotationAnimation.js';
//not GWT import - same folder const ImageBaseRotationAnimation = globalThis.org.allbinary.animation.image.ImageBaseRotationAnimation;
import { AlphaBaseProcessor } from './AlphaBaseProcessor.js';
//not GWT import - same folder const AlphaBaseProcessor = globalThis.org.allbinary.animation.image.AlphaBaseProcessor;
import { AlphaProcessor } from './AlphaProcessor.js';
//not GWT import - same folder const AlphaProcessor = globalThis.org.allbinary.animation.image.AlphaProcessor;
export class AllBinaryHTMLImageRotationAnimation extends ImageBaseRotationAnimation {
    constructor(originalImage, image, angleInfo, totalAngle, animationBehavior) {
        super(image, angleInfo, totalAngle, animationBehavior);
        this.imageRotationUtil = ImageRotationUtil.getInstance();
        this.imageModifierUtil = ImageModifierUtil.getInstanceOrCreate();
        this.twoImages = new Array(2);
        this.canvasSurfaceArray = new Array(2);
        this.bufferedImageIndex = 0;
        this.alphaProcessor = AlphaBaseProcessor.getInstance();
        //For kotlin this is before the body of the constructor.
        this.originalImage = originalImage;
        this.imageToShow = image;
        this.twoImages[0] = image;
        this.twoImages[1] = ImageCopyUtil.getInstance().createImage(image);
        this.canvasSurfaceArray[0] = this.getCanvasSurface(this.twoImages[0]);
        this.canvasSurfaceArray[1] = this.getCanvasSurface(this.twoImages[1]);
    }
    getCanvasSurface(image) {
        var htmlImage = image;
        ;
        var canvasImage = htmlImage.getImage();
        ;
        var canvasSurface = htmlImage.getCanvasSurface(canvasImage);
        ;
        canvasSurface.translate(this.originalImage.getWidth() / 2, this.originalImage.getHeight() / 2);
        //if statement needs to be on the same line and ternary does not work the same way.
        return canvasSurface;
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
    nextRotation() {
        super.nextRotation();
        this.updateImage();
    }
    previousRotation() {
        super.previousRotation();
        this.updateImage();
    }
    updateImage() {
        var canvasSurface = this.canvasSurfaceArray[this.bufferedImageIndex];
        ;
        canvasSurface.save();
        this.imageRotationUtil.rotateImageCanvasSurfaceClear(this.originalImage, this.twoImages[this.bufferedImageIndex], canvasSurface, this.angleInfo.getAngle() + 90);
        this.alphaProcessor.setAlpha(this.imageModifierUtil, this.originalImage, this.twoImages[this.bufferedImageIndex], this.alphaP);
        this.imageRotationUtil.drawImage(this.originalImage, imageToShow, canvasSurface);
        canvasSurface.restore();
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
}
