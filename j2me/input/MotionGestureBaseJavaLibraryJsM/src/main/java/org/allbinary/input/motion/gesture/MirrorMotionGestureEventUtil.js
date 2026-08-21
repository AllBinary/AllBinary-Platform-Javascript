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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { Integer } from '../../../../../java/lang/Integer.js';
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
import { MotionEventCircularPool } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionEventCircularPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MirrorMotionGestureEventUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MirrorMotionGestureEventUtil.instance;
    }
    constructor() {
        super();
        this.motionEventCircularPool = MotionEventCircularPool.createPool(Integer.MAX_VALUE);
    }
    //@Throws(Exception.constructor)
    mirrorVerticle(motionGestureEvent, halfWidth) {
        var event = this.motionEventCircularPool.getInstance(motionGestureEvent.getMotionGesture());
        ;
        var previousNewX = this.getNewX(motionGestureEvent.getPreviousPoint().getX(), halfWidth);
        ;
        var currentNewX = this.getNewX(motionGestureEvent.getCurrentPoint().getX(), halfWidth);
        ;
        var pointFactory = PointFactory.getInstance();
        ;
        var mirroredPreviousPoint = pointFactory.createXY(previousNewX, motionGestureEvent.getPreviousPoint().getY());
        ;
        var mirroredCurrentPoint = pointFactory.createXY(currentNewX, motionGestureEvent.getCurrentPoint().getY());
        ;
        event.setPreviousPoint(mirroredPreviousPoint);
        event.setCurrentPoint(mirroredCurrentPoint);
        //if statement needs to be on the same line and ternary does not work the same way.
        return event;
    }
    getNewX(x, halfWidth) {
        var newX = 0;
        ;
        if (x > halfWidth) {
            newX = halfWidth - (x - halfWidth);
        }
        else {
            newX = halfWidth + (halfWidth - x);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return newX;
    }
}
MirrorMotionGestureEventUtil.instance = new MirrorMotionGestureEventUtil();
