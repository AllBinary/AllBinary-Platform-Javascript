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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//not plain js import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ModifierBaseProcessor extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ModifierBaseProcessor.instance;
    }
    updateColor(imageModifierUtil, originalImage, imageToShow, index, basicColor) {
    }
    updateAlpha(imageModifierUtil, originalImage, imageToShow, index, alpha) {
    }
}
ModifierBaseProcessor.instance = new ModifierBaseProcessor();
