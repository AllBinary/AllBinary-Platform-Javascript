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
import { Math } from '../../../../../java/lang/Math.js';
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CommonButtons } from './CommonButtons.js';
//not GWT import - same folder const CommonButtons
export class TouchButtonLocationHelper extends Object {
    constructor() {
        super();
        var buttonSize = CommonButtons.getInstance().STANDARD_BUTTON_SIZE;
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.totalColumns = Math.round(displayInfo.getLastWidth() / buttonSize);
        this.totalRows = Math.round(displayInfo.getLastHeight() / buttonSize);
        this.columnsRemainder = displayInfo.getLastWidth() % buttonSize;
        this.columnsRemainderHalf = (this.columnsRemainder >> 1);
        this.rowsRemainder = displayInfo.getLastHeight() % buttonSize;
        this.rowsRemainderHalf = (this.rowsRemainder >> 1);
    }
    getTotalColumns() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalColumns;
    }
    getTotalRows() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalRows;
    }
    getColumnsRemainder() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.columnsRemainder;
    }
    getRowsRemainder() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rowsRemainder;
    }
    getColumnsRemainderHalf() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.columnsRemainderHalf;
    }
    getRowsRemainderHalf() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rowsRemainderHalf;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("totalColumns: ");
        stringBuffer.appendint(this.totalColumns);
        stringBuffer.append(" totalRows: ");
        stringBuffer.appendint(this.totalRows);
        stringBuffer.append(" columnsRemainder: ");
        stringBuffer.appendint(this.columnsRemainder);
        stringBuffer.append(" rowsRemainder: ");
        stringBuffer.appendint(this.rowsRemainder);
        stringBuffer.append(" columnsRemainderHalf: ");
        stringBuffer.appendint(this.columnsRemainderHalf);
        stringBuffer.append(" rowsRemainderHalf: ");
        stringBuffer.appendint(this.rowsRemainderHalf);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
