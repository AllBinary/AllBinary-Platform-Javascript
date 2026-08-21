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
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameLayerUtil extends Object {
    static isOnScreen(layer) {
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var viewPosition = layer.getViewPosition();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameLayerUtil.isInside(viewPosition.getX(), viewPosition.getY(), viewPosition.getX2(), viewPosition.getY2(), 0, 0, displayInfo.getLastWidth(), displayInfo.getLastHeight());
        ;
    }
    static isInside(rectX1, rectY1, rectX2, rectY2, rect2X1, rect2Y1, rect2X2, rect2Y2) {
        if (rectX1 > rect2X1 && rectX2 < rect2X2 && rectY1 > rect2Y1 && rectY2 < rect2Y2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    constructor() {
        super();
    }
}
