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
import { AllBinaryOrientationSensor } from '../../../../org/allbinary/input/gyro/AllBinaryOrientationSensor.js';
//not GWT import const AllBinaryOrientationSensor = globalThis.org.allbinary.input.gyro.AllBinaryOrientationSensor;
import { Orientation } from '../../../../org/allbinary/logic/math/Orientation.js';
//not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NoAccelerometerSensor extends AllBinaryOrientationSensor {
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    getOrientation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Orientation.NONE;
    }
    onSensorChange() {
    }
}
