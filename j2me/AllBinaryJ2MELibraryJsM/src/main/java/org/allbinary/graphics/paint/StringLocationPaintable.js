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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LocationPaintable } from './LocationPaintable.js';
//not GWT import const LocationPaintable = globalThis.org.allbinary.graphics.paint.LocationPaintable;
export class StringLocationPaintable extends LocationPaintable {
    constructor(value) {
        super();
        this.value = value;
    }
    paintXY(graphics, x, y) {
        graphics.drawString(this.value, x, y, 0);
    }
}
