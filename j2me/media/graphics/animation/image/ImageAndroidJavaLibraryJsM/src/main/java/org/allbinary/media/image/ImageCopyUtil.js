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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { ImageCreationUtil } from './ImageCreationUtil.js';
const ImageCreationUtil = globalThis.org.allbinary.media.image.ImageCreationUtil;
export class ImageCopyUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageCopyUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.imageCreationUtil = ImageCreationUtil.getInstance();
        this.anchor = Anchor.TOP_LEFT;
    }
    //@Throws(Exception.constructor)
    createImageForRotation(originalImage) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage(originalImage);
        ;
    }
    //@Throws(Exception.constructor)
    createImage(originalImage) {
        var image = this.imageCreationUtil.createImageWH(originalImage.getWidth(), originalImage.getHeight());
        ;
        if (image.isMutable()) {
            image.getGraphics().drawImage(originalImage, 0, 0, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
    //@Throws(Exception.constructor)
    createImageScale(originalImage, canvasScale, resize) {
        var newWidth = Math.round((originalImage.getWidth() * canvasScale));
        ;
        var newHeight = Math.round((originalImage.getHeight() * canvasScale));
        ;
        if (resize) {
            if (newWidth < newHeight) {
                newWidth = newHeight;
            }
            if (newHeight < newWidth) {
                newHeight = newWidth;
            }
        }
        var image = this.imageCreationUtil.createImageWH(newWidth, newHeight);
        ;
        if (image.isMutable()) {
            var halfWidthDelta = (newWidth - originalImage.getWidth()) / 2;
            ;
            var halfHeightDelta = (newHeight - originalImage.getHeight()) / 2;
            ;
            var graphics = image.getGraphics();
            ;
            graphics.drawImage(originalImage, halfWidthDelta, halfHeightDelta, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
}
ImageCopyUtil.instance = new ImageCopyUtil();
