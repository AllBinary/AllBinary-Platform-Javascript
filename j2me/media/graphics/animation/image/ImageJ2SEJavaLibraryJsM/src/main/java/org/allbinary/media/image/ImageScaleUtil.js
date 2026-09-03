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
//not GWT import const Graphics2D = globalThis.java.awt.Graphics2D;
import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
//not GWT import const BufferedImage = globalThis.java.awt.image.BufferedImage;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageUtil } from './ImageUtil.js';
//not GWT import const ImageUtil = globalThis.org.allbinary.media.image.ImageUtil;
import { ImageJ2SEUtil } from './ImageJ2SEUtil.js';
//not GWT import const ImageJ2SEUtil = globalThis.org.allbinary.media.image.ImageJ2SEUtil;
//not plain js import { ImageCreationUtil } from './ImageCreationUtil.js';
const ImageCreationUtil = globalThis.org.allbinary.media.image.ImageCreationUtil;
export class ImageScaleUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageScaleUtil.instance;
    }
    constructor() {
        super();
        this.imageUtil = ImageUtil.getInstance();
        this.imageJ2SEUtil = ImageJ2SEUtil.getInstance();
        this.imageCreationUtil = ImageCreationUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    createImage2(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, true);
        ;
    }
    //@Throws(Exception.constructor)
    createImage3(imageCache, originalImage, scaleNominatorX, scaleDenominatorX, scaleNominatorY, scaleDenominatorY, cached, mutable) {
        var width = originalImage.getWidth();
        ;
        var height = originalImage.getHeight();
        ;
        var scaleX = scaleNominatorX / scaleDenominatorX;
        ;
        var scaleY = scaleNominatorY / scaleDenominatorY;
        ;
        var image;
        ;
        if (cached) {
            image = imageCache.get(this.constructor.name.toString(), Math.round((width * scaleX)), Math.round((height * scaleY)));
        }
        else {
            image = imageCache.get("createImage", Math.round((width * scaleX)), Math.round((height * scaleY)));
        }
        this.scale(originalImage, image, scaleX, scaleY, true);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    scale2(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY) {
        if (maxScaleX * originalImage.getWidth() > originalImageArray[0].getWidth() || maxScaleY * originalImage.getHeight() > originalImageArray[0].getHeight()) {
            originalImageArray[0] = this.imageCreationUtil.createImage(originalImage.getWidth(), originalImage.getHeight(), maxScaleX, maxScaleY);
        }
        this.scale(originalImage, originalImageArray[0], scaleX, scaleY, false);
    }
    scale(originalImage, newMaxSizeImage, scaleX, scaleY, clear) {
        var bufferedImage = this.imageUtil.getBufferedImage(originalImage);
        ;
        var newBufferedImage = this.imageUtil.getBufferedImage(newMaxSizeImage);
        ;
        var at = AffineTransform.getScaleInstance(scaleX, scaleY);
        ;
        var g = newBufferedImage.createGraphics();
        ;
        if (clear) {
            g.setBackground(this.imageJ2SEUtil.TRANSPARENT_COLOR);
            g.clearRect(0, 0, newBufferedImage.getWidth(), newBufferedImage.getHeight());
        }
        g.drawRenderedImage(bufferedImage, at);
        g.dispose();
    }
}
ImageScaleUtil.instance = new ImageScaleUtil();
