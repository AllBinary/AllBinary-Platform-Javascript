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
//not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
//not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PrimaryWaypointHelper } from './PrimaryWaypointHelper.js';
//not GWT import const PrimaryWaypointHelper = globalThis.org.allbinary.game.input.form.PrimaryWaypointHelper;
export class AssignWaypointsUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.WAYPOINT_EVENT = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AssignWaypointsUtil.instance;
    }
    set(unitLayer, ownerAdvancedRTSGameLayer) {
        try {
            var list = ownerAdvancedRTSGameLayer.getWaypointBehavior().getOwnedWaypointList();
            ;
            var unitWaypointBehavior = unitLayer.getWaypointBehavior();
            ;
            for (var index = list.size() - 1; index >= 0; index--) {
                var waypointLayer = list.get(index);
                ;
                this.WAYPOINT_EVENT.setRtsLayer(waypointLayer);
                unitWaypointBehavior.onWaypointEvent(this.WAYPOINT_EVENT);
            }
            var waypointLayer = PrimaryWaypointHelper.getInstance().getWaypointLayer();
            ;
            if (waypointLayer != NullPathFindingLayer.NULL_PATH_FINDING_LAYER) {
                this.WAYPOINT_EVENT.setRtsLayer(waypointLayer);
                unitWaypointBehavior.onWaypointEvent(this.WAYPOINT_EVENT);
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "set", e);
        }
    }
}
AssignWaypointsUtil.instance = new AssignWaypointsUtil();
