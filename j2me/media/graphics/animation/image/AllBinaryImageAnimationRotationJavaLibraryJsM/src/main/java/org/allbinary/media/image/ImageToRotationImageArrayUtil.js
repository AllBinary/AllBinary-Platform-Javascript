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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { ImageRotationUtil } from './ImageRotationUtil.js';
const ImageRotationUtil = globalThis.org.allbinary.media.image.ImageRotationUtil;
export class ImageToRotationImageArrayUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageToRotationImageArrayUtil.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    generate(image, angleIncrement, totalAngle) {
        var imageRotationUtil = ImageRotationUtil.getInstance();
        ;
        var totalFrames = totalAngle / angleIncrement;
        ;
        var imageArray = new Array(totalFrames);
        ;
        imageArray[0] = image;
        for (var index = 1; index < totalFrames; index++) {
            imageArray[index] = imageRotationUtil.createRotatedImage(image, index * angleIncrement);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return imageArray;
    }
}
ImageToRotationImageArrayUtil.instance = new ImageToRotationImageArrayUtil();
