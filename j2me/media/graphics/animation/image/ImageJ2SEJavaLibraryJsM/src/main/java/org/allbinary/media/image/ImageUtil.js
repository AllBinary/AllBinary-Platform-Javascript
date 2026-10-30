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
//not GWT import const GraphicsDevice
import { GraphicsEnvironment } from '../../../../java/awt/GraphicsEnvironment.js';
//not GWT import const GraphicsEnvironment
import { Transparency } from '../../../../java/awt/Transparency.js';
//not GWT import const Transparency
import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
//not GWT import const AffineTransform
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
//not GWT import const Image
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const J2SEMutableImage
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageUtil.instance;
    }
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.IIOIMAGE_POOL_NAME = "IIOIMAGE_POOL_NAME";
        this.CREATE_BUFFERED_IMAGE = "createBufferedImage";
    }
    getDefaultConfiguration() {
        let ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        ;
        let gd = ge.getDefaultScreenDevice();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return gd.getDefaultConfiguration();
        ;
    }
    create(width, height) {
        let graphicsConfiguration = this.getDefaultConfiguration();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsConfiguration.createCompatibleImage(width, height, Transparency.TRANSLUCENT);
        ;
    }
    //@Throws(Exception.constructor)
    createBufferedImageForResize(bufferedImageArray, percent, scale) {
        let size = bufferedImageArray.length;
        ;
        let scaledBufferedImageArray = new Array(size);
        ;
        let bufferedImage;
        ;
        for (let index = 0; index < size; index++) {
            bufferedImage = bufferedImageArray[index];
            let newWidth = globalThis.Math.trunc((bufferedImage.getWidth() * percent / 100));
            ;
            let newHeight = globalThis.Math.trunc((bufferedImage.getHeight() * percent / 100));
            ;
            scaledBufferedImageArray[index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledBufferedImageArray;
    }
    //@Throws(Exception.constructor)
    createBufferedImage2(bufferedImageArray, percent, scale) {
        let size = bufferedImageArray.length;
        ;
        let scaledBufferedImageArray = new Array(size);
        ;
        let bufferedImage;
        ;
        for (let index = 0; index < size; index++) {
            bufferedImage = bufferedImageArray[index];
            let newWidth = globalThis.Math.trunc((bufferedImage.getWidth() * percent));
            ;
            let newHeight = globalThis.Math.trunc((bufferedImage.getHeight() * percent));
            ;
            scaledBufferedImageArray[index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledBufferedImageArray;
    }
    //@Throws(Exception.constructor)
    createBufferedImage3(bufferedImageArray, width, height, scale) {
        let size = bufferedImageArray.length;
        ;
        let scaledBufferedImageArray = new Array(size);
        ;
        for (let index = 0; index < size; index++) {
            scaledBufferedImageArray[index] = this.createBufferedImage(bufferedImageArray[index], width, height, scale);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledBufferedImageArray;
    }
    //@Throws(Exception.constructor)
    createBufferedImageForSave(bufferedImage, newWidth, newHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createBufferedImage(bufferedImage, newWidth, newHeight, true);
        ;
    }
    //@Throws(Exception.constructor)
    createBufferedImage(bufferedImage, newWidth, newHeight, scale) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createBufferedImageAllowTranslate(bufferedImage, newWidth, newHeight, scale, false);
        ;
    }
    //@Throws(Exception.constructor)
    createBufferedImageAllowTranslate(bufferedImage, newWidth, newHeight, scale, allowTranslate) {
        let width = bufferedImage.getWidth();
        ;
        let height = bufferedImage.getHeight();
        ;
        let d_newWidth = newWidth;
        ;
        let d_newHeight = newHeight;
        ;
        let widthRatio = d_newWidth / width;
        ;
        let heightRatio = d_newHeight / height;
        ;
        let ratioX = 1.0;
        ;
        let ratioY = 1.0;
        ;
        if (scale) {
            ratioX = widthRatio;
            ratioY = heightRatio;
        }
        let affineTransform = AffineTransform.getScaleInstance(ratioX, ratioY);
        ;
        if (!scale && allowTranslate) {
            let dx = (newWidth - width) / 2;
            ;
            let dy = (newHeight - height) / 2;
            ;
            affineTransform.translate(dx, dy);
        }
        let newBufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);
        ;
        let graphics = newBufferedImage.createGraphics();
        ;
        graphics.drawRenderedImage(bufferedImage, affineTransform);
        //if statement needs to be on the same line and ternary does not work the same way.
        return newBufferedImage;
    }
    //@Throws(Exception.constructor)
    createBufferedImageWithLargerCanvas(bufferedImage, newWidth, newHeight) {
        let width = bufferedImage.getWidth();
        ;
        let height = bufferedImage.getHeight();
        ;
        let d_newWidth = newWidth;
        ;
        let d_newHeight = newHeight;
        ;
        let widthRatio = d_newWidth / width;
        ;
        let heightRatio = d_newHeight / height;
        ;
        let dx2 = globalThis.Math.trunc((newWidth - width));
        ;
        let dy2 = globalThis.Math.trunc((newHeight - height));
        ;
        let dx = globalThis.Math.trunc(globalThis.Math.trunc(dx2) / 2);
        ;
        let dy = globalThis.Math.trunc(globalThis.Math.trunc(dy2) / 2);
        ;
        let dx4 = globalThis.Math.trunc(globalThis.Math.trunc(dx2) / 4);
        ;
        let dy4 = globalThis.Math.trunc(globalThis.Math.trunc(dy2) / 4);
        ;
        let newBufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);
        ;
        let graphics = newBufferedImage.createGraphics();
        ;
        graphics.drawImage(bufferedImage, dx4, dy4, null);
        //if statement needs to be on the same line and ternary does not work the same way.
        return newBufferedImage;
    }
    convertToBufferedImage(toolkitImage) {
        if (toolkitImage ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return null;
        }
        let bufferedImage = new BufferedImage(toolkitImage.getWidth(null), toolkitImage.getHeight(null), BufferedImage.TYPE_INT_ARGB);
        ;
        let g2d = bufferedImage.createGraphics();
        ;
        g2d.drawImage(toolkitImage, 0, 0, null);
        g2d.dispose();
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImage;
    }
    getBufferedImage(image) {
        let bufferedImage;
        ;
        if (image.isMutable()) {
            let j2seImage = image;
            ;
            bufferedImage = j2seImage.getImage();
        }
        else {
            let j2seImage = image;
            ;
            bufferedImage = j2seImage.getImage();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImage;
    }
    toString(bufferedImage) {
        let commonLabels = CommonLabels.getInstance();
        ;
        let stringBuffer = new StringMaker();
        ;
        stringBuffer.append(" BufferedImage -");
        stringBuffer.append(commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(bufferedImage.getWidth());
        stringBuffer.append(commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(bufferedImage.getHeight());
        stringBuffer.append(" Type: ");
        stringBuffer.appendint(bufferedImage.getType());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
ImageUtil.instance = new ImageUtil();
