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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const MotionGestureInput
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const TouchMotionGestureFactory
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AllBinaryEventObject
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const MotionGestureEvent
export class GameMotionGestureListener extends Object {
    constructor(signed) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.motionGestureCollection = new BasicArrayListD();
        this.touchGestureCollection = new BasicArrayListD();
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.signed = signed;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
    onUpMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onDownMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onLeftMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onRightMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onDiagonalDownRightMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onDiagonalDownLeftMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onDiagonalUpRightMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onDiagonalUpLeftMotionGestureEvent(ev) {
        this.onMotionGestureEvent(ev);
    }
    onPressedMotionGestureEvent(ev) {
        this.touchGestureCollection.add(ev.getMotionGesture());
    }
    released(ev) {
        try {
            this.touchGestureCollection.add(ev.getMotionGesture());
            this.signed.onMotionGestureCompleted(this.touchGestureCollection);
            this.touchGestureCollection.clear();
            //: 
        }
        catch (e) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.commonStrings.EXCEPTION_LABEL);
            stringBuffer.append(StringUtil.getInstance().toString(ev.getMotionGesture()));
            this.logUtil.put(stringBuffer.toString(), this, "release", e);
        }
    }
    onScrolledMotionGestureEvent(motionGestureEvent) {
    }
    onMotionGestureEvent(ev) {
        try {
            var motionGestureInput = ev.getMotionGesture();
            ;
            if (motionGestureInput == TouchMotionGestureFactory.getInstance().PRESSED) {
                this.onPressedMotionGestureEvent(ev);
            }
            else if (motionGestureInput == TouchMotionGestureFactory.getInstance().RELEASED) {
                this.released(ev);
            }
            else {
                this.motionGestureCollection.add(motionGestureInput);
                this.signed.onMotionGestureCompleted(this.motionGestureCollection);
                this.motionGestureCollection.clear();
                this.touchGestureCollection.clear();
            }
            //: 
        }
        catch (e) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.commonStrings.EXCEPTION_LABEL);
            stringBuffer.append(StringUtil.getInstance().toString(ev.getMotionGesture()));
            this.logUtil.put(stringBuffer.toString(), this, "onMotionGestureEvent", e);
        }
    }
}
