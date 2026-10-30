/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2023 AllBinary
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
import { Image } from '../../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageJ2MEScaleUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageJ2MEScaleUtil.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    scaleArray(images, width, height) {
        let scaledImages = new Array(images.length);
        ;
        for (let index = images.length; --index >= 0;) {
            scaledImages[index] = this.scale(images[index], width, height);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledImages;
    }
    //@Throws(Exception.constructor)
    scale(image, width, height) {
        let sourceWidth = image.getWidth();
        ;
        let sourceHeight = image.getHeight();
        ;
        let originalData = new Array(image.getWidth() * image.getHeight());
        ;
        image.getRGB(originalData, 0, image.getWidth(), 0, 0, image.getWidth(), image.getHeight());
        let scaledData = new Array(width * height);
        ;
        let heightRatioFactor = globalThis.Math.trunc((8 * sourceHeight) / height);
        ;
        let widthRatioFactor = globalThis.Math.trunc((8 * sourceWidth) / width);
        ;
        let scaledIndex = scaledData.length - 1;
        ;
        let dx = 0;
        ;
        let dy = 0;
        ;
        for (let index = height; --index >= 0;) {
            dy = (index * heightRatioFactor) >> 3;
            for (let index2 = width; --index2 >= 0;) {
                dx = (index2 * widthRatioFactor) >> 3;
                scaledData[scaledIndex--] = originalData[(sourceWidth * dy) + dx];
            }
        }
        let scaledImage = Image.createRGBImage(scaledData, width, height, true);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return scaledImage;
    }
}
ImageJ2MEScaleUtil.instance = new ImageJ2MEScaleUtil();
