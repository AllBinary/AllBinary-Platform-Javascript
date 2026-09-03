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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { CharArrayFactory } from '../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
//not GWT import const CharArrayFactory = globalThis.org.allbinary.logic.java.character.CharArrayFactory;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class KeyValueDrawCharArray extends Object {
    constructor(label, x) {
        super();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.valueX = 0;
        this.value = CharArrayFactory.getInstance().getZeroCharArray();
        this.len = 0;
        this.LABEL = label;
        this.labelX = x;
    }
    updateMeasurement(graphics) {
        var labelWidth = graphics.getFont().stringWidth(this.LABEL) - this.LABEL.length;
        ;
        this.valueX = labelWidth + this.labelX;
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics, y) {
        this.myFontProcessor.process(graphics);
        graphics.drawString(this.LABEL, this.labelX, y, 0);
        graphics.drawChars(this.value, 0, this.len, this.valueX, y, 0);
    }
    update(value, len) {
        this.value = value;
        this.len = len;
    }
}
