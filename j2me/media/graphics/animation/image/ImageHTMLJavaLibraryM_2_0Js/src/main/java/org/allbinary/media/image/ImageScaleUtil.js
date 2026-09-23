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
export class ImageScaleUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageScaleUtil.instance;
    }
    constructor() {
        super();
        this.playnUtil = HTMLPlaynUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    createImage2(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);
        ;
    }
    //@Throws(Exception.constructor)
    createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, mutable) {
        var scaleX = scaleNominatorX / scaleDenominatorX;
        ;
        var scaleY = scaleNominatorY / scaleDenominatorY;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);
        ;
    }
    //@Throws(Exception.constructor)
    createImage(imageCache, originalImage, scaleX, scaleY, cached) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImageInternal(originalImage, scaleX, scaleY);
        ;
    }
    //@Throws(Exception.constructor)
    createImageInternal(originalImage, scaleX, scaleY) {
        var image = ImageCreationUtil.getInstance().createImageWH(Math.round((originalImage.getWidth() * scaleX)), Math.round((originalImage.getHeight() * scaleY)));
        ;
        if (image.isMutable()) {
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
            var htmlImage = image;
            ;
            var canvasImage = htmlImage.getImage();
            ;
            var canvas = this.playnUtil.getCanvas(canvasImage);
            ;
            canvas.drawScale(originalPlayNImage, 0, 0, image.getWidth(), image.getHeight(), 0, 0, originalImage.getWidth(), originalImage.getHeight());
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
}
ImageScaleUtil.instance = new ImageScaleUtil();
