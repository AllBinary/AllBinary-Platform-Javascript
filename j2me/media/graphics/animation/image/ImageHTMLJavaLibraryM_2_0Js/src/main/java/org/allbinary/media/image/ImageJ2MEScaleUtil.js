/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2023 AllBinary
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
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const PlaynMutableImage
//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
//not plain js import { ImageImpl } 
const ImageImpl = globalThis.playn.core.ImageImpl;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageJ2MEScaleUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageJ2MEScaleUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    scaleArray(images, width, height) {
        var scaledImages = new Array(images.length);
        ;
        for (var index = images.length; --index >= 0;) {
            scaledImages[index] = this.scale(images[index], width, height);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledImages;
    }
    //@Throws(Exception.constructor)
    scale(image, width, height) {
        var originalPlayNImage = null;
        ;
        if (image.isMutable()) {
            var originalHTMLImage = image;
            ;
            originalPlayNImage = originalHTMLImage.getImage();
        }
        else {
            var originalHTMLImage = image;
            ;
            originalPlayNImage = originalHTMLImage.getImage();
        }
        var scaledImage = Image.createImageWH(width, height);
        ;
        var htmlImage = scaledImage;
        ;
        var canvasImage = htmlImage.getImage();
        ;
        canvasImage.draw(originalPlayNImage, 0, 0, scaledImage.getWidth(), scaledImage.getHeight(), 0, 0, image.getWidth(), image.getHeight());
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledImage;
    }
}
ImageJ2MEScaleUtil.instance = new ImageJ2MEScaleUtil();
