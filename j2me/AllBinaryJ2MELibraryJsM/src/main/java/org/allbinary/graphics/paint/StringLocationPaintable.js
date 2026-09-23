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
//not GWT import const Graphics
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LocationPaintable } from './LocationPaintable.js';
//not GWT import - same folder const LocationPaintable
export class StringLocationPaintable extends LocationPaintable {
    constructor(value) {
        super();
        this.value = value;
    }
    paintXY(graphics, x, y) {
        graphics.drawString(this.value, x, y, 0);
    }
}
