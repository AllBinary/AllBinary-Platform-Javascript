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
//not GWT import - same folder const BasicColor
export class BasicColorUtil extends Object {
    constructor() {
        super(...arguments);
        this.ZERO_ARRAY = [];
        this.ALPHA = Math.round(0xFF000000);
        this.isAlpha = true;
        this.ffOpaque = true;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorUtil.instance;
    }
    getRGB(red, green, blue) {
        var value = 0;
        ;
        if (this.isAlpha) {
            if (this.ffOpaque) {
                value = this.ALPHA;
            }
        }
        value = (red << 16) | value;
        value = (green << 8) | value;
        value = blue | value;
        //if statement needs to be on the same line and ternary does not work the same way.
        return value;
    }
    getARGB(alphaValue, r, g, b) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ((alphaValue << 24) & this.ALPHA) + ((r << 16) & 0x00FF0000) + ((g << 8) & 0x0000FF00) + (b & 0x000000FF);
    }
    get(alphaValue, color) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ((alphaValue << 24) & this.ALPHA) + color;
    }
    invert(color) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (0xFFFFFF - color) | this.ALPHA;
    }
}
BasicColorUtil.instance = new BasicColorUtil();
