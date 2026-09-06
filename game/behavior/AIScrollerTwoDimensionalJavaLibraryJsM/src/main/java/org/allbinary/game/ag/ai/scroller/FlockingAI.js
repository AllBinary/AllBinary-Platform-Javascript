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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;
import { BasicGroupFactory } from '../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;
import { GroupLayerManagerListener } from '../../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
//not GWT import const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;
import { WeaponLayer } from '../../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
//not GWT import const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePatrolAI } from './BasePatrolAI.js';
//not GWT import - same folder const BasePatrolAI = globalThis.org.allbinary.game.ag.ai.scroller.BasePatrolAI;
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
        var allBinaryLayer;
        ;
        var ownerLayerInterface;
        ;
        for (var index = 0; index < size; index++) {
            allBinaryLayer = list.get(index);
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
                ownerLayerInterface = this.getOwnerLayerInterface();
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
