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
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
export class ReleaseControlledMotionGestureListener extends Object {
    constructor(signed) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.currentMotionGesture = TouchMotionGestureFactory.getInstance().NO_MOTION;
        this.isMouseGestureOccurring = false;
        this.motionGestureCollection = new BasicArrayListD();
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
        this.isMouseGestureOccurring = true;
        this.currentMotionGesture = TouchMotionGestureFactory.getInstance().NO_MOTION;
        this.onMotionGestureEvent(ev);
    }
    onScrolledMotionGestureEvent(motionGestureEvent) {
    }
    released(ev) {
        try {
            if (this.isMouseGestureOccurring == false)
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            this.isMouseGestureOccurring = false;
            this.signed.onMotionGestureCompleted(this.motionGestureCollection);
            this.motionGestureCollection.clear();
            //: 
        }
        catch (e) {
            this.logUtil.put(new StringMaker().append(this.commonStrings.EXCEPTION_LABEL).append(StringUtil.getInstance().toString(ev.getMotionGesture())).toString(), this, "release", e);
        }
    }
    onMotionGestureEvent(ev) {
        if (this.isMouseGestureOccurring == false)
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        var motionGestureInput = ev.getMotionGesture();
        ;
        if (motionGestureInput == TouchMotionGestureFactory.getInstance().PRESSED) {
            this.onPressedMotionGestureEvent(ev);
        }
        else if (motionGestureInput == TouchMotionGestureFactory.getInstance().RELEASED) {
            this.released(ev);
        }
        else {
            if (this.currentMotionGesture != motionGestureInput) {
                this.currentMotionGesture = motionGestureInput;
                this.motionGestureCollection.add(ev.getMotionGesture());
            }
        }
    }
}
