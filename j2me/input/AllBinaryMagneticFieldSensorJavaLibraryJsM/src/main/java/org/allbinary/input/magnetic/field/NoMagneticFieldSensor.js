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
//not GWT import const AllBinarySensorListener = globalThis.org.allbinary.input.AllBinarySensorListener;
import { Orientation } from '../../../../../org/allbinary/logic/math/Orientation.js';
//not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMagneticFieldSensor } from './AllBinaryMagneticFieldSensor.js';
//not GWT import - same folder const AllBinaryMagneticFieldSensor = globalThis.org.allbinary.input.magnetic.field.AllBinaryMagneticFieldSensor;
export class NoMagneticFieldSensor extends AllBinaryMagneticFieldSensor {
    //@Throws(Exception.constructor)
    getOrientation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Orientation.NONE;
    }
    onSensorChange() {
    }
}
