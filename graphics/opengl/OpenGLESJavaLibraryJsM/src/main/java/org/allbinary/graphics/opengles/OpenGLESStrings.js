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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const Graphics
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLESStrings extends Object {
    //@Throws(Exception.constructor)
    set(gl) {
        throw new RuntimeException();
    }
    initFont(gl, width, height) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    update(gl, width, height) {
        throw new RuntimeException();
    }
    drawChar(gl, graphics, character, x, y, anchor) {
        throw new RuntimeException();
    }
    drawChars(gl, graphics, data, offset, length, x, y, anchor) {
        throw new RuntimeException();
    }
    drawString(gl, graphics, string, x, y, anchor) {
        throw new RuntimeException();
    }
    drawSubstring(gl, graphics, string, offset, len, x, y, anchor) {
        throw new RuntimeException();
    }
    charWidth(ch) {
        throw new RuntimeException();
    }
    charsWidth(ch, offset, length) {
        throw new RuntimeException();
    }
    stringWidth(...args) {
        if (args.length === 1 && typeof args[0] === 'string')
            return this.stringWidth$overload1(args[0]);
        if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.stringWidth$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: stringWidth');
    }
    stringWidth$overload1(string) {
        throw new RuntimeException();
    }
    stringWidth$overload2(string, offset, len) {
        throw new RuntimeException();
    }
}
