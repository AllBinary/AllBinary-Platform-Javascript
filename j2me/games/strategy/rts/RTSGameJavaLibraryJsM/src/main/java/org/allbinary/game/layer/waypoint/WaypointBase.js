/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const PathFindingLayerInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const EventListenerInterface
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
import { NoSound } from '../../../../../org/allbinary/media/audio/NoSound.js';
//not GWT import const PathFindingInfo
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WaypointBase extends Object {
    constructor(sound) {
        super();
        this.connectedWaypointList = new BasicArrayListD();
        this.allBinaryGameLayerManagerP = AllBinaryGameLayerManager.getNullInstance();
        this.sound = sound;
    }
    getSound() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sound;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        this.allBinaryGameLayerManagerP = allBinaryGameLayerManager;
    }
    getConnectedWaypointList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.connectedWaypointList;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    getPathFindingInfo(geographicMapCellPosition) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getPathsList(geographicMapCellPosition, pathFindingInfo, multipassState) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getPathsListRunnable(geographicMapCellPosition) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getPathsListFromCacheOnly(geographicMapCellPosition) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    visit(unitLayer) {
    }
    reset() {
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
WaypointBase.NULL_WAYPOINT_BASE = new WaypointBase(NoSound.getInstance());
