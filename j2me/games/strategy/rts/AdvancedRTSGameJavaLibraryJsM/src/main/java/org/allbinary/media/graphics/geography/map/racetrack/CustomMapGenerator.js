/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { Exception } from '../../../../../../../java/lang/Exception.js';
//not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;
import { WaypointLayer } from '../../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;
import { DropCellPositionHistory } from '../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomMapGeneratorBase } from './CustomMapGeneratorBase.js';
//not GWT import const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;
export class CustomMapGenerator extends CustomMapGeneratorBase {
    constructor(raceTrackGeographicMap) {
        super();
        this.dropCellPositionHistory = DropCellPositionHistory.getInstance();
        this.raceTrackGeographicMap = raceTrackGeographicMap;
        this.geographicMapCellTypeFactory = this.raceTrackGeographicMap.getGeographicMapCellTypeFactory();
        var mapArray = raceTrackGeographicMap.getRaceTrackData().getMapArray();
        ;
        var size2 = mapArray[0].length;
        ;
        this.customMapArray = new Array(mapArray.length).fill(null).map(() => new Array(size2).fill(0));
        if (mapArray.length != this.customMapArray.length || mapArray[0].length != this.customMapArray[0].length) {
            throw new Exception("Array Incorrect");
        }
    }
    //@Throws(Exception.constructor)
    copyMapIntoCustomMap() {
        var mapArray = this.raceTrackGeographicMap.getRaceTrackData().getMapArray();
        ;
        var startIndex2 = mapArray[0].length - 1;
        ;
        for (var index = mapArray.length - 1; index >= 0; index--) {
            for (var index2 = startIndex2; index2 >= 0; index2--) {
                this.customMapArray[index][index2] = this.getCustomType(index2, index, mapArray[index][index2]);
            }
        }
    }
    //@Throws(Exception.constructor)
    getCustomType(column, row, currentType) {
        var emptyType = this.geographicMapCellTypeFactory.getEmptyType();
        ;
        var geographicMapCellPositionFactory = this.raceTrackGeographicMap.getGeographicMapCellPositionFactory();
        ;
        var cellPosition = geographicMapCellPositionFactory.getAt(column, row);
        ;
        if (this.dropCellPositionHistory.isCellPositionWithDrop(cellPosition)) {
            var layer = this.dropCellPositionHistory.getLayerInterface(cellPosition);
            ;
            if (layer == AllBinaryLayer.NULL_ALLBINARY_LAYER) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return emptyType;
            }
            var rtsLayer = layer;
            ;
            if (!(rtsLayer.getType() == WaypointLayer.getStaticType())) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return emptyType;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return currentType;
    }
    getCustomMapArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customMapArray;
    }
}
