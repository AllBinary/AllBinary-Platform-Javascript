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
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullImage } from './NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
//not plain js import { Image } from './Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Graphics } from './Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//PlatformNullImageJavaLibrary
export class PlatformImage extends Object {
    getImage(graphicsSurface2 = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullImage.NULL_IMAGE;
    }
    getSurfaceWidth(graphicsSurface2 = {}, width) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return width;
    }
    getSurfaceHeight(graphicsSurface2 = {}, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return height;
    }
    getWidth(image, width) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return width;
    }
    getHeight(image, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return height;
    }
    getGraphics(graphicsSurface = {}, width, height, image) {
        throw new RuntimeException();
    }
    drawImage(image, x, y, anchor, g2, g = {}) {
    }
    drawRegion(image, x_src, y_src, width, height, transform, x_dst, y_dst, anchor, g) {
    }
    getRGB(argb, offset, scanlength, x, y, width, height, image) {
    }
    setRGB(argb, offset, scanlength, x, y, width, height, image) {
    }
    getData(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_INT_ARRAY;
    }
}
