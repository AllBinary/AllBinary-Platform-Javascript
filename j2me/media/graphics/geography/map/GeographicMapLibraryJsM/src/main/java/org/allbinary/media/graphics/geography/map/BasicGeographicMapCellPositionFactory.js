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
import { Object } from '../../../../../../java/lang/Object.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryTiledLayer
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import - same folder const GeographicMapCellPositionFactoryInitVisitorInterface
export class BasicGeographicMapCellPositionFactory extends Object {
    constructor(geographicMapInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.geographicMapInterface = geographicMapInterface;
        this.geographicMapCellPositionFactoryInterface = this.geographicMapInterface.getGeographicMapCellPositionFactoryInterface();
        this.tiledLayer = this.geographicMapInterface.getAllBinaryTiledLayer();
        this.columns = this.tiledLayer.getColumns();
        this.rows = this.tiledLayer.getRows();
        this.geographicMapCellPositionArray = new Array(this.rows).fill(null).map(() => new Array(this.columns).fill(0));
        this.init();
    }
    //@Throws(Exception.constructor)
    init() {
        var tiledLayer = this.tiledLayer;
        ;
        var columns = this.getColumns();
        ;
        var rows = this.getRows();
        ;
        var width = tiledLayer.getCellWidth();
        ;
        var height = tiledLayer.getCellHeight();
        ;
        for (var column = 0; column < columns; column++) {
            for (var row = 0; row < rows; row++) {
                this.createInstance(column, row, width, height);
            }
        }
    }
    //@Throws(Exception.constructor)
    visit(geographicMapCelPositionFactoryInitVisitorInterface) {
        var tiledLayer = this.tiledLayer;
        ;
        var columns = this.getColumns();
        ;
        var rows = this.getRows();
        ;
        try {
            var cellPosition;
            ;
            for (var column = 0; column < columns; column++) {
                for (var row = 0; row < rows; row++) {
                    cellPosition = this.getAt(column, row);
                    geographicMapCelPositionFactoryInitVisitorInterface.visit(tiledLayer, cellPosition);
                }
            }
            //: 
        }
        catch (e) {
            var commonSeps = CommonSeps.getInstance();
            ;
            this.logUtil.put(new StringMaker().append(commonSeps.BRACKET_OPEN).appendint(rows).append(commonSeps.BRACKET_CLOSE).append(commonSeps.BRACKET_OPEN).appendint(columns).append(commonSeps.BRACKET_CLOSE).toString(), this, "visit", e);
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    getAt(i_column, i_row) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionArray[i_row][i_column];
    }
    //@Throws(Exception.constructor)
    getInstance(anotherMapGeographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getAt(anotherMapGeographicMapCellPosition.getColumn(), anotherMapGeographicMapCellPosition.getRow());
        ;
    }
    //@Throws(Exception.constructor)
    createInstance(i_column, i_row, width, height) {
        var cellPositionCanBeNull = this.geographicMapCellPositionArray[i_row][i_column];
        ;
        if (cellPositionCanBeNull ==
            null) {
            cellPositionCanBeNull = this.geographicMapCellPositionFactoryInterface.getInstance(this.geographicMapInterface, i_column, i_row, this.columns, this.rows, width, height);
            this.geographicMapCellPositionArray[i_row][i_column] = cellPositionCanBeNull;
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
