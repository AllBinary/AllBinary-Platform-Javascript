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
//not GWT import const Canvas = globalThis.android.graphics.Canvas;
import { Matrix } from '../../../../android/graphics/Matrix.js';
//not GWT import const Matrix = globalThis.android.graphics.Matrix;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const AndroidImageInterface = globalThis.org.microemu.android.device.AndroidImageInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageScaleUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageScaleUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.anchor = Anchor.TOP_LEFT;
        this.imageBasicArrayList = new BasicArrayListD();
        this.scaledImageBasicArrayList = new BasicArrayListD();
        this.scaleXBasicArrayList = new BasicArrayListD();
        this.scaleYBasicArrayList = new BasicArrayListD();
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
        var originalAndroidImage = originalImage;
        ;
        var originalBitmap = originalAndroidImage.getBitmap();
        ;
        var width = Math.round((originalBitmap.getWidth() * scaleX));
        ;
        var height = Math.round((originalBitmap.getHeight() * scaleY));
        ;
        var index = this.imageBasicArrayList.indexOf(originalImage);
        ;
        var alreadyAvailable = false;
        ;
        if (index >= 0) {
            var scaleX2Float = this.scaleXBasicArrayList.get(index);
            ;
            var scaleX2 = scaleX2Float;
            ;
            var scaleY2Float = this.scaleYBasicArrayList.get(index);
            ;
            var scaleY2 = scaleY2Float;
            ;
            if (scaleX2 == scaleX && scaleY2 == scaleY) {
                alreadyAvailable = true;
            }
        }
        if (alreadyAvailable) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.scaledImageBasicArrayList.get(index);
        }
        else {
            var scaledImage = this.getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached);
            ;
            this.imageBasicArrayList.add(originalImage);
            this.scaledImageBasicArrayList.add(scaledImage);
            this.scaleXBasicArrayList.add(scaleX);
            this.scaleYBasicArrayList.add(scaleY);
            //if statement needs to be on the same line and ternary does not work the same way.
            return scaledImage;
        }
    }
    //@Throws(Exception.constructor)
    getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached) {
        var image = NullImage.NULL_IMAGE;
        ;
        if (cached) {
            image = imageCache.get(this.constructor.name.toString(), width, height);
        }
        else {
            image = imageCache.get(this.commonStrings.CREATE_IMAGE, width, height);
        }
        if (image.isMutable()) {
            var matrix = new Matrix();
            ;
            this.scale(image, matrix, scaleX, scaleY);
            image.getGraphics().drawImage(originalImage, 0, 0, this.anchor);
            //if statement needs to be on the same line and ternary does not work the same way.
            return image;
        }
        else {
            throw new Exception("Not Mutable");
        }
    }
    scale(image, matrix, scaleX, scaleY) {
        matrix.setScale(scaleX, scaleY);
        var canvas = image.getCanvas();
        ;
        canvas.concat(matrix);
    }
}
ImageScaleUtil.instance = new ImageScaleUtil();
