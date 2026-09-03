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
import { Math } from '../../../../../java/lang/Math.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
import { Line } from '../../../../../org/allbinary/graphics/Line.js';
//not GWT import const Line = globalThis.org.allbinary.graphics.Line;
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//not GWT import const MotionGestureConfiguration = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration;
import { MotionGestureConfigurationFactory } from '../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
//not GWT import const MotionGestureConfigurationFactory = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory;
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;
import { MotionEventCircularPool } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionEventCircularPool.js';
//not GWT import const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;
import { MovedMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/MovedMotionGesturesHandler.js';
//not GWT import const MovedMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.MovedMotionGesturesHandler;
import { ScrolledMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/ScrolledMotionGesturesHandler.js';
//not GWT import const ScrolledMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.ScrolledMotionGesturesHandler;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { J2SEMath } from '../../../../../org/allbinary/logic/math/J2SEMath.js';
//not GWT import const J2SEMath = globalThis.org.allbinary.logic.math.J2SEMath;
import { BasicEventHandler } from '../../../../../org/allbinary/logic/util/event/handler/BasicEventHandler.js';
//not GWT import const BasicEventHandler = globalThis.org.allbinary.logic.util.event.handler.BasicEventHandler;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchMotionGestureFactory } from './TouchMotionGestureFactory.js';
//not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
export class MotionGestureRecognizer extends Object {
    constructor(id) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.j2seMath = J2SEMath.getInstance();
        this.origin = PointFactory.getInstance().ZERO_ZERO;
        this.previous = this.origin;
        this.intermediate = this.origin;
        this.line = new Line(this.origin, this.origin);
        this.motionEventCircularPool = MotionEventCircularPool.createPool(id);
        var motionGesturesHandler = new BasicEventHandler();
        ;
        var movedMotionGesturesHandler = motionGesturesHandler;
        ;
        var scrolledMotionGesturesHandler = motionGesturesHandler;
        ;
        try {
            motionGesturesHandler = BasicMotionGesturesHandler.getInstance();
            movedMotionGesturesHandler = MovedMotionGesturesHandler.getInstance();
            scrolledMotionGesturesHandler = ScrolledMotionGesturesHandler.getInstance();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
        this.motionGesturesHandler = motionGesturesHandler;
        this.movedMotionGesturesHandler = movedMotionGesturesHandler;
        this.scrolledMotionGesturesHandler = scrolledMotionGesturesHandler;
    }
    //@Throws(Exception.constructor)
    processPressedMotionEvent(current, deviceId, button) {
        this.intermediate = this.origin;
        this.previous = this.origin;
        var event = this.motionEventCircularPool.getInstance(TouchMotionGestureFactory.getInstance().PRESSED);
        ;
        event.setPreviousPoint(this.previous);
        event.setCurrentPoint(current);
        this.motionGesturesHandler.fireEvent(event);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    processReleasedMotionEvent(current, deviceId, button) {
        var event = this.motionEventCircularPool.getInstance(TouchMotionGestureFactory.getInstance().RELEASED);
        ;
        event.setPreviousPoint(this.previous);
        event.setCurrentPoint(current);
        this.motionGesturesHandler.fireEvent(event);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    processDraggedMotionEvent(current, deviceId, buttonMask) {
        if (this.previous == this.origin || this.intermediate == this.origin) {
            this.previous = current;
            this.intermediate = current;
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        this.line.setP1(this.previous);
        this.line.setP2(current);
        var minimumMotionGesture = MotionGestureConfigurationFactory.getInstance().getMinimumMotionGesture();
        ;
        if (this.j2seMath.abs(this.line.getDeltaX()) < minimumMotionGesture && this.j2seMath.abs(this.line.getDeltaY()) < minimumMotionGesture) {
            this.intermediate = current;
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var gradient = this.line.getGradient();
        ;
        var absGradient = this.j2seMath.abs(gradient);
        ;
        var conf = MotionGestureConfigurationFactory.getInstance();
        ;
        var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
        ;
        var newMotionGesture = touchMotionGestureFactory.NO_MOTION;
        ;
        var diagonalToleranceHigher = 12.0;
        ;
        var diagonalToleranceLower = 12.0;
        ;
        if (conf.isDiagonalMotionGestureAllowed()) {
            diagonalToleranceHigher = (90 - conf.getDiagonalTolerance());
            diagonalToleranceLower = conf.getDiagonalTolerance();
        }
        if (absGradient > Math.tan(Math.toRadians(diagonalToleranceHigher))) {
            if (this.line.getDeltaY() > 0) {
                newMotionGesture = touchMotionGestureFactory.UP;
            }
            else {
                newMotionGesture = touchMotionGestureFactory.DOWN;
            }
        }
        else {
            if (absGradient < Math.tan(Math.toRadians(diagonalToleranceLower))) {
                if (this.line.getDeltaX() > 0) {
                    newMotionGesture = touchMotionGestureFactory.LEFT;
                }
                else {
                    newMotionGesture = touchMotionGestureFactory.RIGHT;
                }
            }
            else {
                if (gradient > 0) {
                    if (this.line.getDeltaX() > 0) {
                        newMotionGesture = touchMotionGestureFactory.DIAGONAL_UP_LEFT;
                    }
                    else {
                        newMotionGesture = touchMotionGestureFactory.DIAGONAL_DOWN_RIGHT;
                    }
                }
                else {
                    if (this.line.getDeltaX() > 0) {
                        newMotionGesture = touchMotionGestureFactory.DIAGONAL_DOWN_LEFT;
                    }
                    else {
                        newMotionGesture = touchMotionGestureFactory.DIAGONAL_UP_RIGHT;
                    }
                }
            }
        }
        this.previous = current;
        this.intermediate = current;
        var event = this.motionEventCircularPool.getInstance(newMotionGesture);
        ;
        event.setPreviousPoint(this.previous);
        event.setCurrentPoint(current);
        this.motionGesturesHandler.fireEvent(event);
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    //@Throws(Exception.constructor)
    processMovedMotionEvent(current, deviceId, button) {
        var event = this.motionEventCircularPool.getInstance(TouchMotionGestureFactory.getInstance().NO_MOTION);
        ;
        event.setPreviousPoint(this.previous);
        event.setCurrentPoint(current);
        this.movedMotionGesturesHandler.fireEvent(event);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    processScrolledMotionEvent(current, deviceId, button) {
        var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
        ;
        var newMotionGesture = touchMotionGestureFactory.NO_MOTION;
        ;
        if (button > 0) {
            newMotionGesture = touchMotionGestureFactory.SCROLL_UP;
        }
        else if (button < 0) {
            newMotionGesture = touchMotionGestureFactory.SCROLL_DOWN;
        }
        var event = this.motionEventCircularPool.getInstance(newMotionGesture);
        ;
        event.setPreviousPoint(this.previous);
        event.setCurrentPoint(current);
        this.scrolledMotionGesturesHandler.fireEvent(event);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getMotionGesturesHandler() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.motionGesturesHandler;
    }
}
