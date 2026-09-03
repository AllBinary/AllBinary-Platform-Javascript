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
//not GWT import const CustomGPoint = globalThis.org.allbinary.graphics.CustomGPoint;
//not plain js import { GPointCircularPool } from '../../../../org/allbinary/graphics/GPointCircularPool.js';
const GPointCircularPool = globalThis.org.allbinary.graphics.GPointCircularPool;
import { MotionGestureRecognizer } from '../../../../org/allbinary/input/motion/gesture/MotionGestureRecognizer.js';
//not GWT import const MotionGestureRecognizer = globalThis.org.allbinary.input.motion.gesture.MotionGestureRecognizer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionRecognizer } from './MotionRecognizer.js';
//not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;
export class GestureOnlyMotionRecognizer extends MotionRecognizer {
    constructor() {
        super();
        this.id = GestureOnlyMotionRecognizer.index++;
        this.motionGestureRecognizer = new MotionGestureRecognizer(this.id);
    }
    //@Throws(Exception.constructor)
    processStartMotionEvent(x, y, deviceId, modifiers) {
        var point = GestureOnlyMotionRecognizer.pointCircularPool.getNextInstance();
        ;
        point.setX(x);
        point.setY(y);
        this.motionGestureRecognizer.processPressedMotionEvent(point, deviceId, modifiers);
    }
    //@Throws(Exception.constructor)
    processEndMotionEvent(x, y, deviceId, modifiers) {
        var point = GestureOnlyMotionRecognizer.pointCircularPool.getNextInstance();
        ;
        point.setX(x);
        point.setY(y);
        this.motionGestureRecognizer.processReleasedMotionEvent(point, deviceId, modifiers);
    }
    //@Throws(Exception.constructor)
    processDraggedMotionEvent(x, y, deviceId, modifiers) {
        var point = GestureOnlyMotionRecognizer.pointCircularPool.getNextInstance();
        ;
        point.setX(x);
        point.setY(y);
        this.motionGestureRecognizer.processDraggedMotionEvent(point, deviceId, modifiers);
    }
}
GestureOnlyMotionRecognizer.index = 0;
GestureOnlyMotionRecognizer.pointCircularPool = new GPointCircularPool(40);
