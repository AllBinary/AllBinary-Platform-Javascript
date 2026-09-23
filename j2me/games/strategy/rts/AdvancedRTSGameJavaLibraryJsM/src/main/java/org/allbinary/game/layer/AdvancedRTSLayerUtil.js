/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { WorkWaypoint } from '../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js';
//not GWT import const WorkWaypoint
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const BaseRaceTrackGeographicMap
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSLayerUtil } from './RTSLayerUtil.js';
//not GWT import - same folder const RTSLayerUtil
export class AdvancedRTSLayerUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AdvancedRTSLayerUtil.instance;
    }
    createFakeRTSLayerHashtable(baseRaceTrackGeographicMap) {
        var hashtable = RTSLayerUtil.getInstance().createFakeRTSLayerHashtable(baseRaceTrackGeographicMap);
        ;
        hashtable.put(WorkWaypoint.ID, SmallIntegerSingletonFactory.getInstance().getAt(50));
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
AdvancedRTSLayerUtil.instance = new AdvancedRTSLayerUtil();
