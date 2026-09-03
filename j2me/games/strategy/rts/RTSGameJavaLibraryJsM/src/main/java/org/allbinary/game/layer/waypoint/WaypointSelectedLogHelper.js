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
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointLogHelper } from './WaypointLogHelper.js';
//not GWT import const WaypointLogHelper = globalThis.org.allbinary.game.layer.waypoint.WaypointLogHelper;
export class WaypointSelectedLogHelper extends WaypointLogHelper {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.stringUtil = StringUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointSelectedLogHelper.instanceC;
    }
    onWaypointEvent(associatedAdvancedRTSGameLayer, advancedRTSGameLayer) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" onWaypointEvent: ");
        stringBuffer.append(advancedRTSGameLayer.getName());
        if (advancedRTSGameLayer.getParentLayer() !=
            null) {
            stringBuffer.append(" With Parent: ");
            stringBuffer.append(advancedRTSGameLayer.getParentLayer().getName());
        }
        this.logUtil.putF(stringBuffer.toString(), this, "onWaypointEvent");
    }
    addWaypointFromBuilding(associatedAdvancedRTSGameLayer, advancedRTSGameLayer) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Adding Waypoint: ");
        stringBuffer.append(advancedRTSGameLayer.getName());
        if (advancedRTSGameLayer.getParentLayer() !=
            null) {
            stringBuffer.append(" With Parent: ");
            stringBuffer.append(advancedRTSGameLayer.getParentLayer().getName());
        }
        this.logUtil.putF(stringBuffer.toString(), this, "selected: onWaypointEvent");
    }
    addWaypointFromBuildingList(associatedAdvancedRTSGameLayer, advancedRTSGameLayer, list) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Waypoints: ");
        stringBuffer.append(this.stringUtil.toString(list));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: onWaypointEvent");
    }
    insertWaypoint(associatedAdvancedRTSGameLayer, index, rtsLayer, waypointName) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(waypointName);
        stringBuffer.append(" Insert: ");
        stringBuffer.append(rtsLayer.getName());
        stringBuffer.append(" for Waypoint: ");
        this.logUtil.putF(stringBuffer.toString(), this, "selected: insertWaypoint");
    }
    insertWaypointList(associatedAdvancedRTSGameLayer, index, rtsLayer, waypointName, list) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(waypointName);
        stringBuffer.append(" Insert: ");
        stringBuffer.append(rtsLayer.getName());
        stringBuffer.append(" Waypoints: ");
        stringBuffer.append(this.stringUtil.toString(list));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: insertWaypoint");
    }
    setRandomGeographicMapCellHistoryList(associatedAdvancedRTSGameLayer, pathsList) {
        var size = pathsList.size();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(CommonLabels.getInstance().START);
        stringBuffer.appendint(size);
        stringBuffer.append(" -> ");
        stringBuffer.append(this.stringUtil.toString(pathsList));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: setRandomGeographicMapCellHistory");
    }
    moveAwayFromBuilding(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" Trying to move away from building").toString(), this, "selected: moveAwayFromBuilding");
    }
    needToMove(associatedAdvancedRTSGameLayer, unitWaypointBehavior) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(unitWaypointBehavior.getMovementLogicAsString()).toString(), this, "needToMove");
    }
    setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" pathsList is null").toString(), this, "setRandomGeographicMapCellHistory");
    }
    setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer, existingCurrentPathGeographicMapCellPosition, currentPathGeographicMapCellPosition) {
        if (existingCurrentPathGeographicMapCellPosition ==
            null)
            this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" currentPathGeographicMapCellPosition: ").append(this.stringUtil.toString(currentPathGeographicMapCellPosition)).toString(), this, "setCurrentPathGeographicMapCellPosition");
    }
    setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer, existingNextUnvisitedPathGeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition) {
        if (existingNextUnvisitedPathGeographicMapCellPosition != nextUnvisitedPathGeographicMapCellPosition)
            this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" nextUnvisitedPathGeographicMapCellPosition: ").append(this.stringUtil.toString(nextUnvisitedPathGeographicMapCellPosition)).toString(), this, "setNextUnvisitedPathGeographicMapCellPosition");
    }
}
WaypointSelectedLogHelper.instanceC = new WaypointSelectedLogHelper();
