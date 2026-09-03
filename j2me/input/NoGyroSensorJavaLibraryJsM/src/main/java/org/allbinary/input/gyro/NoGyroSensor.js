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
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { Orientation } from '../../../../org/allbinary/logic/math/Orientation.js';
//not GWT import const Orientation = globalThis.org.allbinary.logic.math.Orientation;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryOrientationSensor } from './AllBinaryOrientationSensor.js';
//not GWT import const AllBinaryOrientationSensor = globalThis.org.allbinary.input.gyro.AllBinaryOrientationSensor;
export class NoGyroSensor extends AllBinaryOrientationSensor {
    constructor() {
        super();
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
    }
    //@Throws(Exception.constructor)
    getOrientation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Orientation.NONE;
    }
    onSensorChange() {
    }
}
