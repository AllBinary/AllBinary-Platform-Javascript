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
//not GWT import const Graphics2D
import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
//not GWT import const ImageCache
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageUtil } from './ImageUtil.js';
//sameFolderImports - not GWT import - same folder const ImageUtil
import { ImageJ2SEUtil } from './ImageJ2SEUtil.js';
//sameFolderImports - not GWT import - same folder const ImageJ2SEUtil
import { ImageCreationUtil } from './ImageCreationUtil.js';
//sameFolderImports - not GWT import - same folder const ImageCreationUtil
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
        let width = originalImage.getWidth();
        ;
        let height = originalImage.getHeight();
        ;
        let scaleX = scaleNominatorX / scaleDenominatorX;
        ;
        let scaleY = scaleNominatorY / scaleDenominatorY;
        ;
        let image;
        ;
        if (cached) {
            image = imageCache.get(this.constructor.name.toString(), globalThis.Math.trunc((width * scaleX)), globalThis.Math.trunc((height * scaleY)));
        }
        else {
            image = imageCache.get("createImage", globalThis.Math.trunc((width * scaleX)), globalThis.Math.trunc((height * scaleY)));
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
        let bufferedImage = this.imageUtil.getBufferedImage(originalImage);
        ;
        let newBufferedImage = this.imageUtil.getBufferedImage(newMaxSizeImage);
        ;
        let at = AffineTransform.getScaleInstance(scaleX, scaleY);
        ;
        let g = newBufferedImage.createGraphics();
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
