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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellTypeFactory } from './GeographicMapCellTypeFactory.js';
//not GWT import - same folder const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
export class SimpleGeographicMap extends Object {
    constructor(id, name, cellTypeIdToGeographicMapCellType, tiledLayer, foregroundBasicColor, backgroundBasicColor) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.foregroundBasicColor = BasicColorFactory.getInstance().NULL_COLOR;
        this.backgroundBasicColor = BasicColorFactory.getInstance().NULL_COLOR;
        this.geographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance();
        this.id = id;
        this.name = name;
        this.cellTypeIdToGeographicMapCellType = cellTypeIdToGeographicMapCellType;
        this.tiledLayer = tiledLayer;
        this.setBackgroundBasicColor(backgroundBasicColor);
        this.setForegroundBasicColor(foregroundBasicColor);
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    reset() {
    }
    getAllBinaryTiledLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayer;
    }
    //@Throws(Exception.constructor)
    getCellTypeAt(cellPosition) {
        var i_column = cellPosition.getColumn();
        ;
        var i_row = cellPosition.getRow();
        ;
        var cellTypeId = this.tiledLayer.getCell(i_column, i_row);
        ;
        if (cellTypeId < 0) {
            cellTypeId = this.tiledLayer.getAnimatedTile(cellTypeId);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellTypeFactory.get(this.cellTypeIdToGeographicMapCellType[cellTypeId]);
        ;
    }
    getCellTypeFromMapCellTypeInt(cellTypeId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellTypeIdToGeographicMapCellType[cellTypeId];
    }
    getForegroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.foregroundBasicColor;
    }
    setForegroundBasicColor(foregroundBasicColor) {
        this.foregroundBasicColor = foregroundBasicColor;
    }
    getBackgroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.backgroundBasicColor;
    }
    setBackgroundBasicColor(backgroundBasicColor) {
        this.backgroundBasicColor = backgroundBasicColor;
    }
}
