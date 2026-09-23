/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GeographicMapCellPosition
import { DropCellPositionHistory } from '../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import - same folder const LayerPositionFinderInterface
export class RTSGameLayerPositionFinder extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSGameLayerPositionFinder.instance;
    }
    constructor() {
        super();
    }
    getLayerInterface(geographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DropCellPositionHistory.getInstance().getLayerInterface(geographicMapCellPosition);
        ;
    }
}
RTSGameLayerPositionFinder.instance = new RTSGameLayerPositionFinder();
