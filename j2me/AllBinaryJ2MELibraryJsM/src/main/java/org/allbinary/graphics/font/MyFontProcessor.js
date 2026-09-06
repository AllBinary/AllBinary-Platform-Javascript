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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MyFontProcessor extends Object {
    static defaultCharWidth(font) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return font.charWidth('C');
        ;
    }
    static defaultStringWidth(font, size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MyFontProcessor.defaultCharWidth(font) * size;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return instance;
    }
    process(graphics) {
    }
}
MyFontProcessor.instance = new MyFontProcessor();
