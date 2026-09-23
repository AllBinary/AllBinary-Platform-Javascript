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
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { SteeringVisitor } from '../../../../../org/allbinary/game/layer/SteeringVisitor.js';
//not GWT import const AdvancedRTSGameLayer
import { MultipassWaypointPathRunnable } from '../../../../../org/allbinary/game/layer/MultipassWaypointPathRunnable.js';
//not GWT import const RTSLayer
import { WaypointPathRunnable } from '../../../../../org/allbinary/game/layer/WaypointPathRunnable.js';
//not GWT import const WaypointPathRunnable
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const WaypointPathRunnableBase
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const WaypointBase
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const GPoint
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { LayerDistanceUtil } from '../../../../../org/allbinary/math/LayerDistanceUtil.js';
//not GWT import const GeographicMapCellPosition
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
import { PathFindingThreadPool } from '../../../../../org/allbinary/thread/PathFindingThreadPool.js';
//not GWT import const ThreadPool
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UnitWaypointBehavior } from './UnitWaypointBehavior.js';
//not GWT import - same folder const UnitWaypointBehavior
import { UnitWaypointStrings } from './UnitWaypointStrings.js';
//not GWT import - same folder const UnitLayer
//import { BuildingSteeringVisitor } from './BuildingSteeringVisitor.js';
//not GWT import - same folder const BuildingSteeringVisitor
export class UnitWaypointBehavior2 extends UnitWaypointBehavior {
    constructor(ownerAdvancedRTSGameLayer, fakeWaypoint) {
        super(ownerAdvancedRTSGameLayer, fakeWaypoint);
        this.logUtil = LogUtil.getInstance();
        this.unitWaypointStrings = UnitWaypointStrings.getInstance();
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.layerDistanceUtil = LayerDistanceUtil.getInstance();
        this.pathFindingThreadPool = PathFindingThreadPool.getInstance();
        this.sensorRange = 0;
        this.closeRange = 0;
        this.nextUnvisitedPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.afterNextUnvisitedPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.waitingOnTargetPath = false;
        this.waitingOnWaypointPath = false;
        this.targetWithoutCachedPathLayerInterface = CollidableDestroyableDamageableLayer.getNullInstance();
        //inner= member=true isStatic=
        this.BuildingSteeringVisitor = class extends SteeringVisitor {
            constructor() {
                /*Static stuff is not allowed for TypeScript inner classes*/ /**/
                super(...arguments);
                this.positionList = new BasicArrayListD();
            }
            visit(anyType = {}) {
                var logUtil = LogUtil.getInstance();
                ;
                try {
                    if (this.getList().size() > 0) {
                        var allbinaryLayer = this.getList().get(0);
                        ;
                        var cellPosition = this.getPositionList().get(0);
                        ;
                        var clear = UnitWaypointBehavior2.prototype.buildingChase(allbinaryLayer, cellPosition);
                        ;
                        if (clear) {
                            this.getList().clear();
                            this.positionList.clear();
                            //if statement needs to be on the same line and ternary does not work the same way.
                            return NullUtil.getInstance().NULL_OBJECT;
                        }
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanFactory.getInstance().FALSE;
                    }
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return NullUtil.getInstance().NULL_OBJECT;
                    //: 
                }
                catch (e) {
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.put(commonStrings.EXCEPTION, this, "visit", e);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return NullUtil.getInstance().NULL_OBJECT;
                }
            }
            getPositionList() {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.positionList;
            }
        };
        this.buildingSteeringVisitor = new this.BuildingSteeringVisitor();
        //For kotlin this is before the body of the constructor.
        this.progressTimeDelayHelper = new TimeDelayHelper(5000);
        this.wanderPathsList = new BasicArrayListD();
        var features = Features.getInstance();
        ;
        this.waypointPathRunnable = J2MEUtil.isHTML()
            ?
                new MultipassWaypointPathRunnable()
            :
                new WaypointPathRunnable();
        ;
    }
    initRange(weaponRange) {
        super.initRange(weaponRange);
        this.closeRange = weaponRange;
        this.sensorRange = weaponRange * 4;
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.initRange(this.associatedAdvancedRTSGameLayer, this.closeRange, this.sensorRange);
    }
    getNextUnvisitedPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nextUnvisitedPathGeographicMapCellPosition;
    }
    isRunning() {
        if (this.waypointPathRunnable.isRunning()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        if (this.waypointPathRunnable.isRunning()) {
            if (this.waypointPathsListP != UnitWaypointBehavior2.runningWaypointPathList) {
                this.waypointPathRunnable.setRunning(false);
                if (this.waitingOnTargetPath) {
                    this.setTargetPath();
                }
                else if (this.waitingOnWaypointPath) {
                    this.setWaypointPath(this.waypointPathRunnable.getTargetLayer());
                }
                else {
                    throw new Exception("Should not happen");
                }
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
        }
        this.processTargetList();
        if (!this.waypointPathRunnable.isRunning()) {
            this.processWaypoint();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        if (!this.waypointPathRunnable.isRunning()) {
            this.processTargeting();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        if (!this.waypointPathRunnable.isRunning()) {
            this.teleportIfNoProgress();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
    }
    //@Throws(Exception.constructor)
    onEnemyMovement(layerInterface) {
        var anotherTargetDistance = this.layerDistanceUtil.getDistance(this.associatedAdvancedRTSGameLayer, layerInterface);
        ;
        if (layerInterface == this.currentTargetLayerInterfaceP) {
            this.setCurrentTargetDistance(anotherTargetDistance);
        }
        else {
            this.processPossibleTarget(layerInterface, anotherTargetDistance);
        }
    }
    //@Throws(Exception.constructor)
    processPossibleTarget(layerInterface, anotherTargetDistance) {
        var isShorterThanCurrentTargetDistance = this.getCurrentTargetDistance() > anotherTargetDistance;
        ;
        var isCurrentTargetDestroyed = this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance() && this.currentTargetLayerInterfaceP.isDestroyed();
        ;
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processPossibleTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance, isShorterThanCurrentTargetDistance, isCurrentTargetDestroyed);
        if (this.isWaypointListEmptyOrOnlyTargets() && this.isInSensorRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed)) {
            this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processSetTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance);
            this.setTarget(layerInterface, anotherTargetDistance);
        }
        else if (this.isCloseRange(layerInterface, anotherTargetDistance) && (isShorterThanCurrentTargetDistance || isCurrentTargetDestroyed)) {
            this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processPossibleTargetCloser(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance);
            this.setTarget(layerInterface, anotherTargetDistance);
        }
    }
    //@Throws(Exception.constructor)
    teleportIfNoProgress() {
        if (this.isTrackingWaypoint() || this.associatedAdvancedRTSGameLayer.getParentLayer().isDestroyed()) {
            if (this.progressTimeDelayHelper.isTimeTNT() && this.nextUnvisitedPathGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
                this.associatedAdvancedRTSGameLayer.teleportTo(this.nextUnvisitedPathGeographicMapCellPosition);
            }
            if (this.getCompleteTimeDelayHelper().isTimeTNT()) {
                var geographicMapCellPosition = this.currentGeographicMapCellHistoryP.getTracked().get(this.currentGeographicMapCellHistoryP.getSize() - 1);
                ;
                this.associatedAdvancedRTSGameLayer.teleportTo(geographicMapCellPosition);
            }
        }
    }
    //@Throws(Exception.constructor)
    setTarget(layerInterface, anotherTargetDistance) {
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.setTarget(this.associatedAdvancedRTSGameLayer, this, layerInterface, anotherTargetDistance);
        this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.TARGET, BasicColorFactory.getInstance().GREEN);
        this.associatedAdvancedRTSGameLayer.setLoad(0);
        this.setCurrentTargetDistance(anotherTargetDistance);
        this.setCurrentTargetLayerInterface(layerInterface);
        this.setTrackingWaypoint(false);
        this.targetList.clear();
        if (!this.isCloseRange(layerInterface, anotherTargetDistance) && this.canInsertWaypoint(0, this.currentTargetLayerInterfaceP)) {
            var geographicMapCellPosition = this.associatedAdvancedRTSGameLayer.getCurrentGeographicMapCellPosition();
            ;
            var pathFindingLayerInterface = this.currentTargetLayerInterfaceP;
            ;
            var waypoint = pathFindingLayerInterface.getWaypointBehavior().getWaypoint();
            ;
            var list = waypoint.getPathsListFromCacheOnly(geographicMapCellPosition);
            ;
            this.setWaypointPathsList(list);
            if (this.waypointPathsListP ==
                null) {
                this.targetWithoutCachedPathLayerInterface = this.currentTargetLayerInterfaceP;
            }
            else if (this.waypointPathsListP.size() != 0) {
                this.setTargetPath();
            }
        }
    }
    //@Throws(Exception.constructor)
    setTargetPath() {
        if (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance()) {
            if (this.currentTargetLayerInterfaceP.isDestroyed()) {
                this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.setTargetPath(this.associatedAdvancedRTSGameLayer);
                this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.KILL, this.basicColorFactory.ORANGE);
                this.clearTarget();
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if (this.currentTargetLayerInterfaceP == this.waypointPathRunnable.getTargetLayer()) {
                this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.setTargetPathIgnoreNewPath(this.associatedAdvancedRTSGameLayer, this);
                this.insertWaypoint(0, this.currentTargetLayerInterfaceP);
                this.setRandomGeographicMapCellHistory(this.waypointPathsListP);
            }
        }
    }
    //@Throws(Exception.constructor)
    setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList) {
        this.setCurrentPathGeographicMapCellPosition(SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION);
        this.nextUnvisitedPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        super.setGeographicMapCellHistoryPath(geographicMapCellPositionBasicArrayList);
    }
    //@Throws(Exception.constructor)
    processWaypoint() {
        var size = this.targetList.size();
        ;
        if (size > 0) {
            var targetLayer = this.targetList.get(0);
            ;
            this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processWaypoint(this.associatedAdvancedRTSGameLayer, this, targetLayer, size);
            if (targetLayer.isDestroyed()) {
                this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.WAYPOINT_DESTROYED_SHORT, this.basicColorFactory.YELLOW);
                this.removeWaypoint(targetLayer, this.unitWaypointStrings.WAYPOINT_DESTROYED);
            }
            else {
                var geographicMapCellPosition = this.associatedAdvancedRTSGameLayer.getCurrentGeographicMapCellPosition();
                ;
                if (this.isTrackingWaypoint()) {
                    this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processWaypointTracked(this.associatedAdvancedRTSGameLayer, this);
                    if (this.visitIfAtMidPoint(geographicMapCellPosition)) {
                        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processWaypointTrackedVisit(this.associatedAdvancedRTSGameLayer, geographicMapCellPosition);
                    }
                    if (this.currentGeographicMapCellHistoryP.isAllVisited2() && this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance()) {
                        var oldWaypointLayer = this.currentTargetLayerInterfaceP;
                        ;
                        oldWaypointLayer.getWaypointBehavior().getWaypoint().visit(this.associatedAdvancedRTSGameLayer);
                        this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.ALL_VISITED_SHORT, this.basicColorFactory.GREEN);
                        this.removeWaypoint(this.currentTargetLayerInterfaceP, this.unitWaypointStrings.ALL_VISITED);
                    }
                }
                else if (this.currentTargetLayerInterfaceP ==
                    null
                    || this.waypointOverridesAttacking) {
                    var list = targetLayer.getWaypointBehavior().getWaypoint().getPathsListFromCacheOnly(geographicMapCellPosition);
                    ;
                    this.setWaypointPathsList(list);
                    if (this.waypointPathsListP ==
                        null) {
                        this.waitingOnWaypointPath = true;
                        this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.THINKING, this.basicColorFactory.GREEN);
                        this.runWaypointPathTask(targetLayer);
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return;
                    }
                    this.setWaypointPath(targetLayer);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    wander() {
        if (this.currentGeographicMapCellHistoryP.isAllVisited2()) {
            this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.wander(this.associatedAdvancedRTSGameLayer);
            this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.WANDERING, this.basicColorFactory.RED);
            this.wanderPathsList.clear();
            this.wanderPathsList.add(this.associatedAdvancedRTSGameLayer.getSurroundingGeographicMapCellPositionList());
            this.setRandomGeographicMapCellHistory(this.wanderPathsList);
        }
        this.visitIfAtMidPoint(this.getCurrentPathGeographicMapCellPosition());
        this.updateCurrentPathGeographicMapCellPosition();
        this.associatedAdvancedRTSGameLayer.trackTo(this.unitWaypointStrings.NEXT_PATH_NODE);
    }
    visitIfAtMidPoint(geographicMapCellPosition) {
        var unitLayer = this.associatedAdvancedRTSGameLayer;
        ;
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION && this.nextUnvisitedPathGeographicMapCellPosition == geographicMapCellPosition) {
            var point = geographicMapCellPosition.getMidPoint();
            ;
            var afterNextPoint = this.afterNextUnvisitedPathGeographicMapCellPosition.getMidPoint();
            ;
            var beyondMidPoint = true;
            ;
            if (geographicMapCellPosition.getColumn() == this.afterNextUnvisitedPathGeographicMapCellPosition.getColumn()) {
            }
            else if (point.getX() < afterNextPoint.getX()) {
                if (unitLayer.getXP() + unitLayer.getHalfWidth() < point.getX()) {
                    beyondMidPoint = false;
                }
            }
            else {
                if (unitLayer.getXP() + unitLayer.getHalfWidth() > point.getX()) {
                    beyondMidPoint = false;
                }
            }
            if (geographicMapCellPosition.getRow() == this.afterNextUnvisitedPathGeographicMapCellPosition.getRow()) {
            }
            else if (point.getY() < afterNextPoint.getY()) {
                if (unitLayer.getYP() + unitLayer.getHalfHeight() < point.getY()) {
                    beyondMidPoint = false;
                }
            }
            else {
                if (unitLayer.getYP() + unitLayer.getHalfHeight() > point.getY()) {
                    beyondMidPoint = false;
                }
            }
            if (beyondMidPoint) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.currentGeographicMapCellHistoryP.visit(geographicMapCellPosition);
                ;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    processTargetList() {
        this.targetWithoutCachedPathLayerInterface = CollidableDestroyableDamageableLayer.getNullInstance();
        for (var index = this.getPossibleTargetList().size() - 1; index >= 0; index--) {
            var layerInterface = this.getPossibleTargetList().get(index);
            ;
            if (layerInterface.isDestroyed()) {
                this.getPossibleTargetList().remove(layerInterface);
            }
            else {
                this.onEnemyMovement(layerInterface);
            }
        }
        if (this.targetWithoutCachedPathLayerInterface != CollidableDestroyableDamageableLayer.getNullInstance()) {
            this.waitingOnTargetPath = true;
            this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.THINKING_ABOUT_TARGET, this.basicColorFactory.GREEN);
            this.runWaypointPathTask(this.currentTargetLayerInterfaceP);
        }
        this.getPossibleTargetList().clear();
    }
    //@Throws(Exception.constructor)
    processTargeting() {
        if (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance() && (this.isInSensorRange(this.currentTargetLayerInterfaceP, this.getCurrentTargetDistance()) || this.isTrackingWaypoint())) {
            if (this.currentTargetLayerInterfaceP.isDestroyed()) {
                this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.targetDestroyed(this.associatedAdvancedRTSGameLayer);
                this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.KILL, this.basicColorFactory.ORANGE);
                this.clearTarget();
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            var dx = 0;
            ;
            var dy = 0;
            ;
            if (this.isTrackingWaypoint()) {
                this.updateCurrentPathGeographicMapCellPosition();
                var point = this.nextUnvisitedPathGeographicMapCellPosition.getMidPoint();
                ;
                dx = this.associatedAdvancedRTSGameLayer.getXP() + this.associatedAdvancedRTSGameLayer.getHalfWidth() - point.getX();
                dy = this.associatedAdvancedRTSGameLayer.getYP() + this.associatedAdvancedRTSGameLayer.getHalfHeight() - point.getY();
                this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processTargeting(this.associatedAdvancedRTSGameLayer, dx, dy);
            }
            else {
                this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.processTargetingNonWayPoint(this.associatedAdvancedRTSGameLayer, dx, dy);
                dx = (this.associatedAdvancedRTSGameLayer.getXP() + this.associatedAdvancedRTSGameLayer.getHalfWidth()) - (this.currentTargetLayerInterfaceP.getXP() + this.currentTargetLayerInterfaceP.getHalfWidth());
                dy = (this.associatedAdvancedRTSGameLayer.getYP() + this.associatedAdvancedRTSGameLayer.getHalfHeight()) - (this.currentTargetLayerInterfaceP.getYP() + this.currentTargetLayerInterfaceP.getHalfHeight());
            }
            this.associatedAdvancedRTSGameLayer.trackToDXY(dx, dy);
        }
        else {
            if (this.associatedAdvancedRTSGameLayer.getParentLayer().isDestroyed()) {
                this.wander();
            }
            else {
                if (this.associatedAdvancedRTSGameLayer.showMoreCaptionStates) {
                    this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.STOP, this.basicColorFactory.YELLOW);
                }
                this.associatedAdvancedRTSGameLayer.allStop();
            }
        }
    }
    updateCurrentPathGeographicMapCellPosition() {
        this.setLastPathGeographicMapCellPosition(this.getCurrentPathGeographicMapCellPosition());
        this.setCurrentPathGeographicMapCellPosition(this.nextUnvisitedPathGeographicMapCellPosition);
        this.nextUnvisitedPathGeographicMapCellPosition = this.currentGeographicMapCellHistoryP.getFirstUnvisited();
        this.afterNextUnvisitedPathGeographicMapCellPosition = this.currentGeographicMapCellHistoryP.getAfterIfNotLast(this.nextUnvisitedPathGeographicMapCellPosition);
        if (this.getCurrentPathGeographicMapCellPosition() != this.nextUnvisitedPathGeographicMapCellPosition) {
            this.progressTimeDelayHelper.setStartTimeTNT();
        }
    }
    //@Throws(Exception.constructor)
    setWaypointPath(waypointLayer) {
        if (this.waypointPathsListP.size() != 0) {
            this.setCurrentTargetLayerInterface(waypointLayer);
            var MAX = Integer.MAX_VALUE;
            ;
            this.setCurrentTargetDistance(MAX);
            this.setRandomGeographicMapCellHistory(this.waypointPathsListP);
        }
        else {
            waypointLayer.getWaypointBehavior().getWaypoint().visit(this.associatedAdvancedRTSGameLayer);
            this.associatedAdvancedRTSGameLayer.getCaptionAnimationHelper().update(this.unitWaypointStrings.ALREADY_THERE_SHORT, this.basicColorFactory.YELLOW);
            this.removeWaypoint(waypointLayer, this.unitWaypointStrings.ALREADY_THERE);
        }
    }
    //@Throws(Exception.constructor)
    runWaypointPathTask(waypointLayer) {
        this.setWaypointPathsList(UnitWaypointBehavior2.runningWaypointPathList);
        if (this.waypointPathRunnable.isRunning()) {
            throw new Exception("Should never be running here");
        }
        this.waypointPathRunnable.setRunning(true);
        this.waypointPathRunnable.setUnitLayer(this.associatedAdvancedRTSGameLayer);
        this.waypointPathRunnable.setTargetLayer(waypointLayer);
        this.pathFindingThreadPool.runTask(this.waypointPathRunnable);
    }
    //@Throws(Exception.constructor)
    removeWaypoint(waypointLayer, reason) {
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.removeWaypoint(this.associatedAdvancedRTSGameLayer, this, waypointLayer, reason);
        this.targetList.remove(waypointLayer);
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.removeWaypointList(this.associatedAdvancedRTSGameLayer, this, this.targetList);
        if (this.currentTargetLayerInterfaceP == waypointLayer) {
            this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.removeWaypointClear(this.associatedAdvancedRTSGameLayer);
            this.clearTarget();
        }
    }
    //@Throws(Exception.constructor)
    clearTarget() {
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.clearTarget(this.associatedAdvancedRTSGameLayer);
        this.setCurrentTargetLayerInterface(CollidableDestroyableDamageableLayer.getNullInstance());
        this.setTrackingWaypoint(false);
        var MAX = Integer.MAX_VALUE;
        ;
        this.setCurrentTargetDistance(MAX);
        TrackingEventHandler.getInstance().fireEvent(this.associatedAdvancedRTSGameLayer.getTrackingEvent());
    }
    isWaypointListEmptyOrOnlyTargets() {
        var list = this.targetList;
        ;
        if (list.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        for (var index = list.size() - 1; index >= 0; index--) {
            var layerInterface = list.get(index);
            ;
            if (layerInterface.isWaypointListEmptyOrOnlyTargets()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    isCloseRange(layerInterface, targetDistance) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return targetDistance < this.closeRange + layerInterface.getHalfHeight();
    }
    isInSensorRange(layerInterface, targetDistance) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return targetDistance < this.sensorRange + layerInterface.getHalfHeight();
    }
    getCurrentTargetingStateString() {
        var stringBuffer = new StringMaker();
        ;
        if (this.currentTargetLayerInterfaceP != CollidableDestroyableDamageableLayer.getNullInstance()) {
            stringBuffer.append(UnitWaypointBehavior2.TARGET_LAYER);
            stringBuffer.append(this.commonSeps.SPACE);
            stringBuffer.append(this.currentTargetLayerInterfaceP.getName());
            stringBuffer.append(" with ");
            stringBuffer.append(UnitWaypointBehavior2.TARGET_DISTANCE);
            stringBuffer.append(this.commonSeps.SPACE);
            stringBuffer.appendint(this.getCurrentTargetDistance());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    //@Throws(Exception.constructor)
    addWaypointFromUser(advancedRTSGameLayer) {
        if (advancedRTSGameLayer.isDestroyed()) {
            throw new Exception("Trying to add a dead: " + advancedRTSGameLayer);
        }
        this.associatedAdvancedRTSGameLayer.waypoint2LogHelperP.addWaypointFromUser(this.associatedAdvancedRTSGameLayer, advancedRTSGameLayer);
        this.targetList.clear();
        this.targetList.add(advancedRTSGameLayer);
        this.clearTarget();
    }
    //@Throws(Exception.constructor)
    addBuildingChase(allbinaryLayer, cellPosition) {
        if (!this.buildingSteeringVisitor.getList().contains(allbinaryLayer)) {
            this.buildingSteeringVisitor.getList().add(allbinaryLayer);
            this.buildingSteeringVisitor.getPositionList().add(cellPosition);
        }
        if (!this.getSteeringVisitorList().contains(this.buildingSteeringVisitor)) {
            this.getSteeringVisitorList().add(this.buildingSteeringVisitor);
        }
    }
    //@Throws(Exception.constructor)
    buildingChase(allbinaryLayer, cellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.associatedAdvancedRTSGameLayer.buildingChase(allbinaryLayer, cellPosition);
        ;
    }
}
UnitWaypointBehavior2.runningWaypointPathList = new BasicArrayListD();
UnitWaypointBehavior2.TARGET_DISTANCE = "Target Distance";
UnitWaypointBehavior2.TARGET_LAYER = "Target Layer";
