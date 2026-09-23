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
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const AllBinarySensorListener
export class AllBinarySensor extends Object {
    static setMax(max) {
        AllBinarySensor.max = max;
    }
    static getMax() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinarySensor.max;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
    }
    init() {
    }
    //@Throws(Exception.constructor)
    update() {
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinarySensor.getMax();
        ;
    }
    shutdown() {
        this.logUtil.putF(this.commonStrings.START, this, "shutdown");
    }
    onSensorChange() {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
    }
}
AllBinarySensor.NULL_ALLBINARY_SENSOR = new AllBinarySensor();
AllBinarySensor.max = 100;
