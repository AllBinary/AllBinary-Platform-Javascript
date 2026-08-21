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
import { GraphicsEnvironment } from '../../../../java/awt/GraphicsEnvironment.js';
import { Transparency } from '../../../../java/awt/Transparency.js';
import { AffineTransform } from '../../../../java/awt/geom/AffineTransform.js';
import { BufferedImage } from '../../../../java/awt/image/BufferedImage.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
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
        var ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        ;
        var gd = ge.getDefaultScreenDevice();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return gd.getDefaultConfiguration();
        ;
    }
    create(width, height) {
        var graphicsConfiguration = this.getDefaultConfiguration();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsConfiguration.createCompatibleImage(width, height, Transparency.TRANSLUCENT);
        ;
    }
    //@Throws(Exception.constructor)
    createBufferedImageForResize(bufferedImageArray, percent, scale) {
        var size = bufferedImageArray.length;
        ;
        var scaledBufferedImageArray = new Array(size);
        ;
        var bufferedImage;
        ;
        for (var index = 0; index < size; index++) {
            bufferedImage = bufferedImageArray[index];
            var newWidth = Math.round((bufferedImage.getWidth() * percent / 100));
            ;
            var newHeight = Math.round((bufferedImage.getHeight() * percent / 100));
            ;
            scaledBufferedImageArray[index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledBufferedImageArray;
    }
    //@Throws(Exception.constructor)
    createBufferedImage2(bufferedImageArray, percent, scale) {
        var size = bufferedImageArray.length;
        ;
        var scaledBufferedImageArray = new Array(size);
        ;
        var bufferedImage;
        ;
        for (var index = 0; index < size; index++) {
            bufferedImage = bufferedImageArray[index];
            var newWidth = Math.round((bufferedImage.getWidth() * percent));
            ;
            var newHeight = Math.round((bufferedImage.getHeight() * percent));
            ;
            scaledBufferedImageArray[index] = this.createBufferedImage(bufferedImage, newWidth, newHeight, scale);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledBufferedImageArray;
    }
    //@Throws(Exception.constructor)
    createBufferedImage3(bufferedImageArray, width, height, scale) {
        var size = bufferedImageArray.length;
        ;
        var scaledBufferedImageArray = new Array(size);
        ;
        for (var index = 0; index < size; index++) {
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
        var width = bufferedImage.getWidth();
        ;
        var height = bufferedImage.getHeight();
        ;
        var d_newWidth = newWidth;
        ;
        var d_newHeight = newHeight;
        ;
        var widthRatio = d_newWidth / width;
        ;
        var heightRatio = d_newHeight / height;
        ;
        var ratioX = 1.0;
        ;
        var ratioY = 1.0;
        ;
        if (scale) {
            ratioX = widthRatio;
            ratioY = heightRatio;
        }
        var affineTransform = AffineTransform.getScaleInstance(ratioX, ratioY);
        ;
        if (!scale && allowTranslate) {
            var dx = (newWidth - width) / 2;
            ;
            var dy = (newHeight - height) / 2;
            ;
            affineTransform.translate(dx, dy);
        }
        var newBufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);
        ;
        var graphics = newBufferedImage.createGraphics();
        ;
        graphics.drawRenderedImage(bufferedImage, affineTransform);
        //if statement needs to be on the same line and ternary does not work the same way.
        return newBufferedImage;
    }
    //@Throws(Exception.constructor)
    createBufferedImageWithLargerCanvas(bufferedImage, newWidth, newHeight) {
        var width = bufferedImage.getWidth();
        ;
        var height = bufferedImage.getHeight();
        ;
        var d_newWidth = newWidth;
        ;
        var d_newHeight = newHeight;
        ;
        var widthRatio = d_newWidth / width;
        ;
        var heightRatio = d_newHeight / height;
        ;
        var dx2 = Math.round((newWidth - width));
        ;
        var dy2 = Math.round((newHeight - height));
        ;
        var dx = Math.round(dx2) / 2;
        ;
        var dy = Math.round(dy2) / 2;
        ;
        var dx4 = Math.round(dx2) / 4;
        ;
        var dy4 = Math.round(dy2) / 4;
        ;
        var newBufferedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_ARGB_PRE);
        ;
        var graphics = newBufferedImage.createGraphics();
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
        var bufferedImage = new BufferedImage(toolkitImage.getWidth(null), toolkitImage.getHeight(null), BufferedImage.TYPE_INT_ARGB);
        ;
        var g2d = bufferedImage.createGraphics();
        ;
        g2d.drawImage(toolkitImage, 0, 0, null);
        g2d.dispose();
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImage;
    }
    getBufferedImage(image) {
        var bufferedImage;
        ;
        if (image.isMutable()) {
            var j2seImage = image;
            ;
            bufferedImage = j2seImage.getImage();
        }
        else {
            var j2seImage = image;
            ;
            bufferedImage = j2seImage.getImage();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return bufferedImage;
    }
    toString(bufferedImage) {
        var commonLabels = CommonLabels.getInstance();
        ;
        var stringBuffer = new StringMaker();
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
