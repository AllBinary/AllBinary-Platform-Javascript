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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
export class BasicGeographicMapUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGeographicMapUtil.instance;
    }
    //@Throws(Exception.constructor)
    getBorderingRow(direction, oldGeographicMapCellPosition) {
        var LOCATION_CHANGE = 1;
        ;
        switch (direction) {
            case 0: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getRow();
                ;
            }
            case 1: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getRow();
                ;
            }
            case 2: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getRow() + LOCATION_CHANGE;
            }
            case 3: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getRow() - LOCATION_CHANGE;
            }
            default: {
                throw new Exception("Only Four Directions");
            }
        }
    }
    //@Throws(Exception.constructor)
    getBorderingColumn(direction, oldGeographicMapCellPosition) {
        var LOCATION_CHANGE = 1;
        ;
        switch (direction) {
            case 0: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getColumn() - LOCATION_CHANGE;
            }
            case 1: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getColumn() + LOCATION_CHANGE;
            }
            case 2: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getColumn();
                ;
            }
            case 3: {
                //if statement needs to be on the same line and ternary does not work the same way.
                return oldGeographicMapCellPosition.getColumn();
                ;
            }
            default: {
                throw new Exception("Only Four Directions");
            }
        }
    }
    //@Throws(Exception.constructor)
    isSameCellPosition(fromGeographicMapCellPosition, toGeographicMapCellPosition) {
        var fromColumn = fromGeographicMapCellPosition.getColumn();
        ;
        var fromRow = fromGeographicMapCellPosition.getRow();
        ;
        var goColumn = toGeographicMapCellPosition.getColumn();
        ;
        var goRow = toGeographicMapCellPosition.getRow();
        ;
        if (fromColumn == goColumn && fromRow == goRow) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    createAllBinaryTiledLayerArray(geographicMapInterfaceArray) {
        var tiledLayerArray = new Array(geographicMapInterfaceArray.length);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getAllBinaryTiledLayerArray(geographicMapInterfaceArray, tiledLayerArray, 0);
        ;
    }
    getAllBinaryTiledLayerArray(geographicMapInterfaceArray, tiledLayerArray, startIndex) {
        var geographicMapInterface;
        ;
        var size = geographicMapInterfaceArray.length;
        ;
        var count = 0;
        ;
        for (var index = size + startIndex; --index >= startIndex;) {
            geographicMapInterface = geographicMapInterfaceArray[index];
            tiledLayerArray[count++] = geographicMapInterface.getAllBinaryTiledLayer();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return tiledLayerArray;
    }
    move(geographicMapInterfaceArray, dx, dy) {
        var geographicMapInterface;
        ;
        var size = geographicMapInterfaceArray.length;
        ;
        for (var index = size; --index >= 0;) {
            geographicMapInterface = geographicMapInterfaceArray[index];
            geographicMapInterface.getAllBinaryTiledLayer().moveDXY(dx, dy);
        }
    }
    setPosition(geographicMapInterfaceArray, x, y) {
        var geographicMapInterface;
        ;
        var size = geographicMapInterfaceArray.length;
        ;
        for (var index = size; --index >= 0;) {
            geographicMapInterface = geographicMapInterfaceArray[index];
            geographicMapInterface.getAllBinaryTiledLayer().setPosition(x, y, geographicMapInterface.getAllBinaryTiledLayer().getZP());
        }
    }
}
BasicGeographicMapUtil.instance = new BasicGeographicMapUtil();
