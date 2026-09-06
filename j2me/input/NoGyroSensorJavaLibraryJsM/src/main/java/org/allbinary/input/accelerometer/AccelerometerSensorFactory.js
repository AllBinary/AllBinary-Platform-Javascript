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
import { Exception } from '../../../../java/lang/Exception.js';
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;
import { AllBinaryOrientationSensor } from '../../../../org/allbinary/input/gyro/AllBinaryOrientationSensor.js';
//not GWT import const AllBinaryOrientationSensor = globalThis.org.allbinary.input.gyro.AllBinaryOrientationSensor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoAccelerometerSensor } from './NoAccelerometerSensor.js';
//not GWT import - same folder const NoAccelerometerSensor = globalThis.org.allbinary.input.accelerometer.NoAccelerometerSensor;
export class AccelerometerSensorFactory extends Object {
    //@Throws(Exception.constructor)
    static init() {
        var features = Features.getInstance();
        ;
        var sensorFeatureFactory = SensorFeatureFactory.getInstance();
        ;
        if (features.isFeature(sensorFeatureFactory.ORIENTATION_SENSORS)) {
            throw new Exception("No Orientation Sensors");
        }
        else if (features.isFeature(sensorFeatureFactory.SIMULATED_ORIENTATION_SENSORS)) {
            throw new Exception("No Simulation Sensors");
        }
        else if (features.isFeature(sensorFeatureFactory.NO_ORIENTATION)) {
            AccelerometerSensorFactory.allBinaryAccelerometerSensor = new NoAccelerometerSensor();
        }
        else {
            throw new Exception("Not Such SensorFeature");
        }
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AccelerometerSensorFactory.allBinaryAccelerometerSensor;
    }
}
AccelerometerSensorFactory.allBinaryAccelerometerSensor = AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR;
