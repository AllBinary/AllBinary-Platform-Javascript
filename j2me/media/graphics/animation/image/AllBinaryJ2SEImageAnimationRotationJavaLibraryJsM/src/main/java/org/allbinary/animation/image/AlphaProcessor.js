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
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { ImageModifierUtil } from '../../../../org/allbinary/media/image/ImageModifierUtil.js';
const ImageModifierUtil = globalThis.org.allbinary.media.image.ImageModifierUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ModifierBaseProcessor } from './ModifierBaseProcessor.js';
//not GWT import const ModifierBaseProcessor = globalThis.org.allbinary.animation.image.ModifierBaseProcessor;
export class AlphaProcessor extends ModifierBaseProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AlphaProcessor.instanceC;
    }
    updateAlpha(imageModifierUtil, originalImage, imageToShow, index, alpha) {
        imageModifierUtil.setAlpha(originalImage, imageToShow, index, alpha);
    }
}
AlphaProcessor.instanceC = new AlphaProcessor();
