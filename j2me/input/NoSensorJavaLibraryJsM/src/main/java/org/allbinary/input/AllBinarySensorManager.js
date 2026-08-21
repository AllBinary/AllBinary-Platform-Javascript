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
import { Object } from '../../../java/lang/Object.js';
import { AccelerometerSensorFactory } from '../../../org/allbinary/input/accelerometer/AccelerometerSensorFactory.js';
import { GyroSensorFactory } from '../../../org/allbinary/input/gyro/GyroSensorFactory.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinarySensorManager extends Object {
    static getInstance() {
        if (AllBinarySensorManager.instance == NullUtil.getInstance().NULL_OBJECT) {
            AllBinarySensorManager.instance = new AllBinarySensorManager();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinarySensorManager.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.ORIENTATION_SENSOR_INPUT = "Orientation Sensor Input";
        this.ORIENTATION_TYPE = "Orientation Type";
        this.list = new BasicArrayListD();
        try {
            GyroSensorFactory.init();
            AccelerometerSensorFactory.init();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
        }
    }
    init() {
    }
    getSensorNamesList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
    shutdown() {
    }
}
AllBinarySensorManager.instance = NullUtil.getInstance().NULL_OBJECT;
