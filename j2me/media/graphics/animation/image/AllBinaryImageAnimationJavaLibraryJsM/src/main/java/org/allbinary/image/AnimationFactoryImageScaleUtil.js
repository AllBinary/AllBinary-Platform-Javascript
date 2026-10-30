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
//not GWT import const BaseImageAnimationFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const ScaleProperties
import { ImageJ2MEScaleUtil } from '../../../org/allbinary/media/image/ImageJ2MEScaleUtil.js';
//not GWT import const ImageJ2MEScaleUtil
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
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
        let scaledImage;
        ;
        if (scaleWidth != 0 && scaleHeight != 0) {
            let scaleX = (scaleWidth) / (width);
            ;
            let scaleY = (scaleHeight) / (height);
            ;
            if ((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0)) {
                scaledImage = image;
            }
            else {
                let scaledWidth = globalThis.Math.trunc((scaleX * width));
                ;
                let scaledHeight = globalThis.Math.trunc((scaleY * height));
                ;
                scaledImage = this.imageScaleUtil.scale(image, scaledWidth, scaledHeight);
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
        let scaleProperties = baseImageAnimationFactory.getScalePropertiesP();
        ;
        if (scaleProperties.scaleWidth != 0 && scaleProperties.scaleHeight != 0) {
            let animationFactoryInitializationVisitor = baseImageAnimationFactory.getAnimationFactoryInitializationVisitorP();
            ;
            let scaleX = (scaleProperties.scaleWidth) / (animationFactoryInitializationVisitor.width);
            ;
            let scaleY = (scaleProperties.scaleHeight) / (animationFactoryInitializationVisitor.height);
            ;
            if ((scaleX == 1.0 && scaleY == 1.0) || (scaleX == 0.0 || scaleY == 0.0)) {
            }
            else {
                animationFactoryInitializationVisitor.dx = globalThis.Math.trunc((animationFactoryInitializationVisitor.originalDx * scaleX));
                animationFactoryInitializationVisitor.dy = globalThis.Math.trunc((animationFactoryInitializationVisitor.originalDy * scaleY));
            }
        }
        else {
        }
    }
}
AnimationFactoryImageScaleUtil.instance = new AnimationFactoryImageScaleUtil();
