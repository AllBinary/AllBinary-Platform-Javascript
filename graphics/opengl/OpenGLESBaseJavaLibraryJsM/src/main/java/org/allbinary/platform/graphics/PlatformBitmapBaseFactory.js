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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlatformBitmapBase } from './PlatformBitmapBase.js';
//not GWT import - same folder const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;
export class PlatformBitmapBaseFactory extends Object {
    createBitmap(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformBitmapBase.NULL_PLATFORM_BITMAP_BASE;
    }
}
PlatformBitmapBaseFactory.NULL_PLATFORM_BITMAP_BASE_FACTORY = new PlatformBitmapBaseFactory();
