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
import { Object } from '../../../../../java/lang/Object.js';
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonButtons extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonButtons.instance;
    }
    constructor() {
        super();
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var commonButtonSize = 128;
        ;
        while (commonButtonSize > 64) {
            var totalColumns = displayInfo.getLastWidth() / commonButtonSize;
            ;
            var totalRows = displayInfo.getLastHeight() / commonButtonSize;
            ;
            var max = totalColumns;
            ;
            if (totalRows > max) {
                max = totalRows;
            }
            if (max > 9) {
                break;
            }
            commonButtonSize = commonButtonSize >> 1;
        }
        this.STANDARD_BUTTON_SIZE = commonButtonSize;
        this.NORMAL_BUTTON = new Rectangle(PointFactory.getInstance().ZERO_ZERO, this.STANDARD_BUTTON_SIZE, this.STANDARD_BUTTON_SIZE);
        this.LARGE_BUTTON = new Rectangle(PointFactory.getInstance().ZERO_ZERO, this.STANDARD_BUTTON_SIZE << 1, this.STANDARD_BUTTON_SIZE << 1);
    }
}
CommonButtons.instance = new CommonButtons();
