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
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ColorFillPaintable } from './ColorFillPaintable.js';
//not GWT import - same folder const ColorFillPaintable
export class OverScanColorFillPaintable extends ColorFillPaintable {
    constructor(basicColor) {
        super(basicColor);
        //For kotlin this is before the body of the constructor.
    }
    paint(graphics) {
        graphics.setColor(this.colorP);
        graphics.fillRect(-graphics.getClipX(), -graphics.getClipY(), this.displayInfoSingleton.getLastWidth() + (graphics.getClipX() * 2), this.displayInfoSingleton.getLastHeight() + (graphics.getClipY() * 2));
    }
}
