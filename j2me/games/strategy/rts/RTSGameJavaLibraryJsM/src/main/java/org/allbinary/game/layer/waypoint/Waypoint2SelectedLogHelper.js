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
//not GWT import const CollidableDestroyableDamageableLayer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not GWT import const GeographicMapCellPosition
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Waypoint2LogHelper } from './Waypoint2LogHelper.js';
//not GWT import - same folder const Waypoint2LogHelper
export class Waypoint2SelectedLogHelper extends Waypoint2LogHelper {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.positionStrings = PositionStrings.getInstance();
        this.stringUtil = StringUtil.getInstance();
        this.ENEMY_POSSIBLE_TARGET = " Enemy Possible Target: ";
        this.CLOSE_RANGE = "closeRange: ";
        this.SENSOR_RANGE = " sensorRange: ";
        this.ONLY_TARGETS = " Only Targets: ";
        this.SHORTER_THAN_CURRENT_TARGET_DISTANCE = " isShorterThanCurrentTargetDistance: ";
        this.CURRENT_TARGET_DESTROYED = " isCurrentTargetDestroyed: ";
        this.CURRENT_TARGET_NOT_AVAILABLE = " isCurrentTargetNotAvailable: ";
        this.PROCESS_POSSIBLE_TARGET = "selected: processPossibleTarget1";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Waypoint2SelectedLogHelper.instanceC;
    }
    initRange(associatedAdvancedRTSGameLayer, closeRange, sensorRange) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.CLOSE_RANGE);
        stringBuffer.appendint(closeRange);
        stringBuffer.append(this.SENSOR_RANGE);
        stringBuffer.appendint(sensorRange);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: initRange");
    }
    processPossibleTarget(associatedAdvancedRTSGameLayer, waypointBehaviorBase, layerInterface, anotherTargetDistance, isShorterThanCurrentTargetDistance, isCurrentTargetDestroyed) {
        if (waypointBehaviorBase.isWaypointListEmptyOrOnlyTargets() && waypointBehaviorBase.isInSensorRange(layerInterface, anotherTargetDistance)) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
            stringBuffer.append(this.ONLY_TARGETS);
            stringBuffer.appendboolean(waypointBehaviorBase.isWaypointListEmptyOrOnlyTargets());
            stringBuffer.append(this.SHORTER_THAN_CURRENT_TARGET_DISTANCE);
            stringBuffer.appendboolean(isShorterThanCurrentTargetDistance);
            stringBuffer.append(this.CURRENT_TARGET_DESTROYED);
            stringBuffer.appendboolean(isCurrentTargetDestroyed);
            stringBuffer.append(this.CURRENT_TARGET_NOT_AVAILABLE);
            stringBuffer.appendboolean((waypointBehaviorBase.getCurrentTargetLayerInterface() ==
                null));
            this.logUtil.putF(stringBuffer.toString(), this, this.PROCESS_POSSIBLE_TARGET);
        }
    }
    processSetTarget(associatedAdvancedRTSGameLayer, waypointBehaviorBase, layerInterface, anotherTargetDistance) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(waypointBehaviorBase.getCurrentTargetingStateString());
        stringBuffer.append(this.ENEMY_POSSIBLE_TARGET);
        stringBuffer.append(layerInterface.getName());
        stringBuffer.append(" anotherTargetDistance: ");
        stringBuffer.appendint(anotherTargetDistance);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processPossibleTarget2");
    }
    processPossibleTargetCloser(associatedAdvancedRTSGameLayer, waypointBehaviorBase, layerInterface, anotherTargetDistance) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(waypointBehaviorBase.getCurrentTargetingStateString());
        stringBuffer.append(this.ENEMY_POSSIBLE_TARGET);
        stringBuffer.append(layerInterface.getName());
        stringBuffer.append(" anotherTargetDistance: ");
        stringBuffer.appendint(anotherTargetDistance);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processPossibleTarget3");
    }
    setTarget(associatedAdvancedRTSGameLayer, waypointBehaviorBase, layerInterface, anotherTargetDistance) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(waypointBehaviorBase.getName());
        stringBuffer.append(" targeting: ");
        stringBuffer.append(layerInterface.getName());
        stringBuffer.append(" at: ");
        stringBuffer.appendint(anotherTargetDistance);
        stringBuffer.append(" instead of: ");
        stringBuffer.append(waypointBehaviorBase.getCurrentTargetingStateString());
        this.logUtil.putF(stringBuffer.toString(), this, "selected: setTarget");
    }
    setTargetPath(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF("Target Destroyed", this, "selected: setTargetPath");
    }
    setTargetPathIgnoreNewPath(associatedAdvancedRTSGameLayer, waypointBehaviorBase) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Set Path To Target: ");
        stringBuffer.append(waypointBehaviorBase.getCurrentTargetLayerInterface().getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.stringUtil.toString(waypointBehaviorBase.getCurrentTargetLayerInterface()));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: setTargetPath");
    }
    processWaypoint(associatedAdvancedRTSGameLayer, waypointBehaviorBase, targetLayer, size) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Size: ");
        stringBuffer.appendint(size);
        stringBuffer.append(" Waypoint: ");
        stringBuffer.append(targetLayer.getName());
        stringBuffer.append(" Target: ");
        stringBuffer.append(this.stringUtil.toString(waypointBehaviorBase.getCurrentTargetLayerInterface()));
        stringBuffer.append(" isTrackingWaypoint: ");
        stringBuffer.appendboolean(waypointBehaviorBase.isTrackingWaypoint());
        stringBuffer.append(" WaypointOverridesAttacking: ");
        stringBuffer.appendboolean(waypointBehaviorBase.isWaypointOverridesAttacking());
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processWaypoint");
    }
    processWaypointTracked(associatedAdvancedRTSGameLayer, waypointBehaviorBase) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" currentPathGeographicMapCellPosition: ");
        stringBuffer.append(this.stringUtil.toString(waypointBehaviorBase.getCurrentPathGeographicMapCellPosition()));
        stringBuffer.append(" nextUnvisitedPathGeographicMapCellPosition: ");
        stringBuffer.append(this.stringUtil.toString(waypointBehaviorBase.getNextUnvisitedPathGeographicMapCellPosition()));
        stringBuffer.append(" Tracked: ");
        stringBuffer.append(this.stringUtil.toString(waypointBehaviorBase.getCurrentGeographicMapCellHistory().getTracked()));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processWaypoint");
    }
    processWaypointTrackedVisit(associatedAdvancedRTSGameLayer, geographicMapCellPosition) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Visited: ");
        stringBuffer.append(this.stringUtil.toString(geographicMapCellPosition));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processWaypoint");
    }
    processWaypointTrackedWithoutProgress(associatedAdvancedRTSGameLayer, reason) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(reason).toString(), this, "turnTo");
    }
    wander(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(associatedAdvancedRTSGameLayer.getName(), this, "wander");
    }
    targetDestroyed(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" Target Destroyed").toString(), this, "selected: processTargeting");
    }
    processTargeting(associatedAdvancedRTSGameLayer, dx, dy) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.positionStrings.DX_LABEL);
        stringBuffer.appendint(dx);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.positionStrings.DY_LABEL);
        stringBuffer.appendint(dy);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processTargeting");
    }
    processTargetingNonWayPoint(associatedAdvancedRTSGameLayer, dx, dy) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Targeting Non Waypoint ");
        stringBuffer.append(this.positionStrings.DX_LABEL);
        stringBuffer.appendint(dx);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.positionStrings.DY_LABEL);
        stringBuffer.appendint(dy);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: processTargeting");
    }
    removeWaypoint(associatedAdvancedRTSGameLayer, unitWaypointBehavior2, waypointLayer, reason) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(unitWaypointBehavior2.getName());
        stringBuffer.append(" remove: ");
        stringBuffer.append(waypointLayer.getName());
        stringBuffer.append(" because: ");
        stringBuffer.append(reason);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: removeWaypoint");
    }
    removeWaypointList(associatedAdvancedRTSGameLayer, unitWaypointBehavior2, list) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(unitWaypointBehavior2.getName());
        stringBuffer.append(" Waypoints: ");
        stringBuffer.append(this.stringUtil.toString(list));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: removeWaypoint");
    }
    removeWaypointClear(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" Clearing removed waypoint").toString(), this, "selected: removeWaypoint");
    }
    clearTarget(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" Cleared Target").toString(), this, "selected: clearTarget");
    }
    addWaypointFromUser(associatedAdvancedRTSGameLayer, advancedRTSGameLayer) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" Adding Waypoint to Selected: ");
        stringBuffer.append(advancedRTSGameLayer.getName());
        if (advancedRTSGameLayer.getParentLayer() !=
            null) {
            stringBuffer.append(" With Parent: ");
            stringBuffer.append(advancedRTSGameLayer.getParentLayer().getName());
        }
        this.logUtil.putF(stringBuffer.toString(), this, "selected: onWaypointEvent");
    }
    targetMovedSoRetarget(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" - target moved so retargeting").toString(), this, "turnTo");
    }
}
Waypoint2SelectedLogHelper.instanceC = new Waypoint2SelectedLogHelper();
