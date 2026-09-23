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
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const WaypointLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PrimaryWaypointHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimaryWaypointHelper.instance;
    }
    constructor() {
        super();
        this.waypointLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
    }
    getWaypointLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointLayer;
    }
    setWaypointLayer(waypointLayer) {
        this.waypointLayer = waypointLayer;
    }
}
PrimaryWaypointHelper.instance = new PrimaryWaypointHelper();
