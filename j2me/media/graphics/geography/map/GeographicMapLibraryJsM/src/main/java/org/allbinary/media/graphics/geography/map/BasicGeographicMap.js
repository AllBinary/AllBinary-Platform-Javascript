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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleGeographicMap } from './SimpleGeographicMap.js';
//not GWT import - same folder const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { SimpleGeographicMapCellPositionFactory } from './SimpleGeographicMapCellPositionFactory.js';
//not GWT import - same folder const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;
export class BasicGeographicMap extends SimpleGeographicMap {
    constructor(id, name, cellTypeIdToGeographicMapCellType, tiledLayer, foregroundBasicColor, backgroundBasicColor, geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory) {
        super(id, name, cellTypeIdToGeographicMapCellType, tiledLayer, foregroundBasicColor, backgroundBasicColor);
        this.mathUtil = MathUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface;
        this.geographicMapCellPositionFactory = geographicMapCellPositionBaseFactory.getInstance(this);
        this.geographicMapCellTypeFactory = geographicMapCellTypeFactory;
    }
    //@Throws(Exception.constructor)
    getCellPosition(direction, oldGeographicMapCellPosition) {
        switch (direction) {
            case 0: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn() - 1, oldGeographicMapCellPosition.getRow());
                ;
            }
            case 1: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn() + 1, oldGeographicMapCellPosition.getRow());
                ;
            }
            case 2: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn(), oldGeographicMapCellPosition.getRow() - 1);
                ;
            }
            case 3: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn(), oldGeographicMapCellPosition.getRow() + 1);
                ;
            }
            default: {
                throw new Exception("Only Four Directions");
            }
        }
    }
    //@Throws(Exception.constructor)
    getCellPositionNoThrow(direction, oldGeographicMapCellPosition) {
        switch (direction) {
            case 0: {
                if (oldGeographicMapCellPosition.getColumn() - 1 >= 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn() - 1, oldGeographicMapCellPosition.getRow());
                    ;
                }
                else {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                }
            }
            case 1: {
                if (oldGeographicMapCellPosition.getColumn() + 1 < this.getAllBinaryTiledLayer().getColumns()) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn() + 1, oldGeographicMapCellPosition.getRow());
                    ;
                }
                else {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                }
            }
            case 2: {
                if (oldGeographicMapCellPosition.getRow() - 1 >= 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn(), oldGeographicMapCellPosition.getRow() - 1);
                    ;
                }
                else {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                }
            }
            case 3: {
                if (oldGeographicMapCellPosition.getRow() + 1 < this.getAllBinaryTiledLayer().getRows()) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return this.geographicMapCellPositionFactory.getAt(oldGeographicMapCellPosition.getColumn(), oldGeographicMapCellPosition.getRow() + 1);
                    ;
                }
                else {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                }
            }
            default: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
            }
        }
    }
    //@Throws(Exception.constructor)
    isOfFourDirections(oldGeographicMapCellPosition, newGeographicMapCellPosition) {
        for (var index = 0; index < 4; index++) {
            if (newGeographicMapCellPosition == this.getCellPositionNoThrow(index, oldGeographicMapCellPosition)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    getCellPositionAtXY(x, y) {
        var allBinaryTiledLayer = this.getAllBinaryTiledLayer();
        ;
        var i_column = this.mathUtil.abs(x / allBinaryTiledLayer.getCellHeight());
        ;
        var i_row = this.mathUtil.abs(y / allBinaryTiledLayer.getCellWidth());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionFactory.getAt(i_column, i_row);
        ;
    }
    getCellPositionAtXYNoThrow(x, y) {
        var allBinaryTiledLayer = this.getAllBinaryTiledLayer();
        ;
        var i_column = this.mathUtil.abs(x / allBinaryTiledLayer.getCellHeight());
        ;
        var i_row = this.mathUtil.abs(y / allBinaryTiledLayer.getCellWidth());
        ;
        if (allBinaryTiledLayer.getColumns() > i_column && allBinaryTiledLayer.getRows() > i_row) {
            try {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.geographicMapCellPositionFactory.getAt(i_column, i_row);
                ;
                //: 
            }
            catch (e) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        }
    }
    //@Throws(Exception.constructor)
    isOnMap(geographicMapCellPosition) {
        var allBinaryTiledLayer = this.getAllBinaryTiledLayer();
        ;
        var i_column = geographicMapCellPosition.getColumn();
        ;
        var i_row = geographicMapCellPosition.getRow();
        ;
        if (allBinaryTiledLayer.getColumns() > i_column && allBinaryTiledLayer.getRows() > i_row) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    getCellPositionAtNoThrow(x, y, x2, y2, geographicMapCellPositionList) {
        geographicMapCellPositionList.clear();
        var allBinaryTiledLayer = this.getAllBinaryTiledLayer();
        ;
        var i_columnMin = this.mathUtil.abs(x / allBinaryTiledLayer.getCellHeight());
        ;
        var i_rowMin = this.mathUtil.abs(y / allBinaryTiledLayer.getCellWidth());
        ;
        var i_columnMax = this.mathUtil.abs(x2 / allBinaryTiledLayer.getCellHeight()) + 1;
        ;
        var i_rowMax = this.mathUtil.abs(y2 / allBinaryTiledLayer.getCellWidth()) + 1;
        ;
        for (var columnIndex = i_columnMin; columnIndex < i_columnMax; columnIndex++) {
            for (var rowIndex = i_rowMin; rowIndex < i_rowMax; rowIndex++) {
                if (allBinaryTiledLayer.getColumns() > columnIndex && allBinaryTiledLayer.getRows() > rowIndex) {
                    geographicMapCellPositionList.add(this.geographicMapCellPositionFactory.getAt(columnIndex, rowIndex));
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPositionList;
    }
    //@Throws(Exception.constructor)
    getCellPositionsAt(layer, currentCellPositionArray, cellPositionArray) {
        var hasChanged = false;
        ;
        var size = cellPositionArray.length;
        ;
        var size2 = cellPositionArray[0].length;
        ;
        var xPortion = layer.getXP() / (size - 1);
        ;
        var yPortion = layer.getYP() / (size - 1);
        ;
        for (var index = 0; index < size; index++) {
            for (var index2 = 0; index2 < size2; index2++) {
                var x = xPortion * index;
                ;
                var y = yPortion * index;
                ;
                cellPositionArray[index][index2] = this.getCellPositionAtXY(x, y);
                if (currentCellPositionArray[index][index2] != cellPositionArray[index][index2]) {
                    hasChanged = true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return hasChanged;
    }
    //@Throws(Exception.constructor)
    getCellTypeAtXY(x, y) {
        var cellPosition = this.getCellPositionAtXY(x, y);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getCellTypeAt(cellPosition);
        ;
    }
    getGeographicMapCellPositionFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionFactory;
    }
    getGeographicMapCellPositionFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionFactoryInterface;
    }
    getGeographicMapCellTypeFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellTypeFactory;
    }
}
BasicGeographicMap.NULL_BASIC_GEOGRAPHIC_MAP_ARRAY = [];
