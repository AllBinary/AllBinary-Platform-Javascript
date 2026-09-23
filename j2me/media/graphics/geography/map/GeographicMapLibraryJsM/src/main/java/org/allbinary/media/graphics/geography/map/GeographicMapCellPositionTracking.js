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
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleGeographicMapCellPositionFactory } from './SimpleGeographicMapCellPositionFactory.js';
//not GWT import - same folder const GeographicMapCellPosition
import { GeographicMapCellType } from './GeographicMapCellType.js';
//not GWT import - same folder const GeographicMapCompositeInterface
export class GeographicMapCellPositionTracking extends Object {
    constructor() {
        super();
        this.currentGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.previousGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.newGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.currentCellType = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
    }
    //@Throws(Exception.constructor)
    getCurrentOverCellType(geographicMap) {
        var geographicMapCellPosition = this.currentGeographicMapCellPosition;
        ;
        if (geographicMapCellPosition != this.previousGeographicMapCellPosition) {
            this.currentCellType = geographicMap.getCellTypeAt(geographicMapCellPosition);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentCellType;
    }
    //@Throws(Exception.constructor)
    updateStart(gameCanvasInterface, layer) {
        if (gameCanvasInterface != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            var geographicMapCompositeInterface = gameCanvasInterface.getLayerManager();
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            this.newGeographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(layer.getXP() + layer.getHalfWidth(), layer.getYP() + layer.getHalfHeight());
            if (this.newGeographicMapCellPosition != this.currentGeographicMapCellPosition) {
                this.currentGeographicMapCellPosition = this.newGeographicMapCellPosition;
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    updateEnd() {
        if (this.currentGeographicMapCellPosition != this.previousGeographicMapCellPosition) {
            this.previousGeographicMapCellPosition = this.currentGeographicMapCellPosition;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getPreviousGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.previousGeographicMapCellPosition;
    }
    getCurrentGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentGeographicMapCellPosition;
    }
}
