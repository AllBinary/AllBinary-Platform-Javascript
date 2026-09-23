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
import { ABTextItem } from './ABTextItem.js';
//not GWT import - same folder const ABTextItem
export class CommandTextItem extends ABTextItem {
    constructor(command, layout, altText, backgroundBasicColor, foregroundBasicColor) {
        super(command.getLabel(), layout, altText, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.command = command;
    }
    isFocusable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getCommand() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.command;
    }
}
