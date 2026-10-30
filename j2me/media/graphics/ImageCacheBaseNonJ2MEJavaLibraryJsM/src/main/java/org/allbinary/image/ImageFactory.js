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
    createImageFromInputStream(...args) {
        if (args.length === 2)
            return this.createImageFromInputStream$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.createImageFromInputStream$overload2(args[0]);
        throw new TypeError('No matching overload: createImageFromInputStream');
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream$overload1(key, inputStream) {
        let image = Image.createImageFromInputStream(inputStream);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream$overload2(inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImageFromInputStream(inputStream);
        ;
    }
}
ImageFactory.instance = new ImageFactory();
