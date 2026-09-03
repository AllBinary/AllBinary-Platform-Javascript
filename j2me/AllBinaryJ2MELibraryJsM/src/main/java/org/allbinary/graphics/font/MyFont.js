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
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MyFont extends Object {
    static getInstance() {
        if (MyFont.instance == NullUtil.getInstance().NULL_OBJECT) {
            MyFont.instance = new MyFont();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return MyFont.instance;
    }
    constructor() {
        super();
        this.defaultFont = Font.getDefaultFont();
        this.DEFAULT_CHAR_HEIGHT = this.defaultFont.getHeight();
        this.DEFAULT_CHAR_WIDTH = this.defaultFont.charWidth('C');
    }
    update() {
        this.DEFAULT_CHAR_HEIGHT = this.defaultFont.getHeight();
        this.DEFAULT_CHAR_WIDTH = this.defaultFont.charWidth('C');
    }
    defaultCharWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.DEFAULT_CHAR_WIDTH;
    }
    defaultStringWidth(size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.DEFAULT_CHAR_WIDTH * size;
    }
    stringWidth(string) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.DEFAULT_CHAR_WIDTH * string.length;
    }
    stringWidth2(string) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultFont.stringWidth(string);
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultFont.getSize();
        ;
    }
    charWidth(aChar) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultFont.charWidth(aChar);
        ;
    }
    charsWidth(charArray, offset, length) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultFont.charsWidth(charArray, offset, length);
        ;
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(this.constructor.name.toString()).appendint(this.DEFAULT_CHAR_WIDTH).append(commonSeps.FORWARD_SLASH).appendint(this.DEFAULT_CHAR_HEIGHT).toString();
        ;
    }
}
MyFont.instance = NullUtil.getInstance().NULL_OBJECT;
