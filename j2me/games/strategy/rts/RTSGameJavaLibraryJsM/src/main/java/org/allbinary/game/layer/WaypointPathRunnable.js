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
import { Exception } from '../../../../java/lang/Exception.js';
import { Thread } from '../../../../java/lang/Thread.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GeographicMapCellPosition
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointPathRunnableBase } from './WaypointPathRunnableBase.js';
//not GWT import - same folder const WaypointBehaviorBase
export class WaypointPathRunnable extends WaypointPathRunnableBase {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    run() {
        try {
            this.pathFindingLayer.getWaypointRunnableLogHelper().start(this.pathFindingLayer);
            var waypointBehavior = this.pathFindingLayer.getWaypointBehavior();
            ;
            var geographicMapCellPosition = this.pathFindingLayer.getCurrentGeographicMapCellPosition();
            ;
            if (geographicMapCellPosition ==
                null) {
                throw new Exception("Should never be running here");
            }
            waypointBehavior.setWaypointPathsList(this.targetPathFindingLayer.getWaypointBehavior().getWaypoint().getPathsListRunnable(geographicMapCellPosition));
            this.pathFindingLayer.getWaypointRunnableLogHelper().end(this.pathFindingLayer);
            Thread.sleep(15 + (this.priorityP * 2));
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
            this.setRunning(false);
        }
    }
    isDone() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
