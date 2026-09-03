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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
export class BasicColorSetUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorSetUtil.instance;
    }
    constructor() {
        super();
    }
    setBasicColorP(graphics, basicColor) {
        graphics.setColor(basicColor.intValue());
    }
    setBasicColorP3(graphics, basicColor, value) {
        graphics.setColor(value);
    }
}
BasicColorSetUtil.instance = new BasicColorSetUtil();
