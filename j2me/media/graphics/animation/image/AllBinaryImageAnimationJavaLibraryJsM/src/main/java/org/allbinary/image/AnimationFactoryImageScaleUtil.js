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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Image } from '../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
//not plain js import { ImageJ2MEScaleUtil } from '../../../org/allbinary/media/image/ImageJ2MEScaleUtil.js';
const ImageJ2MEScaleUtil = globalThis.org.allbinary.media.image.ImageJ2MEScaleUtil;
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AnimationFactoryImageScaleUtil extends Object {
    constructor() {
        super(...arguments);
        this.imageScaleUtil = ImageJ2MEScaleUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnimationFactoryImageScaleUtil.instance;
    }
    //@Throws(Exception.constructor)
    createImage(image, width, height, scaleWidth, scaleHeight) {
        var scaledImage;
        ;
        if (scaleWidth != 0 && scaleHeight != 0) {
            var scaleX = (scaleWidth) / (width);
            ;
            var scaleY = (scaleHeight) / (height);
            ;
            if ((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0)) {
                scaledImage = image;
            }
            else {
                scaledImage = this.imageScaleUtil.scale(image, Math.round((scaleX * width)), Math.round((scaleY * height)));
            }
        }
        else {
            scaledImage = image;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledImage;
    }
    //@Throws(Exception.constructor)
    processAdjust(baseImageAnimationFactory) {
        var scaleProperties = baseImageAnimationFactory.getScalePropertiesP();
        ;
        if (scaleProperties.scaleWidth != 0 && scaleProperties.scaleHeight != 0) {
            var animationFactoryInitializationVisitor = baseImageAnimationFactory.getAnimationFactoryInitializationVisitorP();
            ;
            var scaleX = (scaleProperties.scaleWidth) / (animationFactoryInitializationVisitor.width);
            ;
            var scaleY = (scaleProperties.scaleHeight) / (animationFactoryInitializationVisitor.height);
            ;
            if ((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0)) {
            }
            else {
                animationFactoryInitializationVisitor.dx = Math.round((animationFactoryInitializationVisitor.originalDx * scaleX));
                animationFactoryInitializationVisitor.dy = Math.round((animationFactoryInitializationVisitor.originalDy * scaleY));
            }
        }
        else {
        }
    }
}
AnimationFactoryImageScaleUtil.instance = new AnimationFactoryImageScaleUtil();
