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
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
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
