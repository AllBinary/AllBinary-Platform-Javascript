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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const LayerPositionFinderInterface = globalThis.org.allbinary.game.input.LayerPositionFinderInterface;
import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
//not GWT import const WaypointCellPositionHistory = globalThis.org.allbinary.game.layer.waypoint.WaypointCellPositionHistory;
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AdvancedRTSGameLayerPositionFinder extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AdvancedRTSGameLayerPositionFinder.instance;
    }
    constructor() {
        super();
    }
    getLayerInterface(geographicMapCellPosition) {
        var layerInterface = DropCellPositionHistory.getInstance().getLayerInterface(geographicMapCellPosition);
        ;
        if (layerInterface == AllBinaryLayer.NULL_ALLBINARY_LAYER) {
            layerInterface = WaypointCellPositionHistory.getInstance().getLayerInterface(geographicMapCellPosition);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return layerInterface;
    }
}
AdvancedRTSGameLayerPositionFinder.instance = new AdvancedRTSGameLayerPositionFinder();
