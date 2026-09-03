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
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryOrientationSensor } from './AllBinaryOrientationSensor.js';
//not GWT import const AllBinaryOrientationSensor = globalThis.org.allbinary.input.gyro.AllBinaryOrientationSensor;
import { NoGyroSensor } from './NoGyroSensor.js';
//not GWT import const NoGyroSensor = globalThis.org.allbinary.input.gyro.NoGyroSensor;
export class GyroSensorFactory extends Object {
    //@Throws(Exception.constructor)
    static init() {
        GyroSensorFactory.allBinaryGyroSensor = new NoGyroSensor();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GyroSensorFactory.allBinaryGyroSensor;
    }
}
GyroSensorFactory.allBinaryGyroSensor = AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR;
