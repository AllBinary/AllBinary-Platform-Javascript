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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageRotationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageRotationUtil.instance;
    }
    constructor() {
        super();
        this.anchor = Anchor.TOP_LEFT;
    }
    //@Throws(Exception.constructor)
    createRotatedImage(originalImage, rotationInDegrees) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return originalImage;
    }
}
ImageRotationUtil.instance = new ImageRotationUtil();
