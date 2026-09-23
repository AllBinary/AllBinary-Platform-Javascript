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
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ColorFillBasePaintable } from './ColorFillBasePaintable.js';
//not GWT import - same folder const ColorFillBasePaintable
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
