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
import { Paint } from '../../../../android/graphics/Paint.js';
//not GWT import const Paint = globalThis.android.graphics.Paint;
import { PorterDuff } from '../../../../android/graphics/PorterDuff.js';
//not GWT import const PorterDuff = globalThis.android.graphics.PorterDuff;
import { PorterDuffColorFilter } from '../../../../android/graphics/PorterDuffColorFilter.js';
//not GWT import const PorterDuffColorFilter = globalThis.android.graphics.PorterDuffColorFilter;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageModifierUtil extends Object {
    constructor() {
        super(...arguments);
        this.paint = new Paint(Paint.ANTI_ALIAS_FLAG);
    }
    static getInstanceOrCreate() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ImageModifierUtil();
    }
    setColor(unusedOriginalImage, image, imageIndex, basicColor) {
        this.paint.setColorFilter(new PorterDuffColorFilter(basicColor.intValue(), PorterDuff.Mode.SRC_IN));
    }
    changeColor(unusedOriginalImage, image, imageIndex, basicColor) {
        this.paint.setColorFilter(new PorterDuffColorFilter(basicColor.intValue(), PorterDuff.Mode.SRC_IN));
    }
    setAlpha(originalImage, image, imageIndex, alphaInt) {
        if (alphaInt != this.paint.getAlpha()) {
            this.paint.setAlpha(alphaInt);
        }
    }
    getImageArray(originalImageArray) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return originalImageArray;
    }
    handleImage(imageArray, index, image) {
    }
    reset() {
    }
}
