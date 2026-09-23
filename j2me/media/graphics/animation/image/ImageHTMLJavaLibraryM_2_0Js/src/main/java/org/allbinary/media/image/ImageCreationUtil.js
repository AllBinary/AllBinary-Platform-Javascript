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
//not GWT import const Image
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageCreationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageCreationUtil.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    createImageWH(width, height) {
        var image = GameFeatureImageCacheFactory.getInstance().get(this.constructor.name.toString(), width, height);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    createImage(width, height, maxScaleX, maxScaleY) {
        var image = GameFeatureImageCacheFactory.getInstance().get(this.constructor.name.toString(), Math.round((width * maxScaleX)) + 1, Math.round((height * maxScaleY)) + 1);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
}
ImageCreationUtil.instance = new ImageCreationUtil();
