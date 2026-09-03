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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;
import { TsUtil } from '../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//not plain js import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MotionGestureEvent extends AllBinaryEventObject {
    constructor(source = {}, id, motionGesture) {
        super(source);
        this.motionGesture = TouchMotionGestureFactory.getInstance().NO_MOTION;
        this.previousPoint = PointFactory.getInstance().ZERO_ZERO;
        this.currentPoint = PointFactory.getInstance().ZERO_ZERO;
        //For kotlin this is before the body of the constructor.
        this.id = id;
        this.setMotionGesture(motionGesture);
    }
    getMotionGesture() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.motionGesture;
    }
    setMotionGesture(motionGesture) {
        this.motionGesture = motionGesture;
    }
    getPreviousPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.previousPoint;
    }
    setPreviousPoint(previousPoint) {
        this.previousPoint = previousPoint;
    }
    getCurrentPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentPoint;
    }
    setCurrentPoint(currentPoint) {
        this.currentPoint = currentPoint;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        stringBuffer.append(stringUtil.toString(this.motionGesture));
        stringBuffer.append(MotionGestureEvent.CURRENT);
        stringBuffer.append(stringUtil.toString(this.currentPoint));
        stringBuffer.append(MotionGestureEvent.PREVIOUS);
        stringBuffer.append(stringUtil.toString(this.previousPoint));
        stringBuffer.append(MotionGestureEvent.HASHCODE);
        stringBuffer.appendint(TsUtil.getInstance().hashCode(this));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
}
MotionGestureEvent.CURRENT = CommonLabels.getInstance().CURRENT;
MotionGestureEvent.PREVIOUS = " Previous: ";
MotionGestureEvent.HASHCODE = " hashcode: ";
