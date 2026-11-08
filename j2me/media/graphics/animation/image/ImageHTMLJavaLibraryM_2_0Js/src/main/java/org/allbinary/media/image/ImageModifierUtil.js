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
export class ImageModifierUtil extends Object {
    constructor() {
        super(...arguments);
        //inner= member=true isStatic=
        this.ImageCopyCallback = (() => {
            const outer$ImageModifierUtil = this;
            return class extends Object {
                constructor(imageModifierUtil, imageArray, index, image, image3) {
                    super();
                    this.imageModifierUtil = imageModifierUtil;
                    this.imageArray = imageArray;
                    this.index = index;
                    this.image = image;
                    this.image3 = image3;
                }
                onSuccess(resource) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    let resourceCallbackStrings = this.imageModifierUtil.resourceCallbackStrings;
                    ;
                    logUtil.putF(resourceCallbackStrings.DONE + this.image.getName(), this, resourceCallbackStrings.HANDLE_IMAGE);
                    this.imageModifierUtil.copy(this.imageArray, this.index, this.image, this.image3);
                }
                onFailure(e) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    let resourceCallbackStrings = this.imageModifierUtil.resourceCallbackStrings;
                    ;
                    logUtil.put(new StringMaker().append(this.imageModifierUtil.commonStrings.EXCEPTION_LABEL).append(resourceCallbackStrings.ERROR).append(this.image.getName()).toString(), this, resourceCallbackStrings.HANDLE_IMAGE, e);
                }
            };
        })();
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
        let alphaF = alpha;
        ;
        let alphaFloat = alphaF / 255;
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
        let htmlImage = image;
        ;
        let canvasImage = htmlImage.getImage();
        ;
        let originalPlaynImage = originalImage.getImage();
        ;
        let canvas = this.playnUtil.getCanvas(canvasImage);
        ;
        canvas.clear();
        canvas.setAlpha(alpha);
        canvas.draw(originalPlaynImage, 0, 0);
    }
    setAlpha3(image, alpha) {
        let alphaF = alpha;
        ;
        let alphaFloat = alphaF / 255;
        ;
        let htmlImage = image;
        ;
        let canvasImage = htmlImage.getImage();
        ;
        let canvas = this.playnUtil.getCanvas(canvasImage);
        ;
        canvas.setAlpha(alphaFloat);
    }
    getImageArray(originalImageArray) {
        let size = originalImageArray.length;
        ;
        this.alphaArray = new Array(size).fill(false);
        let imageArray = new Array(size);
        ;
        for (let index = 0; index < size; index++) {
            imageArray[index] = originalImageArray[index];
            this.handleImage(imageArray, index, originalImageArray[index]);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return imageArray;
    }
    handleImage(imageArray, index, image) {
        let image3 = image.getImage();
        ;
        if (image3 !=
            null) {
            if (image3.isReady() || image3.width() + image3.height() <= 0 || image.getName() == this.resourceCallbackStrings.FROM_DATA) {
                this.copy(imageArray, index, image, image3);
            }
            else {
                let callback = new this.ImageCopyCallback(this, imageArray, index, image, image3);
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
            let image2 = Image.createImageWH(globalThis.Math.trunc(image3.width()), globalThis.Math.trunc(image3.height()));
            ;
            let graphics = image2.getGraphics();
            ;
            graphics.drawImage(image, 0, 0, Anchor.TOP_LEFT);
            imageArray[index] = image2;
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.putF(this.commonStrings.EXCEPTION_LABEL + this.resourceCallbackStrings.DONE, this, this.resourceCallbackStrings.HANDLE_IMAGE);
            }
        }
    }
    reset() {
        let size = this.alphaArray.length;
        ;
        for (let index = 0; index < size; index++) {
            this.alphaArray[index] = true;
        }
    }
}
