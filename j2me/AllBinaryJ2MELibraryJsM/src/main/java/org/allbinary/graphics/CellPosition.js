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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { V } from '../../../org/allbinary/graph/V.js';
//not GWT import const V = globalThis.org.allbinary.graph.V;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CellPosition extends V {
    static toStringCellPosition(basicGeographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CellPosition.toStringColRow(basicGeographicMapCellPosition.getColumn(), basicGeographicMapCellPosition.getRow());
        ;
    }
    static toStringColRow(i_column, i_row) {
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        stringBuffer.append(commonSeps.PARENTHESIS_OPEN);
        stringBuffer.appendint(i_column);
        stringBuffer.append(commonSeps.COMMA);
        stringBuffer.appendint(i_row);
        stringBuffer.append(commonSeps.PARENTHESIS_CLOSE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor(column, row, columns, rows) {
        super();
        this.column = column;
        this.row = row;
        this.id = (row * columns) + column;
    }
    getColumn() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.column;
    }
    getRow() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.row;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CellPosition.toStringColRow(this.getColumn(), this.getRow());
        ;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
}
