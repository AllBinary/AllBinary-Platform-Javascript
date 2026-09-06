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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Integer } from '../../../../../java/lang/Integer.js';
import { PrimaryWaypointHelper } from '../../../../../org/allbinary/game/input/form/PrimaryWaypointHelper.js';
//not GWT import const SensorAction = globalThis.org.allbinary.game.layer.SensorAction;
import { SensorActionFactory } from '../../../../../org/allbinary/game/layer/SensorActionFactory.js';
//not GWT import const SensorActionFactory = globalThis.org.allbinary.game.layer.SensorActionFactory;
import { WaypointBehaviorBase } from '../../../../../org/allbinary/game/layer/WaypointBehaviorBase.js';
//not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const WaypointEventListenerInterface = globalThis.org.allbinary.game.layer.waypoint.event.WaypointEventListenerInterface;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
import { GeographicMapCellHistory } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import - same folder const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;
export class UnitWaypointBehavior extends WaypointBehaviorBase {
    constructor(associatedAdvancedRTSGameLayer, fakeWaypoint) {
        super();
        this.commonSeps = CommonSeps.getInstance();
        this.longWeaponRange = 0;
        this.sensorAction = SensorActionFactory.getInstance().ATTACK;
        this.lastPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.currentPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.moving = false;
        this.movingFromStopped = false;
        this.waypointPathsListP = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.currentTargetDistance = Integer.MAX_VALUE;
        this.currentTargetLayerInterfaceP = CollidableDestroyableDamageableLayer.getNullInstance();
        this.trackingWaypoint = false;
        this.repeatedToLong = new TimeDelayHelper(22000);
        this.associatedAdvancedRTSGameLayer = associatedAdvancedRTSGameLayer;
        this.completeTimeDelayHelper = new TimeDelayHelper(30000);
        this.targetList = new BasicArrayListD();
        this.possibleTargetList = new BasicArrayListD();
        this.setWaypointPathsList(BasicArrayListUtil.getInstance().getImmutableInstance());
        this.currentGeographicMapCellHistoryP = new GeographicMapCellHistory();
        this.FAKE_WAYPOINT_LAYER = fakeWaypoint;
    }
    initRange(weaponRange) {
        this.longWeaponRange = weaponRange / 2;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onWaypointEvent(event) {
        var advancedRTSGameLayer = event.getRtsLayer();
        ;
        this.associatedAdvancedRTSGameLayer.waypointLogHelperP.onWaypointEvent(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer);
        if (this.associatedAdvancedRTSGameLayer.isSelected()) {
            this.addWaypointFromUser(advancedRTSGameLayer);
        }
        else if (advancedRTSGameLayer.shouldAddWaypointFromBuilding()) {
            this.addWaypointFromBuilding(advancedRTSGameLayer);
        }
    }
    //@Throws(Exception.constructor)
    addWaypointFromUser(advancedRTSGameLayer) {
    }
    //@Throws(Exception.constructor)
    addWaypointFromBuilding(advancedRTSGameLayer) {
        if (advancedRTSGameLayer == PrimaryWaypointHelper.getInstance().getWaypointLayer() || advancedRTSGameLayer.getParentLayer() == this.associatedAdvancedRTSGameLayer.getParentLayer()) {
            if (!this.targetList.contains(advancedRTSGameLayer)) {
                this.associatedAdvancedRTSGameLayer.waypointLogHelperP.addWaypointFromBuilding(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer);
                if (advancedRTSGameLayer.isDestroyed()) {
                    throw new Exception("Trying to add a dead: " + advancedRTSGameLayer);
                }
                this.targetList.add(advancedRTSGameLayer);
                this.associatedAdvancedRTSGameLayer.waypointLogHelperP.addWaypointFromBuildingList(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer, this.targetList);
            }
        }
    }
    isWaypointListEmptyOrOnlyTargets() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    insertWaypoint(index, rtsLayer) {
        if (this.canInsertWaypoint(index, rtsLayer)) {
            this.associatedAdvancedRTSGameLayer.waypointLogHelperP.insertWaypoint(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName());
            if (rtsLayer.isDestroyed()) {
                throw new Exception("Trying to add a dead: " + rtsLayer);
            }
            this.targetList.addAt(index, rtsLayer);
            this.associatedAdvancedRTSGameLayer.waypointLogHelperP.insertWaypointList(this.associatedAdvancedRTSGameLayer, index, rtsLayer, this.getName(), this.targetList);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    move() {
        if (this.isMoving()) {
            this.setMovingFromStopped(false);
        }
        else {
            this.setMovingFromStopped(true);
        }
        this.setMoving(false);
    }
    //@Throws(Exception.constructor)
    setRandomGeographicMapCellHistory(pathsList) {
        var size = pathsList.size();
        ;
        this.associatedAdvancedRTSGameLayer.waypointLogHelperP.setRandomGeographicMapCellHistoryList(this.associatedAdvancedRTSGameLayer, pathsList);
        if (size > 0) {
            var geographicMapCellPositionBasicArrayList = BasicArrayListUtil.getInstance().getRandom(pathsList);
            ;
            this.setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList);
        }
    }
    //@Throws(Exception.constructor)
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList) {
        this.lastPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        if (this.associatedAdvancedRTSGameLayer.showMoreCaptionStates) {
            this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(UnitWaypointBehavior.PATHING, BasicColorFactory.getInstance().GREEN);
        }
        this.currentGeographicMapCellHistoryP.init();
        this.associatedAdvancedRTSGameLayer.init(this.currentGeographicMapCellHistoryP, geographicMapCellPositionBasicArrayList);
        this.setTrackingWaypoint(true);
        this.getCompleteTimeDelayHelper().setStartTimeTNT();
    }
    canInsertWaypoint(index, rtsLayer) {
        if (this.targetList.size() > 4) {
        }
        else if (this.targetList.contains(rtsLayer)) {
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    addBuildingChase(allbinaryLayer, cellPosition) {
    }
    //@Throws(Exception.constructor)
    moveAwayFromBuilding(buildingLayer) {
        var geographicMapCellPosition = this.associatedAdvancedRTSGameLayer.getCurrentGeographicMapCellPosition();
        ;
        var list = buildingLayer.geographicMapCellPositionAreaBase.getOccupyingGeographicMapCellPositionList();
        ;
        if (list.contains(geographicMapCellPosition)) {
            if (this.insertWaypoint(0, this.FAKE_WAYPOINT_LAYER)) {
                this.associatedAdvancedRTSGameLayer.waypointLogHelperP.moveAwayFromBuilding(this.associatedAdvancedRTSGameLayer);
                this.setCurrentTargetLayerInterface(this.FAKE_WAYPOINT_LAYER);
                var pathsList = buildingLayer.getMoveOutOfBuildAreaPath(geographicMapCellPosition);
                ;
                this.associatedAdvancedRTSGameLayer.setClosestGeographicMapCellHistory(pathsList);
            }
        }
    }
    needToMove() {
        this.associatedAdvancedRTSGameLayer.waypointLogHelperP.needToMove(this.associatedAdvancedRTSGameLayer, this);
        if (this.isTrackingWaypoint() || this.sensorAction == SensorActionFactory.getInstance().EVADE || (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance() && this.getCurrentTargetDistance() >= this.longWeaponRange + this.currentTargetLayerInterfaceP.getHalfHeight())) {
            this.repeatedToLong.setStartTimeTNT();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (this.repeatedToLong.isTimeTNT()) {
            var message = "Repeating too long: " + this.getMovementLogicAsString();
            ;
            ForcedLogUtil.log(message, this.associatedAdvancedRTSGameLayer);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getMovementLogicAsString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("isTrackingWaypoint: ");
        stringBuffer.appendboolean(this.isTrackingWaypoint());
        stringBuffer.append(" sensorAction: ");
        stringBuffer.append(this.sensorAction.name);
        stringBuffer.append(" getCurrentTargetLayerInterface: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.currentTargetLayerInterfaceP));
        if (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance()) {
            stringBuffer.append(" Target Range: ");
            stringBuffer.appendint(this.getCurrentTargetDistance());
            stringBuffer.append(" >= ");
            stringBuffer.appendint(this.longWeaponRange + this.currentTargetLayerInterfaceP.getHalfHeight());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    isMovingFromStopped() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.movingFromStopped;
    }
    setMovingFromStopped(movingFromStopped) {
        this.movingFromStopped = movingFromStopped;
    }
    setWaypointPathsList(waypointPathsList) {
        this.waypointPathsListP = waypointPathsList;
    }
    getWaypointPathsList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointPathsListP;
    }
    isMoving() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.moving;
    }
    setMoving(moving) {
        this.moving = moving;
    }
    isTrackingWaypoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.trackingWaypoint;
    }
    getPossibleTargetList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.possibleTargetList;
    }
    setLastPathGeographicMapCellPosition(lastPathGeographicMapCellPosition) {
        this.lastPathGeographicMapCellPosition = lastPathGeographicMapCellPosition;
    }
    getLastPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastPathGeographicMapCellPosition;
    }
    setCurrentPathGeographicMapCellPosition(currentPathGeographicMapCellPosition) {
        this.currentPathGeographicMapCellPosition = currentPathGeographicMapCellPosition;
    }
    getCurrentPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentPathGeographicMapCellPosition;
    }
    setSensorAction(sensorAction) {
        this.sensorAction = sensorAction;
    }
    getSensorAction() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sensorAction;
    }
    setCurrentTargetLayerInterface(currentTargetLayerInterface) {
        this.currentTargetLayerInterfaceP = currentTargetLayerInterface;
    }
    getCurrentTargetLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentTargetLayerInterfaceP;
    }
    setCurrentTargetDistance(currentTargetDistance) {
        this.currentTargetDistance = currentTargetDistance;
    }
    getCurrentTargetDistance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentTargetDistance;
    }
    getCompleteTimeDelayHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.completeTimeDelayHelper;
    }
    getCurrentGeographicMapCellHistory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentGeographicMapCellHistoryP;
    }
    setTrackingWaypoint(trackingWaypoint) {
        this.trackingWaypoint = trackingWaypoint;
    }
}
UnitWaypointBehavior.PATHING = "Pathing";
