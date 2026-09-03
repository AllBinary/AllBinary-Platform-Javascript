/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2009 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { MotionEvent } from '../../../../../../android/view/MotionEvent.js';
//not GWT import const MotionEvent = globalThis.android.view.MotionEvent;
import { BaseGameInputMotionEventProcessor } from '../../../../../../org/allbinary/android/input/motion/BaseGameInputMotionEventProcessor.js';
//not GWT import const BaseGameInputMotionEventProcessor = globalThis.org.allbinary.android.input.motion.BaseGameInputMotionEventProcessor;
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const ScalableListener = globalThis.org.allbinary.graphics.displayable.ScalableListener;
import { AllMotionRecognizer } from '../../../../../../org/allbinary/input/motion/AllMotionRecognizer.js';
//not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;
//not plain js import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameInputMotionInfoAPI5 } from './GameInputMotionInfoAPI5.js';
//not GWT import const GameInputMotionInfoAPI5 = globalThis.org.allbinary.android.input.motion.api5.GameInputMotionInfoAPI5;
export class GameInputMotionEventProcessorAPI5 extends BaseGameInputMotionEventProcessor {
    static getInstance() {
        if (GameInputMotionEventProcessorAPI5.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameInputMotionEventProcessorAPI5.instance = new GameInputMotionEventProcessorAPI5();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInputMotionEventProcessorAPI5.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        var size = GameInputMotionInfoAPI5.getInstance().MAX_POINTERS;
        ;
        this.motionRecognizerArray = new Array(size);
        this.TOTAL_MINUS_ONE = size;
        for (var index = 0; index < size; index++) {
            this.motionRecognizerArray[index] = new AllMotionRecognizer();
        }
    }
    isValid(pointerId) {
        if (pointerId > this.TOTAL_MINUS_ONE) {
            var message = "Log that the pointer Ids are not what would be expected or Android has more than what I set my stuff to support pointerId: ";
            ;
            ForcedLogUtil.log(message + pointerId, this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    process(motionEvent) {
        try {
            var action = motionEvent.getAction();
            ;
            var total = this.motionRecognizerArray.length;
            ;
            if (total > motionEvent.getPointerCount()) {
                total = motionEvent.getPointerCount();
            }
            else {
                var message = "Log that Android has more pointers than I have expected so increase it motionEvent.getPointerCount(): ";
                ;
                ForcedLogUtil.log(message + motionEvent.getPointerCount(), this);
            }
            var totalMinusOne = total - 1;
            ;
            if (action == MotionEvent.ACTION_DOWN) {
                for (var pointerIndex = totalMinusOne; pointerIndex >= 0; pointerIndex--) {
                    var pointerId = motionEvent.getPointerId(pointerIndex);
                    ;
                    if (this.isValid(pointerId)) {
                        var scalableListener = this.displayInfo.getScalableListener();
                        ;
                        var x = Math.round(((motionEvent.getX(pointerIndex) - this.displayInfo.getLeft()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        var y = Math.round(((motionEvent.getY(pointerIndex) - this.displayInfo.getTop()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        this.motionRecognizerArray[pointerId].processStartMotionEvent(x, y, motionEvent.getDeviceId(), 0);
                    }
                }
            }
            else if (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL) {
                for (var pointerIndex = totalMinusOne; pointerIndex >= 0; pointerIndex--) {
                    var pointerId = motionEvent.getPointerId(pointerIndex);
                    ;
                    if (this.isValid(pointerId)) {
                        var scalableListener = this.displayInfo.getScalableListener();
                        ;
                        var x = Math.round(((motionEvent.getX(pointerIndex) - this.displayInfo.getLeft()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        var y = Math.round(((motionEvent.getY(pointerIndex) - this.displayInfo.getTop()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        this.motionRecognizerArray[pointerId].processEndMotionEvent(x, y, motionEvent.getDeviceId(), 0);
                    }
                }
            }
            else if (action == MotionEvent.ACTION_MOVE) {
                for (var pointerIndex = totalMinusOne; pointerIndex >= 0; pointerIndex--) {
                    var pointerId = motionEvent.getPointerId(pointerIndex);
                    ;
                    if (this.isValid(pointerId)) {
                        var scalableListener = this.displayInfo.getScalableListener();
                        ;
                        var x = Math.round(((motionEvent.getX(pointerIndex) - this.displayInfo.getLeft()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        var y = Math.round(((motionEvent.getY(pointerIndex) - this.displayInfo.getTop()) / scalableListener.getRatio(this.displayInfo.getRatio())));
                        ;
                        this.motionRecognizerArray[pointerId].processDraggedMotionEvent(x, y, motionEvent.getDeviceId(), 0);
                    }
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
}
GameInputMotionEventProcessorAPI5.instance = NullUtil.getInstance().NULL_OBJECT;
