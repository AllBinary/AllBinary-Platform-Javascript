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
import { Exception } from '../../../../../java/lang/Exception.js';
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { AndroidHardware } from '../../../../../org/allbinary/logic/system/hardware/android/AndroidHardware.js';
//not GWT import const GenericOperatingSystem
import { OperatingSystems } from '../../../../../org/allbinary/logic/system/os/OperatingSystems.js';
//not GWT import const OperatingSystems
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NoHardware } from './NoHardware.js';
//not GWT import - same folder const HardwareInterface
export class HardwareFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HardwareFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.tsUtil = TsUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getInstance(os) {
        try {
            var operatingSystems = OperatingSystems.getInstance();
            ;
            if (this.tsUtil.compareTo(os.getName(), operatingSystems.ANDROID) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new AndroidHardware();
            }
            else if (this.tsUtil.compareTo(os.getName(), operatingSystems.HARMONY) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new AndroidHardware();
            }
            throw new Exception("No Hardware Imp for: " + os.getName());
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put("Ignoring Exception Returning NoHardware", this, commonStrings.GET_INSTANCE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return new NoHardware();
        }
    }
}
HardwareFactory.instance = new HardwareFactory();
