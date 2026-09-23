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
import { Object } from '../../../../java/lang/Object.js';
import { Integer } from '../../../../java/lang/Integer.js';
//not GWT import const AllBinaryLayer
import { LayerDistanceUtil } from '../../../../org/allbinary/math/LayerDistanceUtil.js';
//not GWT import const RunnableInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullPathFindingLayer } from './NullPathFindingLayer.js';
//not GWT import - same folder const PathFindingLayerInterface
export class WaypointPathRunnableBase extends Object {
    constructor() {
        super(...arguments);
        this.layerDistanceUtil = LayerDistanceUtil.getInstance();
        this.pathFindingLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        this.targetPathFindingLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        this.priorityP = Integer.MAX_VALUE;
        this.runningP = false;
    }
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.runningP;
    }
    setRunning(isRunning) {
        this.runningP = isRunning;
    }
    //@Throws(Exception.constructor)
    setThread(thread) {
    }
    setTargetLayer(waypointLayer) {
        this.targetPathFindingLayer = waypointLayer;
        this.setPriority();
    }
    setPriority() {
        var pathFindingLayer = this.pathFindingLayer;
        ;
        var targetLayer = this.targetPathFindingLayer;
        ;
        if (targetLayer !=
            null) {
            var distance = this.layerDistanceUtil.getDistance(targetLayer, pathFindingLayer);
            ;
            var distanceCategory = distance / 70;
            ;
            this.priorityP = distanceCategory;
        }
    }
    getTargetLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.targetPathFindingLayer;
    }
    setUnitLayer(unitLayer) {
        this.pathFindingLayer = unitLayer;
    }
    getPriority() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.priorityP;
    }
    isDone() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    run() {
    }
    reset() {
    }
}
