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
//not GWT import const CompleteMotionGestureInputEvent
import { CompleteMotionGestureInputEventHandler } from '../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js';
//not GWT import const BasicColor
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
//not GWT import const MotionGestureInput
import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
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
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonsMappingPaintable } from './TouchButtonsMappingPaintable.js';
//not GWT import - same folder const TouchButtonsMappingPaintable
export class TouchButtonsPaintableComposite extends ProcessPaintable {
    constructor(inputMappingInterface, basicColor) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.timeHelper = new TimeDelayHelper(250);
        this.released = true;
        this.METHOD_NAME = "onCompleteMotionGestureInputEvent";
        this.RELEASE = "Ignoring: MotionGestureInput Release";
        this.FAST_REPEAT = "Ignoring: MotionGestureInput Repeated To Quickly";
        this.IGNORE = "Ignoring: Until Released";
        this.inputMappingInterface = inputMappingInterface;
        CompleteMotionGestureInputEventHandler.getInstance().addListenerInterface(this);
        this.touchButtonsPaintable = new TouchButtonsMappingPaintable(basicColor);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent) {
        try {
            this.logUtil.putF(this.commonStrings.START, this, "onCompleteMotionGestureInputEvent");
            var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
            ;
            var gameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent;
            ;
            var gameKey = gameKeyCompleteMotionGestureInputEvent.getGameKey();
            ;
            var motionGestureInput = completeMotionGestureInputEvent.getMotionGestureInput();
            ;
            if (motionGestureInput == touchMotionGestureFactory.RELEASED) {
                this.logUtil.putF(this.RELEASE, this, this.METHOD_NAME);
                this.released = true;
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if (motionGestureInput == TouchMotionGestureFactory.getInstance().NO_MOTION && !this.timeHelper.isTimeTNT()) {
                this.logUtil.putF(this.FAST_REPEAT, this, this.METHOD_NAME);
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if (!this.released) {
                this.logUtil.putF(this.IGNORE, this, this.METHOD_NAME);
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            this.released = false;
            this.logUtil.putF(new StringMaker().append("GameKey: ").append(StringUtil.getInstance().toString(gameKey)).append(" MotionGestureInput: ").append(StringUtil.getInstance().toString(motionGestureInput)).toString(), this, this.METHOD_NAME);
            this.inputMappingInterface.processInputMapping(gameKey, motionGestureInput);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.METHOD_NAME, e);
        }
    }
    process() {
        CompleteMotionGestureInputEventHandler.getInstance().removeListener(this);
    }
}
