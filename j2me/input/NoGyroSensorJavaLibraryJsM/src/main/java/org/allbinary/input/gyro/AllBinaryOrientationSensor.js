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
import { Exception } from '../../../../java/lang/Exception.js';
import { NoCompleteMotionGestureInputEventListener } from '../../../../org/allbinary/game/input/motion/action/NoCompleteMotionGestureInputEventListener.js';
import { AllBinarySensor } from '../../../../org/allbinary/input/AllBinarySensor.js';
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
