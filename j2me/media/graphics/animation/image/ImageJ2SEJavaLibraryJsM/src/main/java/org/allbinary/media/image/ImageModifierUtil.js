/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not GWT import const WritableRaster = globalThis.java.awt.image.WritableRaster;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageUtil } from './ImageUtil.js';
//not GWT import const ImageUtil = globalThis.org.allbinary.media.image.ImageUtil;
//not plain js import { ImageCreationUtil } from './ImageCreationUtil.js';
const ImageCreationUtil = globalThis.org.allbinary.media.image.ImageCreationUtil;
export class ImageModifierUtil extends Object {
    constructor() {
        super(...arguments);
        this.imageUtil = ImageUtil.getInstance();
        this.colorArray = new Array(1);
    }
    static getInstanceOrCreate() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageModifierUtil.instance;
    }
    setBasicColorP(basicColor) {
    }
    setColor(unusedOriginalImage, image, imageIndex, basicColor) {
        var newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        var r = basicColor.red;
        ;
        var g = basicColor.green;
        ;
        var b = basicColor.blue;
        ;
        var width = image.getWidth();
        ;
        var height = image.getHeight();
        ;
        var colorModel;
        ;
        var dataElements;
        ;
        var ax = 0;
        ;
        var rx = 0;
        ;
        var gx = 0;
        ;
        var bx = 0;
        ;
        for (var index = 0; index < width; index++) {
            for (var index2 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage.getColorModel();
                dataElements = newBufferedImage.getRaster().getDataElements(index, index2, null);
                ax = colorModel.getAlpha(dataElements);
                rx = colorModel.getRed(dataElements);
                gx = colorModel.getGreen(dataElements);
                bx = colorModel.getBlue(dataElements);
                if (rx != 0 || gx != 0 || bx != 0) {
                    newBufferedImage.setRGB(index, index2, (ax << 24) | (r << 16) | (g << 8) | (b));
                }
            }
        }
    }
    changeColor(unusedOriginalImage, image, imageIndex, basicColor) {
        var newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        var MAX = 255;
        ;
        var r = (basicColor.red) / MAX;
        ;
        var g = (basicColor.green) / MAX;
        ;
        var b = (basicColor.blue) / MAX;
        ;
        var width = image.getWidth();
        ;
        var height = image.getHeight();
        ;
        var colorModel;
        ;
        var dataElements;
        ;
        var ax = 0;
        ;
        var rx = 0;
        ;
        var gx = 0;
        ;
        var bx = 0;
        ;
        for (var index = 0; index < width; index++) {
            for (var index2 = 0; index2 < height; index2++) {
                colorModel = newBufferedImage.getColorModel();
                dataElements = newBufferedImage.getRaster().getDataElements(index, index2, null);
                ax = colorModel.getAlpha(dataElements);
                rx = colorModel.getRed(dataElements);
                gx = colorModel.getGreen(dataElements);
                bx = colorModel.getBlue(dataElements);
                rx *= r;
                gx *= g;
                bx *= b;
                newBufferedImage.setRGB(index, index2, (ax << 24) | (rx << 16) | (gx << 8) | (bx));
            }
        }
    }
    setAlpha(unusedOriginalImage, image, imageIndex, alphaInt) {
        var alpha = alphaInt;
        ;
        var newBufferedImage = this.imageUtil.getBufferedImage(image);
        ;
        var width = image.getWidth();
        ;
        var height = image.getHeight();
        ;
        var raster = newBufferedImage.getAlphaRaster();
        ;
        for (var index = 0; index < width; index++) {
            for (var index2 = 0; index2 < height; index2++) {
                raster.getPixel(index, index2, this.colorArray);
                this.colorArray[0] = alpha & this.colorArray[0];
                raster.setPixel(index, index2, this.colorArray);
            }
        }
    }
    getImageArray(originalImageArray) {
        try {
            var newImageArray = new Array(originalImageArray.length);
            ;
            var size = newImageArray.length;
            ;
            var originalImage;
            ;
            for (var index = 0; index < size; index++) {
                originalImage = originalImageArray[index];
                var image = ImageCreationUtil.getInstance().createImageWH(originalImage.getWidth(), originalImage.getHeight());
                ;
                image.getGraphics().drawImage(originalImage, 0, 0, Anchor.TOP_LEFT);
                newImageArray[index] = image;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return newImageArray;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, "getImageArray", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return originalImageArray;
        }
    }
    handleImage(imageArray, index, image) {
    }
    reset() {
    }
}
ImageModifierUtil.instance = new ImageModifierUtil();
