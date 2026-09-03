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
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CellPosition } from './CellPosition.js';
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
export class CellPositionFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CellPositionFactory.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.NONE = new CellPosition(-1, -1, -1, -1);
        this.cellPositionArray = new Array(0).fill(null).map(() => new Array(0).fill(0));
        this.columns = 0;
        this.rows = 0;
    }
    init(columns, rows) {
        this.cellPositionArray = new Array(columns).fill(null).map(() => new Array(rows).fill(0));
        this.columns = columns;
        this.rows = rows;
        var commonStrings = CommonStrings.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Init: columns: ");
        stringBuffer.appendint(columns);
        stringBuffer.append(" rows: ");
        stringBuffer.appendint(rows);
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.INIT);
        for (var column = 0; column < columns; column++) {
            for (var row = 0; row < rows; row++) {
                this.createInstance(column, row);
            }
        }
    }
    getInstanceColRow(i_column, i_row) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.cellPositionArray[i_column][i_row];
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(new StringMaker().append("columns: ").appendint(this.getColumns()).append(" rows: ").appendint(this.getRows()).append(" col: ").appendint(i_column).append(" row: ").appendint(i_row).toString(), this, commonStrings.GET_INSTANCE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NONE;
        }
    }
    createInstance(i_column, i_row) {
        var cellPositionCanBeNull = this.cellPositionArray[i_column][i_row];
        ;
        if (cellPositionCanBeNull ==
            null) {
            cellPositionCanBeNull = new CellPosition(i_column, i_row, this.columns, this.rows);
            this.cellPositionArray[i_column][i_row] = cellPositionCanBeNull;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return cellPositionCanBeNull;
    }
    getColumns() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.columns;
    }
    getRows() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rows;
    }
}
CellPositionFactory.SINGLETON = new CellPositionFactory();
