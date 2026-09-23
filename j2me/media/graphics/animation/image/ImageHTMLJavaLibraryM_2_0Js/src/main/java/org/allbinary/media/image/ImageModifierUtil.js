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
//not GWT import const Graphics
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const PlaynImage
import { ResourceCallbackStrings } from '../../../../org/microemu/device/ResourceCallbackStrings.js';
//not GWT import const ResourceCallbackStrings
//not plain js import { Callback } 
const Callback = globalThis.playn.core.Callback;
//not plain js import { Canvas } 
const Canvas = globalThis.playn.core.Canvas;
//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
//not plain js import { ImageImpl } 
const ImageImpl = globalThis.playn.core.ImageImpl;
//not plain js import { HTMLPlaynUtil } 
const HTMLPlaynUtil = globalThis.playn.html.HTMLPlaynUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageModifierUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.resourceCallbackStrings = ResourceCallbackStrings.getInstance();
        this.playnUtil = HTMLPlaynUtil.getInstance();
    }
    static getInstanceOrCreate() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ImageModifierUtil();
    }
    setColor(unusedOriginalImage, image, imageIndex, basicColor) {
    }
    changeColor(unusedOriginalImage, image, imageIndex, basicColor) {
    }
    setAlpha(originalImage, image, imageIndex, alpha) {
        var alphaF = alpha;
        ;
        var alphaFloat = alphaF / 255;
        ;
        this.setAlphaF(originalImage, image, imageIndex, alphaFloat);
    }
    setAlphaF(originalImage, image, imageIndex, alpha) {
        if (this.alphaArray[imageIndex]) {
            this.alphaArray[imageIndex] = false;
            this.setAlpha2(originalImage, image, imageIndex, alpha);
        }
    }
    setAlpha2(originalImage, image, imageIndex, alpha) {
        var htmlImage = image;
        ;
        var canvasImage = htmlImage.getImage();
        ;
        var originalPlaynImage = originalImage.getImage();
        ;
        var canvas = this.playnUtil.getCanvas(canvasImage);
        ;
        canvas.clear();
        canvas.setAlpha(alpha);
        canvas.draw(originalPlaynImage, 0, 0);
    }
    setAlpha3(image, alpha) {
        var alphaF = alpha;
        ;
        var alphaFloat = alphaF / 255;
        ;
        var htmlImage = image;
        ;
        var canvasImage = htmlImage.getImage();
        ;
        var canvas = this.playnUtil.getCanvas(canvasImage);
        ;
        canvas.setAlpha(alphaFloat);
    }
    getImageArray(originalImageArray) {
        var size = originalImageArray.length;
        ;
        this.alphaArray = new Array(size);
        var imageArray = new Array(size);
        ;
        for (var index = 0; index < size; index++) {
            imageArray[index] = originalImageArray[index];
            this.handleImage(imageArray, index, originalImageArray[index]);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return imageArray;
    }
    handleImage(imageArray, index, image) {
        var image3 = image.getImage();
        ;
        if (image3 !=
            null) {
            if (image3.isReady() || image3.width() + image3.height() <= 0 || image.getName() == this.resourceCallbackStrings.FROM_DATA) {
                this.copy(imageArray, index, image, image3);
            }
            else {
                var callback = new class extends Callback {
                    onSuccess(resource = {}) {
                        var logUtil = LogUtil.getInstance();
                        ;
                        logUtil.putF(resourceCallbackStrings.DONE + image.getName(), this, resourceCallbackStrings.HANDLE_IMAGE);
                        copy(imageArray, index, image, image3);
                    }
                    onFailure(e) {
                        var logUtil = LogUtil.getInstance();
                        ;
                        logUtil.put(new StringMaker().append(commonStrings.EXCEPTION_LABEL).append(resourceCallbackStrings.ERROR).append(image.getName()).toString(), this, resourceCallbackStrings.HANDLE_IMAGE, e);
                    }
                };
                ;
                image3.addCallback(callback);
            }
        }
        else {
            this.logUtil.putF(this.resourceCallbackStrings.NULL + image.isMutable(), this, this.resourceCallbackStrings.HANDLE_IMAGE);
        }
    }
    copy(imageArray, index, image, image3) {
        try {
            var image2 = Image.createImageWH(Math.round(image3.width()), Math.round(image3.height()));
            ;
            var graphics = image2.getGraphics();
            ;
            graphics.drawImage(image, 0, 0, Anchor.TOP_LEFT);
            imageArray[index] = image2;
            //: 
        }
        catch (e) {
            this.logUtil.putF(this.commonStrings.EXCEPTION_LABEL + resourceCallbackStrings.DONE, this, resourceCallbackStrings.HANDLE_IMAGE);
        }
    }
    reset() {
        var size = this.alphaArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.alphaArray[index] = true;
        }
    }
}
