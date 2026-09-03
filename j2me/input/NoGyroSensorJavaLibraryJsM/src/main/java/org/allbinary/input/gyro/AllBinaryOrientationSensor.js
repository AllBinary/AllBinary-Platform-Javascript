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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const CompleteMotionGestureInputEventListenerInterface = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface;
import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
//not GWT import const NoCompleteMotionGestureInputEventListener = globalThis.org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener;
import { AllBinarySensor } from '../../../../org/allbinary/input/AllBinarySensor.js';
//not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryOrientationSensor extends AllBinarySensor {
    setListener(completeMotionGestureInputEventListenerInterface) {
        this.listener = completeMotionGestureInputEventListenerInterface;
    }
    constructor() {
        super();
        this.listener = NoCompleteMotionGestureInputEventListener.getInstance();
    }
    //@Throws(Exception.constructor)
    getOrientation() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
}
AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR = new AllBinaryOrientationSensor();
