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
import { Object } from '../../../../../java/lang/Object.js';
import { AnalogControllerConfigurationEvent } from '../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEvent.js';
import { AnalogControllerConfigurationEventHandler } from '../../../../../org/allbinary/android/input/motion/event/AnalogControllerConfigurationEventHandler.js';
import { ScaleFactorFactory } from '../../../../../org/allbinary/logic/math/ScaleFactorFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AnalogControllerConfigurationFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnalogControllerConfigurationFactory.instance;
    }
    constructor() {
        super();
        this.SCALE_FACTOR = ScaleFactorFactory.getInstance().DEFAULT_SCALE_FACTOR;
        this.SCALE_VALUE = ScaleFactorFactory.getInstance().DEFAULT_SCALE_VALUE;
        this.available = false;
        this.analogControllerConfigurationEvent = new AnalogControllerConfigurationEvent(this);
    }
    isAvailable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.available;
    }
    //@Throws(Exception.constructor)
    setAvailable(available) {
        this.available = available;
        AnalogControllerConfigurationEventHandler.getInstance().fireEvent(this.analogControllerConfigurationEvent);
    }
}
AnalogControllerConfigurationFactory.instance = new AnalogControllerConfigurationFactory();
