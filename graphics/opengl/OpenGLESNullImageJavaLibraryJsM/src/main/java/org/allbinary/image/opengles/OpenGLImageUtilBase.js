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
import { Object } from '../../../../java/lang/Object.js';
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLImageUtilBase extends Object {
    paint(...args) {
        if (args.length === 3 && typeof args[2] === 'number')
            return this.paint$overload1(args[0], args[1], args[2]);
        if (args.length === 4 && typeof args[2] === 'number')
            return this.paint$overload2(args[0], args[1], args[2], args[3]);
        throw new TypeError('No matching overload: paint');
    }
    paint$overload1(alphaBitmap, originalBitmap, index) {
        throw new RuntimeException();
    }
    paint$overload2(colorBitmap, originalBitmap, alpha, basicColor) {
        throw new RuntimeException();
    }
    //@Throws(IOException.constructor)
    createImage(name) {
        throw new RuntimeException();
    }
    //@Throws(IOException.constructor)
    createImageFromInputStream(inputStream) {
        throw new RuntimeException();
    }
}
