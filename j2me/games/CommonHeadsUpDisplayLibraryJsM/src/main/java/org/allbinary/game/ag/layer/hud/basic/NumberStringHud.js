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
import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { BasicHud } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicHud = globalThis.org.allbinary.game.graphics.hud.BasicHud;
import { BasicHudFactory } from '../../../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { MyFontProcessor } from '../../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;
//not plain js import { PrimitiveLongSingleton } 
const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NumberStringHud extends BasicHud {
    constructor(prependString, max, location, direction, bufferZone, basicColor) {
        super(location, direction, bufferZone, basicColor);
        this.offset = 0;
        this.valueTotalDigits = 0;
        //For kotlin this is before the body of the constructor.
        this.prependString = prependString;
        this.PREPEND_STRING = prependString.split('');
        this.valueString = PrimitiveLongSingleton.getInstance().NUMBER_CHAR_ARRAYS[0];
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(max + 1);
        this.max = max;
        this.value = 0;
        if (direction == 0) {
            throw new RuntimeException(BasicHudFactory.getInstance().DIRECTION_EXCEPTION);
        }
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.offset = font.stringWidth(this.prependString) + MyFontProcessor.defaultCharWidth(font);
        super.updateMeasurement(graphics);
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    add(value) {
        this.set(this.value + value);
    }
    set(value) {
        this.value = value;
        if (this.value > this.max) {
            this.value = 0;
        }
        this.valueString = this.primitiveLongUtil.getCharArray(this.value);
        this.valueTotalDigits = this.primitiveLongUtil.getCurrentTotalDigits();
    }
    reduce(value) {
        this.set(this.value - value);
    }
    paint(graphics) {
        super.paintDX(graphics, this.PREPEND_STRING, 0, this.PREPEND_STRING.length, this.valueString, 0, this.valueTotalDigits, this.offset);
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        var charArray = this.PREPEND_STRING;
        ;
        var len = this.PREPEND_STRING.length;
        ;
        var charArray2 = this.valueString;
        ;
        var len2 = this.valueTotalDigits;
        ;
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        graphics.drawChars(charArray, 0, len, x, y, 0);
        graphics.drawChars(charArray2, 0, len2, x - this.offset, y, 0);
    }
    paintThreed(graphics) {
    }
}
