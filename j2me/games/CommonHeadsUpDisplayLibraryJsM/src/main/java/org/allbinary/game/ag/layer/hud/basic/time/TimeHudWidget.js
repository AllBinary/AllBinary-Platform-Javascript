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
//not plain js import { Font } from '../../../../../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { BasicHud } from '../../../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { MyFontProcessor } from '../../../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;
//not plain js import { PrimitiveLongSingleton } from '../../../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;
//not GWT import const Timer = globalThis.org.allbinary.game.ag.layer.hud.basic.time.Timer;
export class TimeHudWidget extends BasicHud {
    //@Throws(Exception.constructor)
    static getInstance(location, direction, basicColor, timer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TimeHudWidget(location, direction, 2, basicColor, timer);
    }
    constructor(location, direction, bufferZone, basicColor, timer) {
        super(location, direction, bufferZone, basicColor);
        this.TIME_STRING = "Time ";
        this.TIME_CHAR_ARRAY = ['T', 'i', 'm', 'e', ' '];
        this.offset = 0;
        this.string = PrimitiveLongSingleton.getInstance().ZERO;
        this.totalDigits = 1;
        //For kotlin this is before the body of the constructor.
        this.timer = timer;
        this.set();
        this.updateMaxHeight = 14;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.updateMaxWidth = font.getSize() * 5;
        this.offset = font.stringWidth(this.TIME_STRING) + MyFontProcessor.defaultStringWidth(font, 3);
        super.updateMeasurement(graphics);
    }
    update() {
        this.timer.update();
        this.set();
    }
    set() {
        this.string = this.timer.getTimeChars();
        this.totalDigits = this.timer.getCurrentTotalDigits();
    }
    getTimer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.timer;
    }
    paint(graphics) {
        super.paintDX(graphics, this.TIME_CHAR_ARRAY, 0, this.TIME_CHAR_ARRAY.length, this.string, 0, this.totalDigits, this.offset);
    }
}
