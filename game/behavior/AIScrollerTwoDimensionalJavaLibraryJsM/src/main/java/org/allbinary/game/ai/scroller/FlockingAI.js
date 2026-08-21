/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
import { GroupLayerManagerListener } from '../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
import { WeaponLayer } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
import { MathUtil } from '../../../../../org/allbinary/logic/math/MathUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePatrolAI } from './BasePatrolAI.js';
export class FlockingAI extends BasicAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
        var allowedDistance = hashtable.get(BasePatrolAI.MAX_DISTANCE);
        ;
        this.allowedDistance = allowedDistance.intValue();
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var maxDistance = 0;
        ;
        var farAllbinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        ;
        var groupLayerManagerListener = GroupLayerManagerListener.getInstance();
        ;
        var list = groupLayerManagerListener.getList(BasicGroupFactory.getInstance().ENEMY);
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var allBinaryLayer = list.get(index);
            ;
            if (allBinaryLayer.getType() != WeaponLayer.getStaticType()) {
                var distance = this.getXYDistance(allBinaryLayer);
                ;
                if (distance > maxDistance) {
                    maxDistance = distance;
                    farAllbinaryLayer = allBinaryLayer;
                    if (distance > this.allowedDistance) {
                        break;
                    }
                }
            }
        }
        if (maxDistance > this.allowedDistance) {
            if (farAllbinaryLayer != AllBinaryLayer.NULL_ALLBINARY_LAYER) {
                var ownerLayerInterface = this.getOwnerLayerInterface();
                ;
                if (farAllbinaryLayer.getXP() < ownerLayerInterface.getXP()) {
                    this.processKeyAI(Canvas.LEFT);
                }
                else if (farAllbinaryLayer.getXP() > ownerLayerInterface.getXP()) {
                    this.processKeyAI(Canvas.RIGHT);
                }
                else if (farAllbinaryLayer.getYP() > ownerLayerInterface.getYP()) {
                    this.processKeyAI(Canvas.UP);
                }
                else if (farAllbinaryLayer.getYP() < ownerLayerInterface.getYP()) {
                    this.processKeyAI(Canvas.DOWN);
                }
            }
        }
    }
    getXYDistance(allBinaryLayer) {
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var xTotalDistance = (allBinaryLayer.getXP() + allBinaryLayer.getHalfWidth()) - (ownerLayerInterface.getXP() + ownerLayerInterface.getHalfWidth());
        ;
        var yTotalDistance = (allBinaryLayer.getYP() + allBinaryLayer.getHalfHeight()) - (ownerLayerInterface.getYP() + ownerLayerInterface.getHalfHeight());
        ;
        var mathUtil = MathUtil.getInstance();
        ;
        var totalDistance = mathUtil.abs(xTotalDistance) + mathUtil.abs(yTotalDistance);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return totalDistance;
    }
}
