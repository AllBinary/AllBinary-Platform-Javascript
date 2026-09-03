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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasePatrolAI extends BasicAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.xTotalDistance = 0;
        this.lastKeyDirection = Canvas.RIGHT;
        this.keyDirection = Canvas.RIGHT;
        //For kotlin this is before the body of the constructor.
        this.maxDistance = hashtable.get(BasePatrolAI.MAX_DISTANCE);
        this.currentDistance = this.maxDistance.intValue();
    }
    update() {
        this.updateTotalDistance();
        this.changeDirectionIfReachedPacingAreaMax();
    }
    updateTotalDistance() {
        var velocityInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        var velocityProperties = velocityInterfaceCompositeInterface.getVelocityProperties();
        ;
        this.xTotalDistance += velocityProperties.getVelocityXBasicDecimalP().getScaled();
    }
    changeDirectionIfReachedPacingAreaMax() {
        var mathUtil = MathUtil.getInstance();
        ;
        var totalDistance = mathUtil.abs(this.xTotalDistance);
        ;
        if (totalDistance > this.currentDistance) {
            this.nextDirection();
        }
    }
    nextDirection() {
        if (this.lastKeyDirection == Canvas.LEFT) {
            this.keyDirection = Canvas.RIGHT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
        }
        else if (this.lastKeyDirection == Canvas.RIGHT) {
            this.keyDirection = Canvas.LEFT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
        }
    }
    disable() {
    }
}
BasePatrolAI.MAX_DISTANCE = SmallIntegerSingletonFactory.getInstance().getAt(2);
BasePatrolAI.DIRECTION_ARRAY = SmallIntegerSingletonFactory.getInstance().getAt(3);
BasePatrolAI.FIRING_DISTANCE = SmallIntegerSingletonFactory.getInstance().getAt(4);
BasePatrolAI.SPEED = SmallIntegerSingletonFactory.getInstance().getAt(5);
