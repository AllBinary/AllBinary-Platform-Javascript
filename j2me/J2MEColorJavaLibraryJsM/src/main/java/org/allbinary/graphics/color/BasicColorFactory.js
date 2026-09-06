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
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicColor } from './BasicColor.js';
//not GWT import - same folder const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorUtil } from './BasicColorUtil.js';
//not GWT import - same folder const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;
export class BasicColorFactory extends Object {
    constructor() {
        super(...arguments);
        this.NULL_COLOR = this.createInstanceARGB(255, 255, 255, 255, "null color");
        this.TAN = this.createInstance(0xE9D8B5);
        this.SKIN_PINK = this.createInstance(0xFDCECE);
        this.RED = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0xFF0000, "red");
        this.LIGHT_RED = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0xFFA0A0, "light red");
        this.DARK_GREEN = this.createInstance(0x00FF00);
        this.GREEN = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0x00DD00, "green");
        this.LIGHT_GREEN = this.createInstance(0x007700);
        this.PURPLE = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0x400040, "purple");
        this.BLUE = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0x0000FF, "blue");
        this.LIGHT_BLUE = this.createInstance(0x00aaff);
        this.VERY_LIGHT_BLUE = this.createInstance(0x000033);
        this.PUCE = this.createInstance(0xFF00AA);
        this.AQUA = this.createInstance(0x00FFFF);
        this.YELLOW = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0xFFFF00, "yellow");
        this.PINK = this.createInstance(0xFF00FF);
        this.BLACK = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0x000000, "black");
        this.GREY = this.createInstanceAN(BasicColorUtil.getInstance().ALPHA, 0xAAAAAA, "grey");
        this.LIGHT_GREY = this.createInstance(0xC0C0C0);
        this.DARK_GREY = this.createInstance(0x404040);
        this.ORANGE = this.createInstance(0xe07718);
        this.BROWN = this.createInstance(0x956B00);
        this.WHITE = this.createInstance(0xFFFFFF);
        this.TRANSPARENT_COLOR = this.createInstanceAN(0x00000000, 0x000000, StringUtil.getInstance().EMPTY_STRING);
        this.TRANSPARENT_GREY = this.createInstanceAN(0x52000000, 0xECECEC, StringUtil.getInstance().EMPTY_STRING);
        this.TRANSPARENT_BLACK = this.createInstanceAN(0x52000000, 0x000000, StringUtil.getInstance().EMPTY_STRING);
        this.TRANSPARENT_RED = this.createInstanceAN(0x52000000, 0xFF0000, StringUtil.getInstance().EMPTY_STRING);
        this.CLEAR_COLOR = this.BLACK;
        this.BORDER_COLOR = this.WHITE;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorFactory.instance;
    }
    createInstance(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicColor(BasicColorUtil.getInstance().ALPHA, value, StringUtil.getInstance().EMPTY_STRING);
    }
    createInstanceA(alphaValue, value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicColor(alphaValue, value, StringUtil.getInstance().EMPTY_STRING);
    }
    createInstanceAN(alphaValue, value, name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicColor(alphaValue, value, name);
    }
    createInstanceARGB(alphaValue, r, g, b, name) {
        var ALPHA_MASK = Math.round(0xFF000000);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicColor(alphaValue, ((alphaValue << 24) & ALPHA_MASK) + ((r << 16) & 0x00FF0000) + ((g << 8) & 0x0000FF00) + (b & 0x000000FF), StringUtil.getInstance().EMPTY_STRING);
    }
}
BasicColorFactory.instance = new BasicColorFactory();
