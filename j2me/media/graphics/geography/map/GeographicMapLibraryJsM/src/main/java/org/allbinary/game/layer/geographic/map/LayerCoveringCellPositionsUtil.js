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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
import { CellPositionsUtil } from '../../../../../../org/allbinary/media/graphics/geography/map/CellPositionsUtil.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LayerCoveringCellPositionsUtil extends Object {
    constructor() {
        super(...arguments);
        this.cellPositionsUtil = CellPositionsUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerCoveringCellPositionsUtil.instance;
    }
    //@Throws(Exception.constructor)
    getAllXY(geographicMapInterface, layerInterface, x, y, reusableList) {
        var topLeftGeographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(x, y);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getAll(geographicMapInterface, topLeftGeographicMapCellPosition, layerInterface, reusableList);
        ;
    }
    //@Throws(Exception.constructor)
    getAll(geographicMapInterface, topLeftGeographicMapCellPosition, layerInterface, reusableList) {
        reusableList.clear();
        var columns = layerInterface.getWidth() / geographicMapInterface.getAllBinaryTiledLayer().getCellWidth();
        ;
        var rows = layerInterface.getHeight() / geographicMapInterface.getAllBinaryTiledLayer().getCellHeight();
        ;
        if (columns == 0)
            columns = 1;
        if (rows == 0)
            rows = 1;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellPositionsUtil.getAll(geographicMapInterface, topLeftGeographicMapCellPosition, columns, rows, reusableList);
        ;
    }
}
LayerCoveringCellPositionsUtil.instance = new LayerCoveringCellPositionsUtil();
