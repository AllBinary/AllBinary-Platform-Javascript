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
import { Exception } from '../../../../java/lang/Exception.js';
import { Math } from '../../../../java/lang/Math.js';
//not GWT import const PlaynMutableImage
//not plain js import { Canvas } 
const Canvas = globalThis.playn.core.Canvas;
//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
//not plain js import { ImageImpl } 
const ImageImpl = globalThis.playn.core.ImageImpl;
//not plain js import { HTMLPlaynUtil } 
const HTMLPlaynUtil = globalThis.playn.html.HTMLPlaynUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCreationUtil } from './ImageCreationUtil.js';
//not GWT import - same folder const ImageCreationUtil
export class ImageRotationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageRotationUtil.instance;
    }
    constructor() {
        super();
        this.playnUtil = HTMLPlaynUtil.getInstance();
    }
    rotateImage(originalImage, image, totalAngle) {
        if (image.isMutable()) {
            var htmlImage = image;
            ;
            var canvasImage = htmlImage.getImage();
            ;
            var canvas = this.playnUtil.getCanvas(canvasImage);
            ;
            canvas.save();
            canvas.clear();
            canvas.translate(originalImage.getWidth() / 2, originalImage.getHeight() / 2);
            var image2 = this.rotateImageCanvasSurface(originalImage, image, canvas, totalAngle);
            ;
            this.drawImage(originalImage, image, canvas);
            canvas.restore();
            //if statement needs to be on the same line and ternary does not work the same way.
            return image2;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    rotateImageCanvasSurfaceClear(originalImage, image, canvasSurface, totalAngle) {
        if (image.isMutable()) {
            canvasSurface.translate(-originalImage.getWidth() / 2, -originalImage.getHeight() / 2);
            canvasSurface.clear();
            canvasSurface.translate(originalImage.getWidth() / 2, originalImage.getHeight() / 2);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.rotateImageCanvasSurface(originalImage, image, canvasSurface, totalAngle);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    rotateImageCanvasSurface(originalImage, image, canvasSurface, totalAngle) {
        if (image.isMutable()) {
            canvasSurface.rotate(Math.toRadians(totalAngle));
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
    }
    drawImage(originalImage, image, canvasSurface) {
        var originalPlayNImage = null;
        ;
        if (originalImage.isMutable()) {
            var originalHTMLImage = originalImage;
            ;
            originalPlayNImage = originalHTMLImage.getImage();
        }
        else {
            var originalHTMLImage = originalImage;
            ;
            originalPlayNImage = originalHTMLImage.getImage();
        }
        canvasSurface.draw(originalPlayNImage, -originalImage.getWidth() / 2, -originalImage.getHeight() / 2);
    }
    //@Throws(Exception.constructor)
    createRotatedImage(originalImage, rotationInDegrees) {
        var image = ImageCreationUtil.getInstance().createImageWH(originalImage.getWidth(), originalImage.getHeight());
        ;
        var rotatedImage = this.rotateImage(originalImage, image, rotationInDegrees);
        ;
        if (rotatedImage ==
            null) {
            throw new Exception("Not Mutable");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return rotatedImage;
    }
}
ImageRotationUtil.instance = new ImageRotationUtil();
