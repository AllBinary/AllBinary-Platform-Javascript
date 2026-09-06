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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageScaleUtil } from './ImageScaleUtil.js';
//not GWT import - same folder const ImageScaleUtil = globalThis.org.allbinary.media.image.ImageScaleUtil;
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
        for (var index = 0; index < images.length; index++) {
            var image = images[index];
            ;
            images[index] = ImageScaleUtil.getInstance().createImage2(GameFeatureImageCacheFactory.getInstance(), image, width / 2, image.getWidth(), height, image.getHeight(), false);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return images;
    }
    //@Throws(Exception.constructor)
    scale(image, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageScaleUtil.getInstance().createImage2(GameFeatureImageCacheFactory.getInstance(), image, width, image.getWidth(), height, image.getHeight(), false);
        ;
    }
}
ImageJ2MEScaleUtil.instance = new ImageJ2MEScaleUtil();
