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
import { AlphaBaseProcessor } from './AlphaBaseProcessor.js';
//not GWT import const AlphaBaseProcessor = globalThis.org.allbinary.animation.image.AlphaBaseProcessor;
export class AlphaProcessor extends AlphaBaseProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AlphaProcessor.instanceC;
    }
    setAlpha(imageModifierUtil, originalImage, imageToShow, alpha) {
        imageModifierUtil.setAlpha3(imageToShow, alpha);
    }
}
AlphaProcessor.instanceC = new AlphaProcessor();
