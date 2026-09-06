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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ColorFillBasePaintable } from './ColorFillBasePaintable.js';
//not GWT import - same folder const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;
export class ColorFillPaintable extends ColorFillBasePaintable {
    constructor(basicColor) {
        super(basicColor);
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    paint(graphics) {
        graphics.setColor(this.colorP);
        graphics.fillRect(0, 0, this.displayInfoSingleton.getLastWidth(), this.displayInfoSingleton.getLastHeight());
    }
}
