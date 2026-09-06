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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { NumberStringHud } from '../../../../../../../../org/allbinary/game/ag/layer/hud/basic/NumberStringHud.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScoreHudWidget extends NumberStringHud {
    //@Throws(Exception.constructor)
    static getInstance(maxscore, location, direction) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ScoreHudWidget(maxscore, location, direction, 2, BasicColorFactory.getInstance().GREY);
    }
    constructor(maxscore, location, direction, bufferZone, basicColor) {
        super("Pts ", maxscore, location, direction, bufferZone, basicColor);
        //For kotlin this is before the body of the constructor.
        this.updateMaxHeight = 14;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.updateMaxWidth = font.getSize() * 5;
        super.updateMeasurement(graphics);
    }
}
