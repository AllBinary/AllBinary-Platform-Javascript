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
//not GWT import const MotionGestureInput
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const TouchMotionGestureFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const CompleteMotionGestureInputInterface
export class CompleteMotionGestureInputEvent extends AllBinaryEventObject {
    constructor(name, motionGestureInput) {
        super(motionGestureInput);
        this.logUtil = LogUtil.getInstance();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.motionGestureInput = TouchMotionGestureFactory.getInstance().NO_MOTION;
        //For kotlin this is before the body of the constructor.
        this.setName(name);
        try {
            this.setMotionGestureInput(motionGestureInput);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "InputToGameKeyEventAction", e);
        }
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setMotionGestureInput(motionGestureInput) {
        this.motionGestureInput = motionGestureInput;
    }
    getMotionGestureInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.motionGestureInput;
    }
}
