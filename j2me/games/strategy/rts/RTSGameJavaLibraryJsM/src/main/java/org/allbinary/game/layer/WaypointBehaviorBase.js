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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const CollidableDestroyableDamageableLayer
import { WaypointBase } from '../../../../org/allbinary/game/layer/waypoint/WaypointBase.js';
//not GWT import const WaypointBase
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const GeographicMapCellPosition
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not GWT import - same folder const PathFindingLayerInterface
export class WaypointBehaviorBase extends Object {
    constructor() {
        super();
        this.waypointOverridesAttacking = true;
        this.waypoint = WaypointBase.NULL_WAYPOINT_BASE;
        this.steeringVisitorList = new BasicArrayListD();
        this.ownedWaypointList = new BasicArrayListS(1);
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
    }
    getOwnedWaypointList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ownedWaypointList;
    }
    getWaypoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypoint;
    }
    setWaypoint(waypoint) {
        this.waypoint = waypoint;
    }
    getSteeringVisitorList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.steeringVisitorList;
    }
    getMovementLogicAsString() {
        throw new RuntimeException();
    }
    isWaypointListEmptyOrOnlyTargets() {
        throw new RuntimeException();
    }
    isInSensorRange(layerInterface, targetDistance) {
        throw new RuntimeException();
    }
    getCurrentTargetLayerInterface() {
        throw new RuntimeException();
    }
    getCurrentTargetingStateString() {
        throw new RuntimeException();
    }
    isTrackingWaypoint() {
        throw new RuntimeException();
    }
    getCurrentPathGeographicMapCellPosition() {
        throw new RuntimeException();
    }
    getCurrentGeographicMapCellHistory() {
        throw new RuntimeException();
    }
    isWaypointOverridesAttacking() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointOverridesAttacking;
    }
    getNextUnvisitedPathGeographicMapCellPosition() {
        throw new RuntimeException();
    }
    needToMove() {
        throw new RuntimeException();
    }
    setWaypointPathsList(waypointPathsList) {
        throw new RuntimeException();
    }
    getWaypointPathsList() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    setTarget(layerInterface) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    setTargetWithDistance(layerInterface, anotherTargetDistance) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    clearTarget() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    updatePathOnTargetMove(reason) {
    }
}
