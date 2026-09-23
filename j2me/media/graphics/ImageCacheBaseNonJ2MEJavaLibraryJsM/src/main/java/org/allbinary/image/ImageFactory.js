/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not GWT import const InputStream
import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
//Current folder imports from return types, extended types, and scope (deduplicated)
//ImageCacheBaseAndroidJavaLibrary
export class ImageFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageFactory.instance;
    }
    //@Throws(Exception.constructor)
    createImageUrl(url) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImage(url);
        ;
    }
    //@Throws(Exception.constructor)
    createImage(caller, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImageWH(width, height);
        ;
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream(key = {}, inputStream) {
        var image = Image.createImageFromInputStream(inputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
}
ImageFactory.instance = new ImageFactory();
