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
//not GWT import const Canvas
import { Matrix } from '../../../../android/graphics/Matrix.js';
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const ImageCache
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const AndroidImageInterface
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
        let scaleX = scaleNominatorX / scaleDenominatorX;
        ;
        let scaleY = scaleNominatorY / scaleDenominatorY;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createImage(imageCache, originalImage, scaleX, scaleY, cached);
        ;
    }
    //@Throws(Exception.constructor)
    createImage(imageCache, originalImage, scaleX, scaleY, cached) {
        let originalAndroidImage = originalImage;
        ;
        let originalBitmap = originalAndroidImage.getBitmap();
        ;
        let width = globalThis.Math.trunc((originalBitmap.getWidth() * scaleX));
        ;
        let height = globalThis.Math.trunc((originalBitmap.getHeight() * scaleY));
        ;
        let index = this.imageBasicArrayList.indexOf(originalImage);
        ;
        let alreadyAvailable = false;
        ;
        if (index >= 0) {
            let scaleX2Float = this.scaleXBasicArrayList.get(index);
            ;
            let scaleX2 = scaleX2Float;
            ;
            let scaleY2Float = this.scaleYBasicArrayList.get(index);
            ;
            let scaleY2 = scaleY2Float;
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
            let scaledImage = this.getScaledImage(imageCache, originalImage, scaleX, scaleY, width, height, cached);
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
        let image = NullImage.NULL_IMAGE;
        ;
        if (cached) {
            image = imageCache.get(this.constructor.name.toString(), width, height);
        }
        else {
            image = imageCache.get(this.commonStrings.CREATE_IMAGE, width, height);
        }
        if (image.isMutable()) {
            let matrix = new Matrix();
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
        let canvas = image.getCanvas();
        ;
        canvas.concat(matrix);
    }
}
ImageScaleUtil.instance = new ImageScaleUtil();
