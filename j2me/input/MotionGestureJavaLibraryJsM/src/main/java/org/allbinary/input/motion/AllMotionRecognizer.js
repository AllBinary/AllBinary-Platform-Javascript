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
//not GWT import const CustomGPoint
import { GPointCircularPool } from '../../../../org/allbinary/graphics/GPointCircularPool.js';
//not GWT import const GPointCircularPool
import { TouchButtonRecognizer } from '../../../../org/allbinary/input/motion/button/TouchButtonRecognizer.js';
//not GWT import const TouchButtonRecognizer
import { MotionGestureRecognizer } from '../../../../org/allbinary/input/motion/gesture/MotionGestureRecognizer.js';
//not GWT import const MotionGestureRecognizer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionRecognizer } from './MotionRecognizer.js';
//not GWT import - same folder const MotionRecognizer
export class AllMotionRecognizer extends MotionRecognizer {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.touchButtonProcessing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.id = AllMotionRecognizer.index++;
        this.motionGestureRecognizer = new MotionGestureRecognizer(this.id);
        this.touchButtonRecognizer = new TouchButtonRecognizer();
    }
    //@Throws(Exception.constructor)
    processStartMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonRecognizer.pressTouchButtonInput(x, y, deviceId)) {
            this.touchButtonProcessing = true;
        }
        if (!this.touchButtonProcessing) {
            var point = AllMotionRecognizer.pointCircularPool.getNextInstance();
            ;
            point.setX(x);
            point.setY(y);
            this.motionGestureRecognizer.processPressedMotionEvent(point, deviceId, modifiers);
        }
    }
    //@Throws(Exception.constructor)
    processEndMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonRecognizer.releaseTouchButtonInput(x, y, deviceId)) {
        }
        if (!this.touchButtonProcessing) {
            var point = AllMotionRecognizer.pointCircularPool.getNextInstance();
            ;
            point.setX(x);
            point.setY(y);
            this.motionGestureRecognizer.processReleasedMotionEvent(point, deviceId, modifiers);
        }
        if (this.touchButtonProcessing) {
            this.touchButtonProcessing = false;
        }
    }
    //@Throws(Exception.constructor)
    processDraggedMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonProcessing) {
            this.touchButtonRecognizer.pressTouchButtonInput(x, y, deviceId);
        }
        if (!this.touchButtonProcessing) {
            var point = AllMotionRecognizer.pointCircularPool.getNextInstance();
            ;
            point.setX(x);
            point.setY(y);
            this.motionGestureRecognizer.processDraggedMotionEvent(point, deviceId, modifiers);
        }
    }
    //@Throws(Exception.constructor)
    processMovedMotionEvent(x, y, deviceId, modifiers) {
        if (x != this.lastX || y != this.lastY) {
            this.lastX = x;
            this.lastY = y;
            var point = AllMotionRecognizer.pointCircularPool.getNextInstance();
            ;
            point.setX(x);
            point.setY(y);
            this.motionGestureRecognizer.processMovedMotionEvent(point, deviceId, modifiers);
        }
    }
    //@Throws(Exception.constructor)
    processScrolledMotionEvent(x, y, deviceId, modifiers) {
        var point = AllMotionRecognizer.pointCircularPool.getNextInstance();
        ;
        point.setX(x);
        point.setY(y);
        this.motionGestureRecognizer.processScrolledMotionEvent(point, deviceId, modifiers);
    }
    getMotionGestureRecognizer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.motionGestureRecognizer;
    }
}
AllMotionRecognizer.index = 0;
AllMotionRecognizer.pointCircularPool = new GPointCircularPool(40);
