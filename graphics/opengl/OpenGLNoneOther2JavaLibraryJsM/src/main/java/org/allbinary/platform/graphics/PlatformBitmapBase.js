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
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlatformBitmapBase extends Object {
    constructor() {
        super(...arguments);
        this.alpha = 255;
        this.basicColor = BasicColorFactory.getInstance().NULL_COLOR;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullImage.NULL_IMAGE;
    }
}
PlatformBitmapBase.NULL_PLATFORM_BITMAP_BASE = new PlatformBitmapBase();
