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
//not GWT import const AllBinarySensor = globalThis.org.allbinary.input.AllBinarySensor;
import { NoAllBinarySensor } from '../../../../org/allbinary/input/NoAllBinarySensor.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SensorGameUpdateProcessor extends Object {
    constructor() {
        super(...arguments);
        this.inputSensor = NoAllBinarySensor.getInstance();
    }
    setInputSensor(inputSensor) {
        this.inputSensor = inputSensor;
    }
    getInputSensor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputSensor;
    }
    //@Throws(Exception.constructor)
    process(anyType = {}) {
    }
    //@Throws(Exception.constructor)
    sendNotifications(anyType = {}) {
    }
    isAnySensor() {
        if (this.inputSensor == NoAllBinarySensor.getInstance()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    setNoSensors() {
        this.setInputSensor(NoAllBinarySensor.getInstance());
    }
}
