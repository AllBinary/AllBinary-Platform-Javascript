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
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not GWT import - same folder const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
export class CellPositionsUtil extends Object {
    constructor() {
        super(...arguments);
        this.reusableSingleThreadedSurroundingList = new BasicArrayListS(8);
        this.surroundArray = [
            intArrayOf(-1, -1),
            [0, -1],
            [1, -1],
            [-1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            [-1, 0]
        ];
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CellPositionsUtil.instance;
    }
    //@Throws(Exception.constructor)
    getAll(geographicMapInterface, topRightGeographicMapCellPosition, columns, rows, reusableList) {
        reusableList.clear();
        var geographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var lastColumn = topRightGeographicMapCellPosition.getColumn() + columns;
        ;
        var lastRow = topRightGeographicMapCellPosition.getRow() + rows;
        ;
        if ((columns > 1 && lastColumn > geographicMapInterface.getAllBinaryTiledLayer().getColumns()) || (rows > 1 && lastRow > geographicMapInterface.getAllBinaryTiledLayer().getRows())) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return reusableList;
        }
        for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
            for (var columnIndex = 0; columnIndex < columns; columnIndex++) {
                var geographicMapCellPosition = geographicMapCellPositionFactory.getAt(topRightGeographicMapCellPosition.getColumn() + columnIndex, topRightGeographicMapCellPosition.getRow() + rowIndex);
                ;
                reusableList.add(geographicMapCellPosition);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return reusableList;
    }
    //@Throws(Exception.constructor)
    getAllSurrounding(geographicMapInterface, occupyList, reusableList) {
        reusableList.clear();
        for (var index = occupyList.size() - 1; index >= 0; index--) {
            var layerGeographicMapCellPosition = occupyList.get(index);
            ;
            var surroundingGeographicMapCellPositionList = this.getAllSurroundingAt(geographicMapInterface, layerGeographicMapCellPosition, this.reusableSingleThreadedSurroundingList);
            ;
            for (var index2 = surroundingGeographicMapCellPositionList.size() - 1; index2 >= 0; index2--) {
                var geographicMapCellPosition = surroundingGeographicMapCellPositionList.get(index2);
                ;
                if (!reusableList.contains(geographicMapCellPosition) && !occupyList.contains(geographicMapCellPosition)) {
                    reusableList.add(geographicMapCellPosition);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return reusableList;
    }
    //@Throws(Exception.constructor)
    getAllSurroundingAt(geographicMapInterface, layerGeographicMapCellPosition, reusableSurroundingList) {
        reusableSurroundingList.clear();
        var geographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var row = 0;
        ;
        var column = 0;
        ;
        for (var index = 0; index < 8; index++) {
            column = layerGeographicMapCellPosition.getColumn() + this.surroundArray[index][0];
            row = layerGeographicMapCellPosition.getRow() + this.surroundArray[index][1];
            if (tiledLayer.isOnTileLayer(column, row)) {
                var geographicMapCellPosition = geographicMapCellPositionFactory.getAt(column, row);
                ;
                reusableSurroundingList.add(geographicMapCellPosition);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return reusableSurroundingList;
    }
}
CellPositionsUtil.instance = new CellPositionsUtil();
