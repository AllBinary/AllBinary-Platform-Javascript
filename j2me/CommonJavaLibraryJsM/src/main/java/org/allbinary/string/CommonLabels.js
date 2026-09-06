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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonLabels extends Object {
    constructor() {
        super(...arguments);
        this.WIDTH_LABEL = " Width: ";
        this.HEIGHT_LABEL = " Height: ";
        this.END_LABEL = "End: ";
        this.TOTAL_LABEL = "Total: ";
        this.INDEX_LABEL = "index: ";
        this.START_LABEL = "Start: ";
        this.COMMAND_LABEL = "Command: ";
        this.NAME_LABEL = "Name: ";
        this.START = this.START_LABEL;
        this.ELAPSED = " Elapsed: ";
        this.CURRENT = " Current: ";
        this.ITEM_LABEL = "Item: ";
        this.RESULT_ = "Result: ";
        this.COLON_SEP = ": ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonLabels.instance;
    }
}
CommonLabels.instance = new CommonLabels();
